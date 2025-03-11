import type { ITheme } from '@visactor/vchart';
import { component } from '../common/component';
import { colorScheme } from './colorScheme';

export const light: ITheme = {
  name: 'sensoroDesignLight',
  description: 'Sensoro Design - light',
  type: 'light',
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
