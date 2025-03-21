import type { LineChartProps } from '@visactor/react-vchart';

export const defaultPoint: LineChartProps['point'] = {
  style: {
    size: 0,
    stroke: '#fff',
    lineWidth: 2,
  },
  state: {
    dimension_hover: {
      size: 10,
    },
  },
};

export const defaultTooltip: LineChartProps['tooltip'] = {
  mark: {
    visible: false,
  },
};
