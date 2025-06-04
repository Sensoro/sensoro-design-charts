import type { CommonChartProps } from '@visactor/react-vchart';
import type { IAreaSeriesSpec, ICartesianAxisSpec } from './types';
import { colorBlue2, colorGreen2, colorGrey04 } from '@sensoro-design/chart-theme';

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

export const defaultXAxes: ICartesianAxisSpec = {
  orient: 'bottom',
  type: 'band',
  trimPadding: true,
  innerOffset: {
    left: 16,
    right: 16,
  },
  label: {
    visible: true,
    formatMethod: (text) => {
      return `${text}~${+text + 1}时`;
    },
  },
  tick: {
    tickCount: 7,
  },
};

export const defaultYAxes: ICartesianAxisSpec = {
  orient: 'left',
  seriesIndex: [0, 1, 2, 3, 4, 5, 6],
};

export const defaultColor = [
  { isNight: false, disabled: false, color: colorGreen2 },
  { isNight: false, disabled: true, color: '#AEEAD8' },
  { isNight: true, disabled: false, color: colorBlue2 },
  { isNight: true, disabled: true, color: '#C5D7F9' },
  { isReference: true, color: colorGrey04 },
];

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
