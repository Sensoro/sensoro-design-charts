import type { BarProps } from '@sensoro-design/chart';
import { Bar } from '@sensoro-design/chart';

const tickTextMap: Record<number, string> = {
  0: '低风险',
  30: '潜在风险',
  50: '中风险',
  70: '高风险',
  100: '',
};
const barWidth = 6;
const ticks = Object.keys(tickTextMap).map(val => +val);

function Example() {
  const spec: BarProps = {
    height: 55,
    padding: {
      top: 0,
      right: 0,
      left: 0,
    },
    color: ['#3EB390', '#3EB390', '#CC9B47', '#D96299', '#D96762'],
    data: [
      {
        values: [
          { type: 'A', year: 0, value: 0, step: 0 },
          { type: 'B', year: 0, value: 30, step: 30 },
          { type: 'C', year: 0, value: 50, step: 20 },
          { type: 'D', year: 0, value: 70, step: 20 },
          { type: 'E', year: 0, value: 100, step: 30 },
        ],
      },
    ],
    tooltip: {
      visible: false,
    },
    barWidth,
    yField: 'year',
    xField: 'step',
    direction: 'horizontal',
    seriesField: 'type',
    label: {
      visible: true,
      dataFilter: (data) => {
        data.splice(-1, 1);
        return data;
      },
      formatMethod: (_, datum) => {
        return tickTextMap[datum?.value];
      },
      style: {
        type: 'text',
        fontSize: 12,
        fill: '#AEC0DE',
        lineWidth: 0,
        dy: -30,
        dx: 2,
      },
    },
    axes: [
      {
        orient: 'bottom',
        tick: {
          tickMode: () => {
            return ticks;
          },
        },
        label: {
          space: 4,
        },
      },
      {
        visible: false,
        orient: 'left',
        bandSize: 40,
        label: {
          visible: false,
        },
      },
    ],
    extensionMark: [
      {
        type: 'rect',
        style: {
          fill: '#F6F9FE',
          width: 4,
          height: barWidth,
          x: (_, ctx) => {
            // @ts-expect-error 忽略报错
            return ctx.valueToX(80);
          },
          y: 32.5,
        },
      },
    ],
    crosshair: [
      {
        yField: {
          visible: false,
        },
      },
    ],
  };

  return (
    <Bar {...spec} />
  );
};

export default Example;
