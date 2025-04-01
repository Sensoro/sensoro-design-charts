import type { BarProps } from '@sensoro-design/chart';
import { Bar } from '@sensoro-design/chart';

const list = [
  {
    name: '搜狐新闻',
    value: 257,
  },
  {
    name: '网易新闻自媒体',
    value: 142,
  },
  {
    name: '财经头条',
    value: 125,
  },
  {
    name: '新浪财经',
    value: 61,
  },
  {
    name: '东方财富网',
    value: 60,
  },
  {
    name: '一点资讯',
    value: 48,
  },
  {
    name: '新浪网',
    value: 41,
  },
  {
    name: '顶端新闻',
    value: 41,
  },
  {
    name: '新浪财经头条号',
    value: 35,
  },
  {
    name: '哔哩哔哩',
    value: 32,
  },
];

function Example() {
  const spec: BarProps = {
    height: 400,
    data: [
      {
        values: list,
      },
    ],
    xField: 'name',
    yField: 'value',
    barWidth: 20,
    label: {
      visible: true,
      style: {
        fontSize: 11,
        fill: '#AEC0DE',
      },
    },
  };

  return (
    <Bar {...spec} />
  );
};

export default Example;
