import type { ITheme } from '@visactor/vchart';
import { component } from '../common/component'
import { colorScheme } from './colorScheme';

export const dark: ITheme = {
  name: 'sensoroDesignDark',
  description: 'Sensoro Design - dark',
  type: 'dark',
  background: '#161D2A',
  colorScheme,
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
                opacity: 0.15,
              },
              {
                offset: 1,
                color: '#fff',
              },
            ],
          },
        },
      },
    },

  },
  component,
};
