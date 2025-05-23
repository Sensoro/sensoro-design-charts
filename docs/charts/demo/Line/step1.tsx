import type { LineProps } from '@sensoro-design/chart';
import { Line } from '@sensoro-design/chart';

function Example() {
  const spec: LineProps = {
    height: 300,
    xField: 'type',
    yField: 'value',
    title: {
      text: '阶梯折线图',
    },
    data: {
      values: [
        { type: '8-12', value: 0 },
        { type: '8-13', value: 1 },
        { type: '8-14', value: 0 },
        { type: '8-15', value: 0 },
        { type: '8-16', value: 1 },
        { type: '8-17', value: 1 },
      ],
    },
    axes: [
      {
        orient: 'left',
        tick: {
          tickStep: 1,
        },
        max: 1.000001,
        label: {
          visible: true,
          formatMethod: (data) => {
            return data ? '有' : '无';
          },
        },
      },
    ],
    tooltip: {
      dimension: {
        shapeType: 'square',
        content: {
          key: '活动迹象',
          value: (datum) => {
            return datum?.value ? '有' : '无';
          },
        },
      },
    },
    crosshair: {
      xField: {
        visible: true,
        line: {
          type: 'line',
        },
      },
    },
    line: {
      style: {
        curveType: 'stepAfter',
      },
    },
  };

  return (
    <Line {...spec} />
  );
};

export default Example;
