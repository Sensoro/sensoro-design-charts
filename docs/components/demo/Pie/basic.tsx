import { Pie, type PieProps } from '@sensoro-design/chart';

function Example() {
  const spec: PieProps = {
    height: 36,
    width: 36,
    padding: 0,
    data: [
      {
        values: [
          { type: 'oxygen', value: 46 },
          { type: 'silicon', value: 27 },
        ]
      }
    ],
    outerRadius: 1,
    innerRadius: 0.6,
    padAngle: 2,
    valueField: 'value',
    categoryField: 'type',
    legends: {
      visible: false,
    },
    tooltip: {
      mark: {
        shapeType: 'square',
        title: {
          visible: false,
        },
        content: [
          {
            key: (datum) => {
              return `${datum?.type}`;
            },
            value: (datum) => {
              return `${datum?.value} 次`;
            },
          }
        ]
      }
    },
    theme: 'sensoroDesignDark'
  };

  return (
    <Pie {...spec} />
  )
};

export default Example;
