import type { CommonChartProps } from '@visactor/react-vchart';
import type { Color, IAreaSeriesSpec, ICartesianAxisSpec, IGradient } from './types';
import { colorBlue2, colorBlue06, colorGreen2, colorGrey04 } from '@sensoro-design/chart-theme';

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
  seriesIndex: [0, 1, 2, 3, 4, 5],
  label: {
    formatter: '{label:,.0f}',
  },
};

export const defaultColor: Color[] = [
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

export const linearColor: IGradient = {
  gradient: 'linear',
  x0: 0.5,
  y0: 0,
  x1: 0.5,
  y1: 1,
  stops: [
    {
      offset: 0,
      color: 'rgba(43,109,229,0.35)',
    },
    {
      offset: 1,
      color: 'rgba(43,109,229,0)',
    },
  ],
};

export const defaultSelectModeCrosshair: CommonChartProps['crosshair'] = [
  {
    xField: {
      visible: true,
      zIndex: 100,
      line: {
        type: 'line',
        width: 1,
        style: {
          stroke: colorBlue06,
        },
      },
    },
    followTooltip: true,
  },
  {
    xField: {
      visible: true,
      zIndex: 100,
      line: {
        type: 'rect',
        width: 24,
        style: {
          fill: linearColor,
        },
      },
    } as any,
    followTooltip: true,
  },
];

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
