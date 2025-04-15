import type { TwoStateAreaProps } from '@sensoro-design/chart';
import { TwoStateArea } from '@sensoro-design/chart';
import dayjs from 'dayjs';
import reactDom from 'react-dom/client';
import { data } from './_data';

function Example() {
  const spec: TwoStateAreaProps = {
    options: {
      ReactDOM: reactDom,
    },
    height: 200,
    padding: [16 + 20 + 24, 16, 16, 16],
    data,
    title: {
      visible: true,
      layoutType: 'absolute',
      top: -44,
      left: 0,
      padding: 0,
      textStyle: {
        fontSize: 12,
        lineHeight: 20,
        react: {
          height: 20,
          width: 100,
          element: <span>基本示例</span>,
        } as any,
      },
    } as TwoStateAreaProps['title'],
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
    legend: {
      visible: true,
      position: 'end',
      orient: 'top',
      layoutType: 'absolute',
      top: -44,
      left: 0,
      right: -24,
      item: {
        label: {
          style: {
            fontSize: 12,
          },
          formatMethod: (text) => {
            return text === 1 ? '有烟' : '无烟';
          },
        },
      },
    },
  };

  return (
    <TwoStateArea {...spec} />
  );
};

export default Example;
