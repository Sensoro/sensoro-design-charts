import type { ITheme } from '@visactor/vchart';
import {
  colorBlue04,
  colorGrey03,
  colorGrey04,
  colorGrey06,
  colorGrey08,
  colorGrey10,
  colorGreyPro09,
} from '../config';
import { token } from '../token';
import { colorScheme } from './colorScheme';

export const dark: ITheme = {
  name: 'sensoroDesignDark',
  description: 'Sensoro Design - dark',
  type: 'dark',
  background: '#161D2A',
  token,
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
  component: {
    tooltip: {
      panel: {
        backgroundColor: '#314059',
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
    },
    title: {
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
    },
    axis: {
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
    },
    crosshair: {
      xField: {
        line: {
          type: 'line',
          width: 1,
          style: {
            stroke: colorBlue04,
            strokeOpacity: 1,
            lineDash: [3, 2],
          },
        },
      },
    },
  },
};
