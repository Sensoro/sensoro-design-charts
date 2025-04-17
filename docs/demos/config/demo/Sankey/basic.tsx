import type { IVChart, SankeyProps } from '@sensoro-design/chart';
import { Sankey } from '@sensoro-design/chart';
import React from 'react';

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
              { name: '高风险', value: 10, total: 18764 },
              { name: '中风险', value: 10, total: 22329 },
              { name: '低风险', value: 10, total: 43093 },
              { name: '无风险', value: 10, total: 763875 },
            ],
          },
          {
            name: '交通安全',
            value: 40,
            total: 200653,
            children: [
              { name: '高风险', value: 10, total: 18764 },
              { name: '中风险', value: 10, total: 22329 },
              { name: '低风险', value: 10, total: 43093 },
              { name: '无风险', value: 10, total: 763875 },
            ],
          },
          {
            name: '市容市政',
            value: 40,
            total: 406765,
            children: [
              { name: '高风险', value: 10, total: 18764 },
              { name: '中风险', value: 10, total: 22329 },
              { name: '低风险', value: 10, total: 43093 },
              { name: '无风险', value: 10, total: 763875 },
            ],
          },
          {
            name: '城市秩序',
            value: 40,
            total: 82854,
            children: [
              { name: '高风险', value: 10, total: 18764 },
              { name: '中风险', value: 10, total: 22329 },
              { name: '低风险', value: 10, total: 43093 },
              { name: '无风险', value: 10, total: 763875 },
            ],
          },
        ],
      },
    ],
  },
];

const colors = ['#423CD1', '#E7474D', '#E7AF2C', '#51C2E1', '#3AC583'];
const specified = {
  今日巡航次数: colors[0],
  公共安全: colors[0],
  交通安全: colors[0],
  市容市政: colors[0],
  城市秩序: colors[0],
  高风险: colors[1],
  中风险: colors[2],
  低风险: colors[3],
  无风险: colors[4],
};

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
  const chartRef = React.useRef<IVChart>(null);
  const [tooltipStyles, setTooltipStyles] = React.useState<React.CSSProperties>({});

  const spec: SankeyProps = {
    height: 600,
    data: [
      {
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
    // 可通过此参数调整同一层中两个节点之间的间隙大小
    // nodeGap: 100,
    nodeKey(datum) {
      // @ts-expect-error 忽略报错
      return datum.name;
    },
    nodeHeight(node) {
      return node.depth === 0 ? 160 : 40;
    },
    label: {
      visible: true,
      offset: 8,
      formatMethod(_, datum) {
        return `${datum?.name} ${datum?.total?.toLocaleString()}`;
      },
      style: {
        fill: '#F6F9FE',
        fontSize: 12,
      },
    },

    link: {
      style: {
        fill(datum) {
          // @ts-expect-error 忽略报错
          const start = specified[datum?.source];
          // @ts-expect-error 忽略报错
          const end = specified[datum?.target];
          return {
            gradient: 'linear',
            x0: 0,
            y0: 0,
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
    },
    emphasis: {
      enable: true,
      trigger: 'hover',
      effect: 'related',
    },
  };

  React.useEffect(
    () => {
      const timeout = setTimeout(() => {
        // eslint-disable-next-line no-console
        console.log(chartRef.current);

        const chart = chartRef.current;

        if (!chart)
          return;
        chart.setTooltipHandler({
          showTooltip: (activeType, data, params) => {
            // eslint-disable-next-line no-console
            console.log(activeType, data, params);
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
        timeout && clearTimeout(timeout);
      };
    },
    [],
  );

  return (
    <>
      <Sankey
        {...spec}
        skipFunctionDiff
        ref={chartRef}
      />
      <Tooltip style={tooltipStyles} />
    </>
  );
};

export default Example;
