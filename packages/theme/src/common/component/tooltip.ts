import type { ITooltipTheme } from '@visactor/vchart';
import { colorGrey06 } from '../colors';

export const tooltip: ITooltipTheme = {
  /** 偏移量 */
  offset: {
    x: 10,
    y: 10
  },
  panel: {
    padding: {
      top: 12,
      left: 12,
      right: 12,
      bottom: 12,
    },
    backgroundColor: {
      type: 'palette',
      key: 'popupBackgroundColor'
    } as any,
    border: {
      color: {
        type: 'palette',
        key: 'popupBackgroundColor'
      } as any,
      width: 0,
      radius: 0,
    },
    shadow: {
      x: 0,
      y: 4,
      blur: 12,
      spread: 0,
      color: {
        type: 'palette',
        key: 'shadowColor'
      } as any
    }
  },
  spaceRow: 6,
  titleLabel: {
    fontSize: 12,
    lineHeight: 20,
    fontColor: colorGrey06,
    fontWeight: 'bold',
    textBaseline: 'middle',
    spacing: 0
  },
  shape: {
    size: 8,
    spacing: 6
  },
  keyLabel: {
    fontSize: 12,
    lineHeight: 20,
    fontColor: '#fff',
    textBaseline: 'middle',
    spacing: 26
  },
  valueLabel: {
    fontSize: 12,
    lineHeight: 20,
    fontColor: '#fff',
    fontWeight: 'bold',
    textBaseline: 'middle',
    spacing: 0
  },
}