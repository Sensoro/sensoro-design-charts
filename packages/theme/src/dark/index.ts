import type { ITheme } from '@visactor/vchart';
import { component } from '../common/component';
import { token } from '../common/token';
import { colorScheme } from './colorScheme';

export const dark: ITheme = {
  name: 'sensoroDesignDark',
  description: 'Sensoro Design - dark',
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
                color: '#4E85DD',
                opacity: 0.8,
              },
              {
                offset: 1,
                color: '#4E85DD',
                opacity: 0,
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
          lineWidth: 2,
        },
        state: {
          dimension_hover: {
            size: 10,
          },
        },
      },
    },
  },
  component,
};
