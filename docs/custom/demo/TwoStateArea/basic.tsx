import type { TwoStateAreaProps } from '@sensoro-design/chart';
import { TwoStateArea } from '@sensoro-design/chart';
import dayjs from 'dayjs';

function Example() {
  const spec: TwoStateAreaProps = {
    height: 200,
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
