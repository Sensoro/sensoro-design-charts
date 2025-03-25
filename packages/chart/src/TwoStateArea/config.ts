import type { CommonChartProps } from '@visactor/react-vchart';
import type { TwoStateAreaProps } from './types';

export const defaultTooltip: CommonChartProps['tooltip'] = {
  mark: {
    visible: false,
  },
};

export const defaultXAxes: NonNullable<TwoStateAreaProps['xAxes']> = {
  orient: 'bottom',
  type: 'band',
};

export const defaultYAxes: NonNullable<TwoStateAreaProps['yAxes']> = {
  orient: 'left',
  tick: {
    tickStep: 1,
  },
  max: 1.000001,
  label: {
    visible: false,
  },
  seriesIndex: [0, 1],
};
