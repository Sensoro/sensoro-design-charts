import type { LineProps } from '@sensoro-design/chart';
import { hyphenPointPath, Line } from '@sensoro-design/chart';
import dayjs from 'dayjs';
import list from './data1.json';
import './test.css';

function Example() {
  const spec: LineProps = {
    height: 400,
    padding: [24 + 20 + 24, 24, 24, 24],
    xField: 'date',
    yField: 'value',
    seriesField: 'name',
    data: {
      values: list,
    },
    axes: [
      {
        orient: 'bottom',
        label: {
          formatMethod: (val) => {
            return dayjs(val as string).format('MM.DD');
          },
        },
        tick: {
          tickCount: 8,
        },
      },
      {
        orient: 'left',
        label: {
          space: 0,
          style: {
            textAlign: 'start',
            dy: -10,
          },
        },
      },
    ],
    legends: [
      {
        visible: true,
        position: 'end',
        orient: 'top',
        layoutType: 'absolute',
        top: -44,
        left: 0,
        right: -24,
        item: {
          shape: {
            style: {
              size: 10,
              symbolType: hyphenPointPath,
              dy: -4,
            },
          },
        },
      },
    ],
    tooltip: {
      mark: {
        visible: false,
      },
      className: 'test-tooltip',
      dimension: {
        shapeType: hyphenPointPath,
        title: {
          value: (datum) => {
            return dayjs(datum?.date).format('MM.DD');
          },
        },
      },
    },
  };

  return (
    <Line {...spec} />
  );
};

export default Example;
