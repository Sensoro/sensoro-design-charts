import type { CommonChartProps } from '@visactor/react-vchart';
import type { ICartesianCrosshairSpec } from '@visactor/vchart/esm/component/crosshair/interface'
import { colorBlue2 } from '@sensoro-design/charts-themes';

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
  color: [colorBlue2, colorBlue2],
  axes: [
    {
      visible: false,
      orient: 'bottom',
      type: 'band',
    },
    {
      visible: false,
      orient: 'left',
      seriesIndex: [0, 1],
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
