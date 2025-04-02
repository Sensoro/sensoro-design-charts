import type { PieProps } from '@sensoro-design/chart';
import { Pie } from '@sensoro-design/chart';
import { colorGreyPro07, colorWhite } from '@sensoro-design/chart-theme';

const list = [
  { type: '正面', value: 24253 },
  { type: '中性', value: 2602 },
  { type: '负面', value: 274 },
];

const total = list.reduce<number>((prev, cur) => prev + cur.value, 0);

function Example() {
  const spec: PieProps = {
    height: 400,
    data: [
      {
        values: list,
      },
    ],
    outerRadius: 0.8,
    innerRadius: 0.6,
    valueField: 'value',
    categoryField: 'type',
    tooltip: {
      mark: {
        title: {
          visible: false,
        },
        content: () => {
          return [
            {
              hasShape: true,
              shapeType: 'square',
              key: datum => datum?.type,
              keyStyle: {
                fill: colorWhite,
                // fontSize: 14,
              },
            },
            {
              hasShape: false,
              key: '风险数量',
              value: (datum) => {
                return datum?.value.toLocaleString();
              },
              keyStyle: {
                dx: -20,
              },
            },
            {
              hasShape: false,
              key: '风险占比',
              value: (datum) => {
                return `${((datum?.value / total) * 100).toFixed(2)}%`;
              },
            },
          ];
        },
      },
      style: {
        titleLabel: {
          fill: colorWhite,
        },
      },
    },
    indicator: {
      visible: true,
      title: {
        visible: true,
        space: 12,
        style: {
          fontSize: 24,
          fill: '#293449',
          fontWeight: 600,
          text: total,
        },
      },
      content: [
        {
          visible: true,
          style: {
            fontSize: 12,
            fill: colorGreyPro07,
            text: '风险数量',
          },
        },
      ],
    },
  };

  return (
    <Pie {...spec} />
  );
};

export default Example;
