import type { TwoStateAreaProps } from '@sensoro-design/chart';
import { TwoStateArea } from '@sensoro-design/chart';
import dayjs from 'dayjs';
import { data } from './_data';

function Example() {
  const spec: TwoStateAreaProps = {
    height: 200,
    data,
    title: {
      text: '基本示例',
      textStyle: {
        fontSize: 12,
      },
    },
    tooltip: {
      dimension: {
        title: {
          value: (datum) => {
            return dayjs(datum?.time).format('MM-DD HH:mm');
          },
        },
        content: [
          {
            key: (datum) => {
              return `屋内${datum?.value ? '有人' : '无人'}`;
            },
            value: '',
          },
        ],
      },
    },
    xAxes: {
      label: {
        visible: true,
        formatMethod: (data) => {
          return dayjs(data as string).format('HH:mm');
        },
      },
      tick: {
        tickCount: 5,
      },
    },
    crosshair: {
      xField: {
        visible: true,
        line: {
          type: 'line',
          width: 1,
        },
      },
    },
  };

  return (
    <TwoStateArea {...spec} />
  );
};

export default Example;
