import type { IVChart, SankeyProps } from '@sensoro-design/chart';
import { Sankey } from '@sensoro-design/chart';
import { uniqueId } from 'es-toolkit/compat';
import React from 'react';
import tree from 'tree-lodash';

/**
 * 从数组获取随机数
 * @param arr
 */
function getRandomElement<T = any>(arr: T[]) {
  if (arr.length === 0) {
    return null;
  }
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

const values = [
  {
    nodes: [
      {
        key: uniqueId(),
        name: '今日巡航次数',
        value: 160,
        total: 1087875,
        children: [
          {
            key: uniqueId(),
            name: '公共安全',
            value: 40,
            total: 287875,
            children: [
              { key: uniqueId(), name: '高风险', value: 10, total: 18764 },
              { key: uniqueId(), name: '中风险', value: 10, total: 22329 },
              { key: uniqueId(), name: '低风险', value: 10, total: 43093 },
              { key: uniqueId(), name: '无风险', value: 10, total: 763875 },
            ],
          },
          {
            key: uniqueId(),
            name: '交通安全',
            value: 40,
            total: 200653,
            children: [
              { key: uniqueId(''), name: '高风险', value: 10, total: 18764 },
              { key: uniqueId(), name: '中风险', value: 10, total: 22329 },
              { key: uniqueId(), name: '低风险', value: 10, total: 43093 },
              { key: uniqueId(), name: '无风险', value: 10, total: 763875 },
            ],
          },
          {
            key: uniqueId(),
            name: '市容市政',
            value: 40,
            total: 406765,
            children: [
              { key: uniqueId(), name: '高风险', value: 10, total: 18764 },
              { key: uniqueId(), name: '中风险', value: 10, total: 22329 },
              { key: uniqueId(), name: '低风险', value: 10, total: 43093 },
              { key: uniqueId(), name: '无风险', value: 10, total: 763875 },
            ],
          },
          {
            key: uniqueId(),
            name: '城市秩序',
            value: 40,
            total: 82854,
            children: [
              { key: uniqueId(), name: '高风险', value: 10, total: 18764 },
              { key: uniqueId(), name: '中风险', value: 10, total: 22329 },
              { key: uniqueId(), name: '低风险', value: 10, total: 43093 },
              { key: uniqueId(), name: '无风险', value: 10, total: 763875 },
            ],
          },
        ],
      },
    ],
  },
];

const colors = ['#423CD1', '#E7474D', '#E7AF2C', '#51C2E1', '#3AC583'];
const defaultSpecified = {
  高风险: colors[1],
  中风险: colors[2],
  低风险: colors[3],
  无风险: colors[4],
};
const specified: Record<string, string> = {
  ...defaultSpecified,
};

tree.foreach(values[0].nodes, (item) => {
  const name = item.name as unknown as string;

  if (!specified[name]) {
    specified[name] = colors[0];
  }
});

function Tooltip(props: { style?: React.CSSProperties }) {
  const { style } = props;

  return (
    <div
      style={{
        position: 'absolute',
        width: '100px',
        visibility: 'hidden',
        backdropFilter: 'blur(20px)',
        background: 'rgba(49,64,89,0.35)',
        padding: 16,
        top: 0,
        left: 0,
        ...style,
      }}
    >
      我是 Tooltip
    </div>
  );
}

function Example() {
  const autoHoverNames = React.useRef<string[]>([
    '公共安全',
    '交通安全',
    '市容市政',
    '城市秩序',
  ]);
  const chartRef = React.useRef<IVChart>(null);
  const timeoutRef = React.useRef<NodeJS.Timeout>();
  const intervalRef = React.useRef<NodeJS.Timeout | null>(null);
  const [tooltipStyles, setTooltipStyles] = React.useState<React.CSSProperties>({});
  const [hideLabel, setHideLabel] = React.useState(false);

  const spec: SankeyProps = {
    height: 600,
    data: [
      {
        id: 'sankey-data',
        values,
      },
    ],
    color: {
      type: 'ordinal',
      range: colors,
      domain: [],
      specified,
    },
    categoryField: 'name',
    valueField: 'value',
    nodeAlign: 'left',
    nodeWidth: 4,
    nodeKey(datum) {
      // @ts-expect-error 忽略报错
      return datum.name;
    },
    nodeHeight(node) {
      return node.depth === 0 ? 160 : 40;
    },
    node: {
      style: {
        // 扩大 node 点击热区
        boundsPadding: [0, 20, 0, 20],
        fill(datum) {
          if (datum.depth !== 2) {
            return colors[0];
          }

          return specified[datum.key];
        },
      },
    },
    label: {
      visible: true,
      offset: -12,
      formatMethod(_, datum) {
        if (hideLabel)
          return ``;
        return `${datum?.name} ${datum?.total?.toLocaleString()}`;
      },
      style: {
        fill: '#F6F9FE',
        fontSize: 12,
      },
    },

    link: {
      style: {
        fillOpacity: 0.3,
        fill(datum) {
          if (![2, 3].includes(datum.parents.length)) {
            return colors[0];
          }
          const start = specified[datum?.source] || colors[0];
          const end = specified[datum?.target] || colors[0];

          return {
            gradient: 'linear',
            x0: 0.1,
            y0: 1,
            x1: 1,
            y1: 1,
            stops: [
              {
                offset: 0,
                color: start,
              },
              {
                offset: 1,
                color: end,
              },
            ],
          };
        },
      },
      state: {
        selected: {
          fillOpacity: 1,
        },
      },
    },
    emphasis: {
      enable: true,
      trigger: 'hover',
      effect: 'related',
    },
  };

  const closeAutoHover = () => {
    const chart = chartRef.current;

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    intervalRef.current && clearInterval(intervalRef.current);
    if (chart) {
      chart.setHovered(null);
    }
  };

  const startAutoHover = () => {
    const chart = chartRef.current;

    if (!chart)
      return;

    const names = autoHoverNames.current;

    closeAutoHover();
    intervalRef.current = setInterval(() => {
      const name = getRandomElement(names);

      if (name) {
        chart.setHovered([
          {
            name,
          },
        ]);
      }
    }, 2 * 1000);
  };

  const handlePointerEnter = () => {
    closeAutoHover();
  };

  const handlePointerLeave = () => {
    startAutoHover();
  };

  React.useEffect(
    () => {
      timeoutRef.current = setTimeout(() => {
        // eslint-disable-next-line no-console
        console.log(chartRef.current);

        const chart = chartRef.current;

        if (!chart)
          return;

        startAutoHover();

        chart.on('pointerenter', { level: 'chart' }, handlePointerEnter);
        chart.on('pointerleave', { level: 'chart' }, handlePointerLeave);

        chart.setTooltipHandler({
          showTooltip: (activeType, data, params) => {
            // console.log(activeType, data, params);
            setTooltipStyles((prev) => {
              return {
                ...prev,
                left: params.event.x + 30,
                top: params.event.y + 30,
              };
            });

            if (params.changePositionOnly) {
              return;
            }

            setTooltipStyles((prev) => {
              return {
                ...prev,
                visibility: 'visible',
              };
            });

            return 0;
          },
          hideTooltip: () => {
            setTooltipStyles((prev) => {
              return {
                ...prev,
                visibility: 'hidden',
              };
            });

            return 0;
          },
          release: () => {},
        });
      }, 500);

      return () => {
        if (chartRef.current) {
          chartRef.current.off('pointerenter', handlePointerEnter);
          chartRef.current.off('pointerleave', handlePointerLeave);
        }
        timeoutRef.current && clearTimeout(timeoutRef.current);
        closeAutoHover();
      };
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setHideLabel(true);
    }, 5 * 1000);

    return () => {
      timeout && clearTimeout(timeout);
    };
  }, []);

  const handleClick: SankeyProps['onClick'] = (e) => {
    if (e.node?.type === 'rect') {
      const { datum } = e;

      const chart = chartRef.current;

      if (!chart)
        return;

      // 加载下层数据
      if (!datum.children) {
        // eslint-disable-next-line no-console
        console.log(e);
        tree.foreach(values[0].nodes, (item) => {
          if (datum.datum.name === item.name) {
            item.children = [
              {
                key: uniqueId(),
                name: '测试节点',
                value: 5,
                total: 1000,
              } as any,
            ];
          }
        });

        chart.updateData('sankey-data', values);
      }
    }
  };

  const handleDblClick: SankeyProps['onDblClick'] = (e) => {
    // eslint-disable-next-line no-console
    console.log(e);
  };

  return (
    <>
      <Sankey
        {...spec}
        ref={chartRef}
        onClick={handleClick}
        onDblClick={handleDblClick}
      />
      <Tooltip style={tooltipStyles} />
    </>
  );
};

export default Example;
