import { Line, type LineProps } from '@sensoro-design/chart';

function Example() {
  const spec: LineProps = {
    height: 400,
    title: {
      text: '基础折线图',
    },
    data: {
      values: [
        { type: 'Nail polish', value: 10054 },
        { type: 'Eyebrow pencil', value: 11067 },
        { type: 'Rouge', value: 7004 },
        { type: 'Lipstick', value: 9054 },
        { type: 'Eyeshadows', value: 12043 },
        { type: 'Eyeliner', value: 12067 },
        { type: 'Foundation', value: 10119 },
        { type: 'Lip gloss', value: 12043 },
        { type: 'Mascara', value: 10419 },
      ],
    },
    defaultMarkLine: {
      y: 10000,
    },
    xField: 'type',
    yField: 'value',
    crosshair: {
      xField: {
        visible: true,
        line: {
          type: 'line',
        },
      },
    }
  };

  return (
    <Line {...spec} />
  )
};

export default Example;
