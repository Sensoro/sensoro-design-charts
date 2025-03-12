import type { ITitleTheme } from '@visactor/vchart';
import {
  colorGrey08,
} from '../colors';

export const title: ITitleTheme = {
  height: 24,
  padding: {
    top: 0,
    bottom: 24,
  },
  textStyle: {
    fontSize: 16,
    fontWeight: 500,
    fill: {
      type: 'palette',
      key: 'primaryFontColor',
    },
    lineHeight: 50,
  },
  subtextStyle: {
    fontSize: 12,
    fill: colorGrey08,
  },
};
