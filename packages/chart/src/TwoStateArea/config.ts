import type { AreaChartProps } from '@visactor/react-vchart';
import type { TwoStateAreaProps } from './types';
import { hyphenPointPath } from '../config';

export const defaultXAxes: NonNullable<TwoStateAreaProps['xAxes']> = {
  orient: 'bottom',
  type: 'band',
  tick: {
    visible: false,
  },
  trimPadding: true,
  innerOffset: {
    left: 0,
    right: 0,
  },
  label: {
    flush: true,
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

export const defaultLegends: AreaChartProps['legends'] = {
  data: (items) => {
    const list = items.map((item) => {
      const { label, shape } = item;
      return {
        label,
        shape: {
          shape,
          fill: shape.stroke,
        },
      };
    });
    return list;
  },
  item: {
    shape: {
      style: {
        size: 10,
        symbolType: hyphenPointPath,
        dy: -4,
      },
    },
  },
};

export const defaultLine: NonNullable<AreaChartProps['line']> = {
  style: {
    lineCap: 'square',
  },
};

export const defaultMiniLine: NonNullable<AreaChartProps['line']> = {
  style: {
    lineWidth: 1,
  },
};
