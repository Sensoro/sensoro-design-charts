import type { IComponentTheme } from '@visactor/vchart';
import { crosshair } from '../../common/component/crosshair';
import { discreteLegend } from '../../common/component/discreteLegend';
import { scrollBar } from '../../common/component/scrollBar';
import { title } from '../../common/component/title';
import { tooltip } from '../../common/component/tooltip';
import { axis } from './axis';

export const component: IComponentTheme = {
  tooltip,
  title,
  axis,
  crosshair,
  scrollBar,
  discreteLegend,
};
