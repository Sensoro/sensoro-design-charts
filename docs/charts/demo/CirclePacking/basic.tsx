import type { CirclePackingProps } from '@sensoro-design/chart';
import { CirclePacking } from '@sensoro-design/chart';

const data = [
  {
    name: 'Country A',
    children: [
      {
        name: 'Region1',
        children: [
          { name: 'Office Supplies', value: 824 },
          { name: 'Furniture', value: 920 },
          { name: 'Electronic equipment', value: 936 },
        ],
      },
      {
        name: 'Region2',
        children: [
          { name: 'Office Supplies', value: 1270 },
          { name: 'Furniture', value: 1399 },
          { name: 'Electronic equipment', value: 1466 },
        ],
      },
      {
        name: 'Region3',
        children: [
          { name: 'Office Supplies', value: 1408 },
          { name: 'Furniture', value: 1676 },
          { name: 'Electronic equipment', value: 1559 },
        ],
      },
      {
        name: 'Region4',
        children: [
          { name: 'Office Supplies', value: 745 },
          { name: 'Furniture', value: 919 },
          { name: 'Electronic equipment', value: 781 },
        ],
      },
      {
        name: 'Region5',
        children: [
          { name: 'Office Supplies', value: 267 },
          { name: 'Furniture', value: 316 },
          { name: 'Electronic equipment', value: 230 },
        ],
      },
      {
        name: 'Region6',
        children: [
          { name: 'Office Supplies', value: 347 },
          { name: 'Furniture', value: 501 },
          { name: 'Electronic equipment', value: 453 },
        ],
      },
    ],
  },
  {
    name: 'Country B',
    children: [
      {
        name: 'Region1',
        children: [
          { name: 'Office Supplies', value: 824 },
          { name: 'Furniture', value: 920 },
          { name: 'Electronic equipment', value: 936 },
        ],
      },
      {
        name: 'Region2',
        children: [
          { name: 'Office Supplies', value: 1270 },
          { name: 'Furniture', value: 1399 },
          { name: 'Electronic equipment', value: 1466 },
        ],
      },
      {
        name: 'Region3',
        children: [
          { name: 'Office Supplies', value: 1408 },
          { name: 'Furniture', value: 1676 },
          { name: 'Electronic equipment', value: 1559 },
        ],
      },
      {
        name: 'Region4',
        children: [
          { name: 'Office Supplies', value: 745 },
          { name: 'Furniture', value: 919 },
          { name: 'Electronic equipment', value: 781 },
        ],
      },
      {
        name: 'Region5',
        children: [
          { name: 'Office Supplies', value: 267 },
          { name: 'Furniture', value: 316 },
          { name: 'Electronic equipment', value: 230 },
        ],
      },
      {
        name: 'Region6',
        children: [
          { name: 'Office Supplies', value: 347 },
          { name: 'Furniture', value: 501 },
          { name: 'Electronic equipment', value: 453 },
        ],
      },
    ],
  },
  {
    name: 'Country C',
    children: [
      {
        name: 'Region1',
        children: [
          { name: 'Office Supplies', value: 824 },
          { name: 'Furniture', value: 920 },
          { name: 'Electronic equipment', value: 936 },
        ],
      },
      {
        name: 'Region2',
        children: [
          { name: 'Office Supplies', value: 1270 },
          { name: 'Furniture', value: 1399 },
          { name: 'Electronic equipment', value: 1466 },
        ],
      },
      {
        name: 'Region3',
        children: [
          { name: 'Office Supplies', value: 1408 },
          { name: 'Furniture', value: 1676 },
          { name: 'Electronic equipment', value: 1559 },
        ],
      },
      {
        name: 'Region4',
        children: [
          { name: 'Office Supplies', value: 745 },
          { name: 'Furniture', value: 919 },
          { name: 'Electronic equipment', value: 781 },
        ],
      },
      {
        name: 'Region5',
        children: [
          { name: 'Office Supplies', value: 267 },
          { name: 'Furniture', value: 316 },
          { name: 'Electronic equipment', value: 230 },
        ],
      },
      {
        name: 'Region6',
        children: [
          { name: 'Office Supplies', value: 347 },
          { name: 'Furniture', value: 501 },
          { name: 'Electronic equipment', value: 453 },
        ],
      },
    ],
  },
];

function Example() {
  const spec: CirclePackingProps = {
    height: 400,
    data: [
      {
        id: 'data',
        values: data,
      },
    ],
    categoryField: 'name',
    valueField: 'value',
    drill: true,
    layoutPadding: 5,
    label: {
      style: {
        fontSize: 10,
        visible: (d) => {
          return d.depth === 0;
        },
      },
    },
    animationEnter: {
      easing: 'cubicInOut',
    },
    animationExit: {
      easing: 'cubicInOut',
    },
    animationUpdate: {
      easing: 'cubicInOut',
    },
    tooltip: {
      mark: {
        title: {
          value: (val) => {
            return val?.datum?.map(data => data.name).join(' / ');
          },
        },
      },
    },
  };

  return (
    <CirclePacking {...spec} />
  );
};

export default Example;
