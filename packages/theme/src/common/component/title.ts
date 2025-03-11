import type { ITitleTheme } from '@visactor/vchart';
import {
  colorGrey08,
  colorGrey10,
} from '../colors';

export const title: ITitleTheme = {
  textStyle: {
    fontSize: 16,
    fontWeight: 500,
    fill: colorGrey10,
    lineHeight: 50,
  },
  subtextStyle: {
    fontSize: 12,
    fill: colorGrey08,
  },
  padding: {
    bottom: 0,
  },
}