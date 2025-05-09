import type { GaugeProps } from '@sensoro-design/chart';
import { Gauge } from '@sensoro-design/chart';

function Example() {
  const spec: GaugeProps = {
    height: 400,
    data: [
      {
        id: 'id0',
        values: [
          {
            type: '目标A',
            value: 0.6,
          },
        ],
      },
    ],
    categoryField: 'type',
    valueField: 'value',
    outerRadius: 0.8,
    innerRadius: 0.5,
    startAngle: -180,
    endAngle: 0,
  };

  return (
    <Gauge {...spec} />
  );
};

export default Example;
