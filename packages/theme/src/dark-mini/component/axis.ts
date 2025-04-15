import type { IAxisCommonTheme } from '@visactor/vchart';
import { merge } from '@visactor/vutils';
import { axis as commonAxis } from '../../common/component/axis';

const defaultAxis: IAxisCommonTheme = {
  label: {
    style: {
      fontSize: 11,
    },
  },
};

export const axis: IAxisCommonTheme = merge({}, commonAxis, defaultAxis);
