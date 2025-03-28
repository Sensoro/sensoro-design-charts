import type { PieProps } from '@sensoro-design/chart';
import { Pie } from '@sensoro-design/chart';

function Example() {
  const spec: PieProps = {
    height: 300,
    data: [
      {
        values: [
          { type: 'oxygen', value: '46.60' },
          { type: 'silicon', value: '27.72' },
          { type: 'aluminum', value: '8.13' },
          { type: 'iron', value: '5' },
          { type: 'calcium', value: '3.63' },
          { type: 'sodium', value: '2.83' },
          { type: 'potassium', value: '2.59' },
          { type: 'others', value: '3.5' },
        ],
      },
    ],
    outerRadius: 0.8,
    valueField: 'value',
    categoryField: 'type',
    title: {
      visible: true,
      text: '基础饼图',
    },
    legends: {
      visible: true,
      orient: 'left',
    },
    label: {
      visible: true,
    },
    tooltip: {
      mark: {
        content: [
          {
            key: datum => datum?.type,
            value: datum => `${datum?.value}%`,
          },
        ],
      },
    },
  };

  return (
    <Pie {...spec} />
  );
};

export default Example;
