import type { LinearProgressProps } from '@sensoro-design/chart';
import { LinearProgress } from '@sensoro-design/chart';

function Example() {
  const spec: LinearProgressProps = {
    height: 300,
    data: [
      {
        id: 'id0',
        values: [
          {
            type: 'Tradition Industries',
            value: 0.795,
            text: '79.5%',
          },
          {
            type: 'Business Companies',
            value: 0.25,
            text: '25%',
          },
          {
            type: 'Customer-facing Companies',
            value: 0.065,
            text: '6.5%',
          },
        ],
      },
    ],
    direction: 'horizontal',
    xField: 'value',
    yField: 'type',
    seriesField: 'type',

    cornerRadius: 20,
    bandWidth: 30,
    axes: [
      {
        orient: 'left',
        label: { visible: true },
        type: 'band',
        domainLine: { visible: false },
        tick: { visible: false },
      },
      { orient: 'bottom', label: { visible: true }, type: 'linear', visible: false },
    ],
  };

  return (
    <LinearProgress {...spec} />
  );
};

export default Example;
