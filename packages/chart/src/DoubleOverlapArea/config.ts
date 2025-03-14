import type { CommonChartProps } from '@visactor/react-vchart';
import type { IAreaSeriesSpec } from '@visactor/vchart';
import { hyphenPointPath } from '../config';
import { colorBlue2 } from '@sensoro-design/chart-theme';

export const defaultPoint: NonNullable<IAreaSeriesSpec['point']> = {
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

export const defaultArea: NonNullable<IAreaSeriesSpec['area']> = {
  style: {
    fill: {
      gradient: 'linear',
      x0: 0.5,
      y0: 0,
      x1: 0.5,
      y1: 1,
      stops: [
        {
          offset: 0,
          opacity: 0.15,
        },
        {
          offset: 1,
          color: '#fff',
        },
      ],
    },
  },
};

export const defaultTooltip: CommonChartProps['tooltip'] = {
  dimension: {
    shapeType: hyphenPointPath,
    shapeFill: colorBlue2,
  },
};
