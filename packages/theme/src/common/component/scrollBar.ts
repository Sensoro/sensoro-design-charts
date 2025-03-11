import type { IScrollBarTheme } from '@visactor/vchart';

export const scrollBar: IScrollBarTheme = {
  horizontal: {
    height: 10,
    slider: {
      style: {
        fill: {
          type: 'palette',
          key: 'scrollBarSliderColor'
        }
      }
    }
  },
  vertical: {
    width: 10,
    slider: {
      style: {
        fill: {
          type: 'palette',
          key: 'scrollBarSliderColor'
        }
      }
    }
  }
}