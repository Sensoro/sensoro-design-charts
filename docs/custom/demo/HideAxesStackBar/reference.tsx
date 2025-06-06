import type { HideAxesStackBarProps } from '@sensoro-design/chart';
import { HideAxesStackBar } from '@sensoro-design/chart';

function Example() {
  const spec: HideAxesStackBarProps = {
    background: '#161D2A',
    data: [
      { time: 0, select: false },
      { time: 1, select: false },
      { time: 2, select: false },
      { time: 3, select: false },
      { time: 4, select: false },
      { time: 5, select: false },
      { time: 6, value: 10 },
      { time: 7, value: 0 },
      { time: 8, value: 10 },
      { time: 9, value: 0 },
      { time: 10, value: 80 },
      { time: 11, value: 20 },
      { time: 12, value: 10 },
      { time: 13, value: 50 },
      { time: 14, value: 20 },
      { time: 15, value: 0 },
      { time: 16, value: 20 },
      { time: 17, value: 10 },
      { time: 18, value: 0 },
      { time: 19, value: 8 },
      { time: 20, select: false },
      { time: 21, select: false },
      { time: 22, select: false },
      { time: 23, select: false },
    ],
    tooltip: {
      dimension: {
        content: {
          key: (datum) => {
            return `${datum?.time}:00 ~ ${datum?.time + 1}:00`;
          },
          value: (datum) => {
            return `${datum?.value} 次`;
          },
        },
      },
    },
    legends: {
      visible: true,
      type: 'discrete',
      interactive: false,
      data: (list) => {
        const items = list
          .filter((item) => {
            return !item.label.includes('hide');
          });

        const referenceItem = items.find(item => item.label.includes('reference'))!;
        const dayItem = items.find(item => item.label.includes('day'))!;
        const nightItem = items.find(item => item.label.includes('night'))!;

        return [
          { ...nightItem, label: '夜晚' },
          { ...dayItem, label: '白天' },
          {
            ...dayItem,
            label: '出行参考',
            shape: {
              ...dayItem.shape,
              fill: referenceItem.shape.stroke,
            },
          },
        ];
      },
    },
    height: 150,
    width: 400,
  };

  return (
    <HideAxesStackBar {...spec} />
  );
};

export default Example;
