import type { BarProps } from '@sensoro-design/chart';
import { Bar } from '@sensoro-design/chart';

function Example() {
  const spec: BarProps = {
    height: 400,
    title: {
      text: '基础柱状图',
    },
    data: [
      {
        id: 'barData',
        values: [
          { month: 'Monday', sales: 22 },
          { month: 'Tuesday', sales: 13 },
          { month: 'Wednesday', sales: 25 },
          { month: 'Thursday', sales: 29 },
          { month: 'Friday', sales: 38 },
        ],
      },
    ],
    xField: 'month',
    yField: 'sales',
  };

  return (
    <Bar {...spec} />
  );
};

export default Example;
