import type { CommonChartProps } from '@visactor/react-vchart';
import type { Color, ICartesianCrosshairSpec } from './types';
import { colorBlue2, colorGreen2 } from '@sensoro-design/chart-theme';

export const defaultColor: Color[] = [
  { isNight: false, color: colorGreen2 },
  { isNight: true, color: colorBlue2 },
  { isReference: true, color: '#314059' },
];

export const defaultTooltip: CommonChartProps['tooltip'] = {
  mark: {
    visible: false,
  },
  dimension: {
    title: {
      visible: false,
    },
  },
};

export const defaultProps: CommonChartProps = {
  axes: [
    {
      visible: false,
      orient: 'bottom',
      type: 'band',
    },
    {
      visible: false,
      orient: 'left',
      seriesIndex: [0, 1, 2, 3, 4, 5, 6],
    },
  ],
  crosshair: {
    xField: {
      visible: true,
      line: {
        type: 'rect',
        width: 10,
        style: {
          fill: '#314059',
        },
      } as NonNullable<ICartesianCrosshairSpec['xField']>['line'],
    },
    followTooltip: true,
  },
};

export const defaultReferenceData = [
  1,
  0,
  0,
  0,
  0,
  0,
  1,
  7,
  10,
  10,
  12,
  13,
  16,
  16,
  14,
  16,
  17,
  16,
  14,
  10,
  6,
  4,
  3,
  1,
];
