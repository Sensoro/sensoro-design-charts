import type { ITooltipTheme } from '@visactor/vchart';
import { colorGrey06 } from '../colors';

export const tooltip: ITooltipTheme = {
  panel: {
    backgroundColor: {
      type: 'palette',
      key: 'popupBackgroundColor'
    } as any,
    padding: 12,
    border: {
      radius: 0,
    },
  },
  titleLabel: {
    fontSize: 12,
    lineHeight: 20,
    fontColor: colorGrey06,
  },
  keyLabel: {
    fontSize: 12,
    lineHeight: 20,
    fontColor: '#fff',
  },
  valueLabel: {
    fontSize: 12,
    lineHeight: 20,
    fontColor: '#fff',
  },
}