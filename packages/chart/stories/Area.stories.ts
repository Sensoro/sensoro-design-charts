import type { Meta, StoryObj } from '@storybook/react';
import { Area, hyphenPointPath } from '../src';
import { colorBlue2 } from '@sensoro-design/chart-theme';

const meta = {
  title: 'Components/Area',
  component: Area,
  parameters: {},
  tags: ['autodocs'],
  argTypes: {},
  args: {  },
} satisfies Meta<typeof Area>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    height: 400,
    title: {
      text: '基础折线图',
    },
    xField: 'date',
    yField: 'value',
    data: {
      values: [
        { date: 0, value: 11635 },
        { date: 1, value: 8730 },
        { date: 2, value: 6931 },
        { date: 3, value: 6850 },
        { date: 4, value: 5366 },
        { date: 5, value: 4874 },
        { date: 6, value: 5347 },
        { date: 7, value: 41115 },
        { date: 8, value: 81250 },
        { date: 9, value: 81437 },
        { date: 10, value: 103941 },
        { date: 11, value: 105994 },
        { date: 12, value: 116688 },
        { date: 13, value: 118847 },
        { date: 14, value: 101091 },
        { date: 15, value: 107977 },
        { date: 16, value: 129702 },
        { date: 17, value: 109491 },
        { date: 18, value: 106720 },
        { date: 19, value: 52051 },
        { date: 20, value: 37894 },
        { date: 21, value: 29828 },
        { date: 22, value: 21099 },
        { date: 22, value: 21099 },
        { date: 23, value: 14170 },
      ],
    },
    tooltip: {
      dimension: {
        shapeType: hyphenPointPath,
        shapeFill: colorBlue2,
        title: {
          value: (datum) => {
            return `${datum?.date}:00 ~ ${datum?.date + 1}:00`;
          },
        },
        content: {
          key: '出行次数',
          value: (datum) => {
            return datum?.value;
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
    point: {
      style: {
        size: 4,
        fill: '#fff',
        stroke: 'default',
        lineWidth: 1,
      },
      state: {
        dimension_hover: {
          size: 10,
          outerBorder: {
            distance: 0,
            lineWidth: 6,
            strokeOpacity: 0.2,
          },
        },
      },
    }
  },
};
