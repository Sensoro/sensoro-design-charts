import { RangeColumn, type RangeColumnProps } from '@sensoro-design/chart';
import dayjs from 'dayjs';

const list = [
  { y: '在床', x: [1740995591000, 1740995830000] },
  { y: '在床', x: [1740995934000, 1740996089000] },
  { y: '在床', x: [1740996274000, 1740996438000] },
  { y: '在床', x: [1740996631000, 1740997169000] },
  { y: '在床', x: [1740997577000, 1740997691000] },
  { y: '在床', x: [1740997811000, 1740998902000] },
];

const data = list.map((item) => {
  const { x } = item;
  return {
    name: '1',
    start: x[0],
    end: x[1],
    type: x[0] === 1740996274000 ? 'error' : 'normal',
  };
});

let startLabel = '';

function Example() {
  const spec: RangeColumnProps = {
    height: 160,
    data: {
      values: data,
    },
    direction: 'horizontal',
    yField: 'name',
    xField: ['start', 'end'],
    tooltip: {
      visible: false,
    },
    bar: {
      style: {
        height: 12,
        fill: (datum) => {
          return datum.type === 'error' ? 'rgba(238,97,89,0.25)' : '#588BEE';
        },
      },
    },
    axes: [
      {
        orient: 'left',
        label: {
          visible: false,
        },
        domainLine: {
          visible: false,
        },
      },
      {
        orient: 'bottom',
        type: 'time',
        domainLine: {
          visible: true,
        },
        label: {
          lastVisible: true,
          firstVisible: true,
          formatMethod: (_, datum) => {
            const label = datum?.label;
            if (!startLabel || startLabel === label) {
              startLabel = label;
              return dayjs(label).format('DD-MM HH:mm');
            }
            return dayjs(label).format('HH:mm');
          },
        },
        innerOffset: {
          left: 20,
          right: 20,
        },
      },
    ],
    crosshair: [
      {
        yField: {
          visible: false,
        },
      },
    ]
  };

  return (
    <RangeColumn {...spec} />
  )
}

export default Example;