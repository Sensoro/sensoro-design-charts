import type { PieProps } from '@sensoro-design/chart';
import { Pie } from '@sensoro-design/chart';
import { darkColors } from '@sensoro-design/chart-theme';

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
    legends: {
      item: {
        spaceCol: 32,
        shape: {
          style: {
            symbolType: 'rectRound',
          },
        },
        label: {
          widthRatio: 0.5,
          formatMethod: (text, item) => {
            const itemData = list[item.index];
            const value = itemData.value;

            return {
              type: 'rich',
              text: [
                {
                  text,
                  fontSize: 12,
                  fill: '#AEC0DE',
                  stroke: false,
                },
                {
                  text: `   ${((value / total) * 100).toFixed(2)}%`,
                  fontSize: 12,
                  fontWeight: 600,
                  fill: '#AEC0DE',
                  stroke: false,
                },
              ],
            } as any;
          },
        },
        value: {
          formatter: '{label:~s}',
        },
      },
    },
    indicator: {
      visible: true,
      title: {
        visible: true,
        space: 12,
        style: {
          fontSize: 20,
          fill: '#F6F9FE',
          fontWeight: 600,
          text: total,
        },
      },
      content: [
        {
          visible: true,
          style: {
            fontSize: 11,
            fill: '#8194B5',
            text: '总量',
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
