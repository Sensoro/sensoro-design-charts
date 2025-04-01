import type { RadarProps } from '@sensoro-design/chart';
import { Radar } from '@sensoro-design/chart';

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
  const spec: RadarProps = {
    height: 400,
    data: [
      {
        values: list,
      },
    ],
    categoryField: 'name',
    valueField: 'value',
    seriesField: 'type',
    point: {
      visible: false,
    },
    line: {
      style: {
        lineWidth: 1.5,
      },
    },
    area: {
      visible: true,
    },
    axes: [
      {
        orient: 'radius',
        min: 0,
        max: 120,
        grid: {
          style: {
            lineDash: [0],
          },
        },
      },
      {
        orient: 'angle',
        tick: {
          visible: false,
        },
        grid: {
          style: {
            lineDash: [0],
          },
        },
        label: {
          space: 8,
        },
      },
    ],
  };

  return (
    <Radar {...spec} />
  );
};

export default Example;
