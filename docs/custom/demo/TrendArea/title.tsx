import { hyphenPointPath, TrendArea } from '@sensoro-design/chart';
import { colorBlue2, colorGreen2 } from '@sensoro-design/chart-theme';
import reactDom from 'react-dom/client';
import { data } from './_data';

function Example() {
  return (
    <TrendArea
      options={{
        ReactDOM: reactDom,
      }}
      height={400}
      title={{
        text: '',
        textStyle: {
          fontSize: 12,
          lineHeight: 20,
          react: {
            element: <span style={{ color: 'red' }}>基本示例</span>,
          } as any,
        },
      }}
      selectTime={[3, 19]}
      data={data}
      tooltip={{
        dimension: {
          content: {
            key: '出行次数',
            value: (datum) => {
              return datum?.value;
            },
          },
        },
      }}
      legends={{
        visible: true,
        interactive: false,
        item: {
          spaceCol: 24,
          shape: {
            style: {
              size: 10,
              symbolType: hyphenPointPath,
              dy: -4,
            },
          },
        },
        data: (list) => {
          const dayItem = list.find(item => item.label.includes('day'))!;
          const nightItem = list.find(item => item.label.includes('night'))!;

          return [
            {
              ...nightItem,
              label: '夜晚',
              shape: {
                ...dayItem.shape,
                fill: colorBlue2,
              },
            },
            {
              ...dayItem,
              label: '白天',
              shape: {
                ...dayItem.shape,
                fill: colorGreen2,
              },
            },
            {
              ...dayItem,
              label: '出行参考',
              shape: {
                ...dayItem.shape,
                fill: '#AAB0BA',
              },
            },
          ];
        },
      }}
    />
  );
};

export default Example;
