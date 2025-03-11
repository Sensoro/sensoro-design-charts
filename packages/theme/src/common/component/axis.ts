import type { IAxisCommonTheme } from '@visactor/vchart';
import {
  colorGrey03,
  colorGrey04,
  colorGrey06,
} from '../colors';

export const axis: IAxisCommonTheme = {
  /** 轴刻度线配置 */
  tick: {
    tickSize: 4,
    style: {
      stroke: colorGrey04,
      opacity: 1,
    },
  },
  /** 网格线配置 */
  grid: {
    style: {
      stroke: colorGrey03,
      lineDash: [3, 2],
      opacity: 1,
    },
  },
  /** 轴标签配置 */
  label: {
    style: {
      fontSize: 12,
      fill: colorGrey06,
      opacity: 1,
    },
  },
}