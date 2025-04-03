import type { SankeyProps } from '@sensoro-design/chart';
import { Sankey } from '@sensoro-design/chart';

const values = [
  {
    nodes: [
      {
        name: '今日巡航次数',
        value: 160,
        total: 0,
        children: [
          {
            name: '公共安全',
            value: 40,
            total: 0,
            children: [
              { name: '高风险', value: 10, total: 0 },
              { name: '中风险', value: 10, total: 0 },
              { name: '低风险', value: 10, total: 0 },
              { name: '无风险', value: 10, total: 0 },
            ],
          },
          {
            name: '交通安全',
            value: 40,
            total: 0,
            children: [
              { name: '高风险', value: 10, total: 0 },
              { name: '中风险', value: 10, total: 0 },
              { name: '低风险', value: 10, total: 0 },
              { name: '无风险', value: 10, total: 0 },
            ],
          },
          {
            name: '市容市政',
            value: 40,
            total: 0,
            children: [
              { name: '高风险', value: 10, total: 0 },
              { name: '中风险', value: 10, total: 0 },
              { name: '低风险', value: 10, total: 0 },
              { name: '无风险', value: 10, total: 0 },
            ],
          },
          {
            name: '城市秩序',
            value: 40,
            total: 82854,
            children: [
              { name: '高风险', value: 10, total: 0 },
              { name: '中风险', value: 10, total: 0 },
              { name: '低风险', value: 10, total: 0 },
              { name: '无风险', value: 10, total: 0 },
            ],
          },
        ],
      },
    ],
  },
];

const colors = ['#423CD1', '#E7474D', '#E7AF2C', '#51C2E1', '#3AC583'];
const specified = {
  今日巡航次数: colors[0],
  公共安全: colors[0],
  交通安全: colors[0],
  市容市政: colors[0],
  城市秩序: colors[0],
  高风险: colors[1],
  中风险: colors[2],
  低风险: colors[3],
  无风险: colors[4],
};

function Example() {
  const spec: SankeyProps = {
    height: 600,
    data: [
      {
        values,
      },
    ],
    color: {
      type: 'ordinal',
      range: colors,
      domain: [],
      specified,
    },
    categoryField: 'name',
    valueField: 'value',
    nodeAlign: 'left',
    nodeWidth: 4,
    // @ts-expect-error 忽略报错
    nodeKey: datum => datum.name,
    nodeHeight: (node) => {
      return node.depth === 0 ? 160 : 40;
    },
    label: {
      visible: true,
      offset: 8,
      formatMethod: (_, datum) => {
        return `${datum?.name} ${datum?.total?.toLocaleString()}`;
      },
      style: {
        fill: '#F6F9FE',
        fontSize: 12,
      },
    },
    tooltip: {
      mark: {
        visible: false,
      },
    },

    link: {
      style: {
        fill: '#30343D',
      },
    },

    emphasis: {
      enable: true,
      trigger: 'hover',
      effect: 'related',
    },
  };

  return (
    <Sankey {...spec} />
  );
};

export default Example;
