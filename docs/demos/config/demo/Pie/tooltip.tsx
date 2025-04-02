import type { PieProps } from '@sensoro-design/chart';
import { Pie } from '@sensoro-design/chart';
import { colorGreyPro07, darkColors } from '@sensoro-design/chart-theme';

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
    color: [darkColors.blue2, darkColors.green2, darkColors.red2],
    outerRadius: 0.8,
    innerRadius: 0.6,
    valueField: 'value',
    categoryField: 'type',
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
