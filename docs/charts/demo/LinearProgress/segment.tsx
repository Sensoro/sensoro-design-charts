import type { LinearProgressProps } from '@sensoro-design/chart';
import { LinearProgress } from '@sensoro-design/chart';

function Example() {
  const spec: LinearProgressProps = {
    data: [
      {
        id: 'id0',
        values: [
          {
            type: 'Tradition Industries',
            value: 0.85,
            goal: 0.7,
            text: '79.5%',
          },
        ],
      },
    ],
    direction: 'horizontal',
    xField: 'value',
    yField: 'type',
    seriesField: 'type',
    height: 80,
    cornerRadius: 20,
    progress: {
      style: {
        cornerRadius: 0,
      },
    },
    bandWidth: 30,
    axes: [
      {
        orient: 'right',
        type: 'band',
        domainLine: { visible: false },
        tick: { visible: false },
        label: {
          formatMethod: () => '随便写点啥',
          style: {
            fontSize: 16,
          },
        },
      },
      {
        orient: 'bottom',
        type: 'linear',
        visible: true,
        grid: {
          visible: false,
        },
        label: {
          formatMethod: val => `${+val * 100}%`,
          flush: true,
        },
      },
    ],
  };

  return (
    <LinearProgress {...spec} />
  );
};

export default Example;
