import type { TwoStateAreaProps } from './types';

export const defaultXAxes: NonNullable<TwoStateAreaProps['xAxes']> = {
  orient: 'bottom',
  type: 'band',
  tick: {
    visible: false,
  },
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
