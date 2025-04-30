import type {
  Datum,
  IVChart,
  SankeyLinkElement,
  SankeyNodeDatum,
  SankeyNodeElement,
  SankeyProps,
} from '@sensoro-design/chart';
import { Sankey } from '@sensoro-design/chart';
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
        name: '今日巡航次数',
        value: 160,
        total: 1087875,
        children: [
          {
            name: '公共安全',
            value: 40,
            total: 287875,
            children: [
              {
                name: '紧急响应',
                value: 10,
                total: 18764,
                children: [
                  { name: '暴力行为', value: 10, total: 1864 },
                  { name: '突发状况', value: 10, total: 1864 },
                ],
              },
              {
                name: '异常跟踪',
                value: 10,
                total: 22329,
              },
              { name: '持续监测', value: 10, total: 43093 },
              { name: '巡航正常', value: 10, total: 763875 },
            ],
          },
          {
            name: '交通安全',
            value: 40,
            total: 200653,
            children: [
              {
                name: '紧急响应',
                value: 10,
                total: 18764,
                children: [
                  { name: '暴力行为', value: 10, total: 1864 },
                  { name: '突发状况', value: 10, total: 1864 },
                ],
              },
              { name: '异常跟踪', value: 10, total: 22329 },
              { name: '持续监测', value: 10, total: 43093 },
              { name: '巡航正常', value: 10, total: 763875 },
            ],
          },
          {
            name: '市容市政',
            value: 40,
            total: 406765,
            children: [
              { name: '紧急响应', value: 10, total: 18764 },
              { name: '异常跟踪', value: 10, total: 22329 },
              { name: '持续监测', value: 10, total: 43093 },
              { name: '巡航正常', value: 10, total: 763875 },
            ],
          },
          {
            name: '城市秩序',
            value: 40,
            total: 82854,
            children: [
              { name: '紧急响应', value: 10, total: 18764 },
              { name: '异常跟踪', value: 10, total: 22329 },
              { name: '持续监测', value: 10, total: 43093 },
              { name: '巡航正常', value: 10, total: 763875 },
            ],
          },
        ],
      },
    ],
  },
];

const colors = ['#423CD1', '#E7474D', '#E7AF2C', '#51C2E1', '#3AC583'];
const defaultSpecified = {
  紧急响应: colors[1],
  异常跟踪: colors[2],
  持续监测: colors[3],
  巡航正常: colors[4],
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
  const [isAutoHover, setIsAutoHover] = React.useState(false);
  const [changeLabel, setChangeLabel] = React.useState(false);

  const nodeKey = React.useCallback((datum: SankeyNodeDatum) => {
    return (datum as SankeyNodeDatum & { name: string }).name;
  }, []);
  const nodeHeight = React.useCallback((node: SankeyNodeElement) => {
    if (node.depth === 0) {
      return 160;
    }

    if (node.depth === 1 || node.depth === 2) {
      return 40;
    }

    return 20;
  }, []);
  const linkHeight = React.useCallback((_: SankeyLinkElement, sourceNode: SankeyNodeElement) => {
    if (sourceNode.depth === 0) {
      return 40;
    }

    if (sourceNode.depth === 1) {
      return 10;
    }

    return 20;
  }, []);

  const nodeStyleFill = React.useCallback(
    (datum: Datum) => {
      if (datum.depth !== 2) {
        return colors[0];
      }

      return specified[datum.key];
    },
    [],
  );

  const linkStyleFill = React.useCallback(
    (datum: Datum) => {
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
    [],
  );

  const labelFormatMethod = React.useCallback((_: string | string[], datum: Datum) => {
    if (changeLabel) {
      return `${datum?.name} ${(datum?.total + 11)?.toLocaleString()}`;
    }
    return `${datum?.name} ${datum?.total?.toLocaleString()}`;
  }, [changeLabel]);

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

    setIsAutoHover(false);
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

    setIsAutoHover(true);
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
    const interval = setInterval(() => {
      setChangeLabel(prev => !prev);
    }, 3 * 1000);

    return () => {
      interval && clearInterval(interval);
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
        height={600}
        data={[
          {
            id: 'sankey-data',
            values,
          },
        ]}
        color={{
          type: 'ordinal',
          range: colors,
          domain: [],
          specified,
        }}
        categoryField="name"
        valueField="value"
        nodeAlign="left"
        nodeWidth={4}
        nodeKey={nodeKey}
        nodeHeight={nodeHeight}
        linkHeight={linkHeight}
        node={{
          style: {
            // 扩大 node 点击热区
            boundsPadding: [0, 20, 0, 20],
            fill: nodeStyleFill,
          },
        }}
        link={{
          style: {
            fillOpacity: 0.3,
            fill: linkStyleFill as any,
          },
          state: {
            selected: {
              fillOpacity: 1,
            },
          },
        }}
        label={{
          visible: true,
          offset: -12,
          formatMethod: labelFormatMethod as any,
          style: {
            fill: '#F6F9FE',
            fontSize: 12,
          },
        }}
        emphasis={{
          enable: true,
          trigger: 'hover',
          effect: isAutoHover ? 'adjacency' : 'related',
        }}
        ref={chartRef}
        onClick={handleClick}
        onDblClick={handleDblClick}
      />
      <Tooltip style={tooltipStyles} />
    </>
  );
};

export default Example;
