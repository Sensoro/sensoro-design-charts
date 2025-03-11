import type { Meta, StoryObj } from '@storybook/react';
import { Line } from '../src';

const meta = {
  title: 'Components/Line',
  // @ts-expect-error 暂时忽略
  component: Line,
  parameters: {},
  tags: ['autodocs'],
  argTypes: {},
  args: {  },
} satisfies Meta<typeof Line>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    height: 400,
    title: {
      text: '基础折线图',
    },
    data: {
      values: [
        { type: 'Nail polish', value: 10054 },
        { type: 'Eyebrow pencil', value: 11067 },
        { type: 'Rouge', value: 7004 },
        { type: 'Lipstick', value: 9054 },
        { type: 'Eyeshadows', value: 12043 },
        { type: 'Eyeliner', value: 12067 },
        { type: 'Foundation', value: 10119 },
        { type: 'Lip gloss', value: 12043 },
        { type: 'Mascara', value: 10419 },
      ],
    },
    defaultMarkLine: {
      y: 10000,
    },
    xField: 'type',
    yField: 'value',
    crosshair: {
      xField: {
        visible: true,
        line: {
          type: 'line',
        },
      },
    }
  },
};

export const Step: Story = {
  args: {
    height: 300,
    xField: 'type',
    yField: 'value',
    title: {
      text: '阶梯折线图',
    },
    data: {
      values: [
        { type: '8-12', value: 0 },
        { type: '8-13', value: 1 },
        { type: '8-14', value: 0 },
        { type: '8-15', value: 0 },
        { type: '8-16', value: 1 },
        { type: '8-17', value: 1 },
      ],
    },
    axes: [
      {
        orient: 'left',
        tick: {
          tickStep: 1,
        },
        max: 1.000001,
        label: {
          visible: true,
          formatMethod: (data) => {
            return data ? '有' : '无';
          },
        },
      },
    ],
    tooltip: {
      dimension: {
        shapeType: 'square',
        content: {
          key: '活动迹象',
          value: (datum) => {
            return datum?.value ? '有' : '无';
          },
        },
      },
    },
    crosshair: {
      xField: {
        visible: true,
        line: {
          type: 'line',
        },
      },
    },
    line: {
      style: {
        curveType: 'stepAfter',
      },
    }
  },
};
