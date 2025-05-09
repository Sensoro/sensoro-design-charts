import type { CommonChartProps } from '@visactor/react-vchart';
import type { IAreaSeriesSpec } from '@visactor/vchart';
import { colorBlue2 } from '@sensoro-design/chart-theme';
import { hyphenPointPath } from '../config';

export const defaultPoint: NonNullable<IAreaSeriesSpec['point']> = {
  style: {
    size: 0,
    stroke: 'default',
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
          opacity: 0,
        },
      ],
    },
    fillOpacity: 1,
  },
};

export const defaultTooltip: CommonChartProps['tooltip'] = {
  mark: {
    visible: false,
  },
  dimension: {
    shapeType: hyphenPointPath,
    shapeFill: colorBlue2,
  },
};

export const defaultCrosshair: CommonChartProps['crosshair'] = [
  {
    xField: {
      visible: true,
      line: {
        type: 'line',
      },
    },
    followTooltip: true,
  },
];
