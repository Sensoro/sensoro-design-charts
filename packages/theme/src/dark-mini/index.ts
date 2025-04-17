import type { ITheme } from '@visactor/vchart';
import { token } from '../common/token';
import { colorScheme } from '../dark/colorScheme';
import { component } from './component';

export const darkMini: ITheme = {
  name: 'sensoroDesignDarkMini',
  description: 'Sensoro Design - dark mini',
  type: 'dark',
  background: {
    type: 'palette',
    key: 'backgroundColor',
  },
  colorScheme,
  token,
  padding: 24,
  series: {
    area: {
      area: {
        style: {
          fill: {
            gradient: 'linear',
            x0: 0.5,
            y0: 0,
            x1: 0.5,
            y1: 1,
            stops: [
              {
                offset: 0,
                opacity: 0.25,
              },
              {
                offset: 1,
                opacity: 0.02,
              },
            ],
          },
        },
      },
      point: {
        style: {
          size: 0,
          fill: {
            type: 'palette',
            key: 'backgroundColor',
          },
          stroke: 'default',
          lineWidth: 1,
        },
        state: {
          dimension_hover: {
            size: 8,
          },
        },
      },
    },
  },
  component,
};
