import type { CirclePackingProps } from '@sensoro-design/chart';
import { CirclePacking } from '@sensoro-design/chart';

const data = Array.from({ length: 19 }).fill(0).map((_, i) => {
  return {
    name: `bubble-${i + 1}`,
    value: i + 1,
  };
});

function Example() {
  const spec: CirclePackingProps = {
    height: 400,
    data: [
      {
        id: 'data',
        values: data,
      },
    ],
    categoryField: 'name',
    valueField: 'value',
    drill: true,
    layoutPadding: 5,
    label: {
      style: {
        fontSize: 10,
        visible: (d) => {
          return d.depth === 0;
        },
      },
    },
    animationEnter: {
      easing: 'cubicInOut',
    },
    animationExit: {
      easing: 'cubicInOut',
    },
    animationUpdate: {
      easing: 'cubicInOut',
    },
  };

  return (
    <CirclePacking {...spec} />
  );
};

export default Example;
