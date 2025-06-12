import type { ICrosshairTheme } from '@visactor/vchart';

export const crosshair: ICrosshairTheme = {
  xField: {
    line: {
      type: 'line',
      style: {
        stroke: {
          type: 'palette',
          key: 'crosshairLineColor',
        },
        opacity: 1,
        strokeOpacity: 1,
        lineDash: [3, 2],
      },
    },
  },
};
