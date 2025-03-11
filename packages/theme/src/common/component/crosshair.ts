import type { ICrosshairTheme } from '@visactor/vchart';
import {
  colorBlue04,
} from '../colors';

export const crosshair: ICrosshairTheme = {
  xField: {
    line: {
      type: 'line',
      width: 1,
      style: {
        stroke: colorBlue04,
        strokeOpacity: 1,
        lineDash: [3, 2],
      },
    },
  },
}