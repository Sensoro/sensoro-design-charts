import type { BarProps } from '@sensoro-design/chart';
import { Bar } from '@sensoro-design/chart';

const list = [
  {
    name: '中央媒体',
    value: 100,
    type: '文章数',
  },
  {
    name: '网络媒体',
    value: 100,
    type: '文章数',
  },
  {
    name: '爆料媒体',
    value: 30,
    type: '文章数',
  },
  {
    name: '政府机构',
    value: 12,
    type: '文章数',
  },
  {
    name: '微博',
    value: 97,
    type: '文章数',
  },
  {
    name: '微信',
    value: 99,
    type: '文章数',
  },
  {
    name: '短视频',
    value: 98,
    type: '文章数',
  },
  {
    name: '贴吧论坛',
    value: 32,
    type: '文章数',
  },
  {
    name: '境外媒体',
    value: 5,
    type: '文章数',
  },
  {
    name: '境外社交媒体',
    value: 0,
    type: '文章数',
  },

  {
    name: '中央媒体',
    value: 94,
    type: '权重修正数',
  },
  {
    name: '网络媒体',
    value: 97,
    type: '权重修正数',
  },
  {
    name: '爆料媒体',
    value: '34',
    type: '权重修正数',
  },
  {
    name: '政府机构',
    value: 14,
    type: '权重修正数',
  },
  {
    name: '微博',
    value: 99,
    type: '权重修正数',
  },
  {
    name: '微信',
    value: 97,
    type: '权重修正数',
  },
  {
    name: '短视频',
    value: 98,
    type: '权重修正数',
  },
  {
    name: '贴吧论坛',
    value: 32,
    type: '权重修正数',
  },
  {
    name: '境外媒体',
    value: 6,
    type: '权重修正数',
  },
  {
    name: '境外社交媒体',
    value: 0,
    type: '权重修正数',
  },
];

function Example() {
  const spec: BarProps = {
    height: 400,
    padding: [24 + 20 + 40, 24, 24, 24],
    title: {
      text: '文章来源',
      layoutType: 'absolute',
      top: -60,
      left: 0,
      padding: 0,
      textStyle: {
        fontSize: 14,
        fill: '#F6F9FE',
      },
    },
    legends: {
      visible: true,
      position: 'end',
      orient: 'top',
      layoutType: 'absolute',
      top: -60,
      left: 0,
      right: -24,
    },
    data: [
      {
        values: list,
      },
    ],
    xField: ['name', 'type'],
    yField: 'value',
    seriesField: 'type',
    barWidth: 8,
    barGapInGroup: 4,
  };

  return (
    <Bar {...spec} />
  );
};

export default Example;
