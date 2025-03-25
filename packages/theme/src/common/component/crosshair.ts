import type { ICrosshairTheme } from '@visactor/vchart';

export const crosshair: ICrosshairTheme = {
  xField: {
    line: {
      type: 'line',
      width: 1,
      style: {
        stroke: {
          type: 'palette',
          key: 'primaryFontColor',
        },
        strokeOpacity: 1,
        lineDash: [3, 2],
      },
    },
  },
};
