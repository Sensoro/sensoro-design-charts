import type { TwoStateAreaProps } from '@sensoro-design/chart';
import { TwoStateArea } from '@sensoro-design/chart';
import dayjs from 'dayjs';
import reactDom from 'react-dom/client';

function Example() {
  const spec: TwoStateAreaProps = {
    options: {
      ReactDOM: reactDom,
    },
    height: 200,
    padding: [16 + 20 + 24, 16, 16, 16],
    data: [
      { time: 1742491883387, value: 0 },
      { time: 1742513903817, value: 0 },
      { time: 1742535924334, value: 0 },
      { time: 1742535927304, value: 0 },
      { time: 1742556248721, value: 1 },
      { time: 1742556267688, value: 1 },
      { time: 1742556270759, value: 0 },
      { time: 1742556273938, value: 0 },
      { time: 1742578287174, value: 0 },
      { time: 1742600307982, value: 0 },
      { time: 1742622328202, value: 0 },
      { time: 1742642652621, value: 0 },
      { time: 1742642657613, value: 1 },
      { time: 1742642675656, value: 0 },
      { time: 1742664696142, value: 0 },
      { time: 1742686716735, value: 0 },
      { time: 1742686719717, value: 1 },
      { time: 1742708737107, value: 0 },
      { time: 1742708740147, value: 0 },
      { time: 1742708743456, value: 0 },
      { time: 1742729061449, value: 0 },
      { time: 1742729065530, value: 0 },
      { time: 1742729129970, value: 0 },
      { time: 1742730757810, value: 1 },
      { time: 1742730761206, value: 1 },
      { time: 1742730764124, value: 0 },
      { time: 1742752778304, value: 0 },
      { time: 1742774798723, value: 0 },
      { time: 1742796819162, value: 1 },
      { time: 1742796822630, value: 0 },
      { time: 1742815542852, value: 0 },
      { time: 1742815561042, value: 0 },
      { time: 1742837581209, value: 0 },
      { time: 1742859601528, value: 0 },
    ],
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
