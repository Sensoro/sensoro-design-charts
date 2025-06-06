import type { IDiscreteLegendTheme } from '@visactor/vchart';
import { merge } from '@visactor/vutils';
import { discreteLegend as commonAxis } from '../../common/component/discreteLegend';

const defaultDiscreteLegend: IDiscreteLegendTheme = {
  item: {
    shape: {
      space: 8,
    },
  },
};

export const discreteLegend: IDiscreteLegendTheme = merge({}, commonAxis, defaultDiscreteLegend);
