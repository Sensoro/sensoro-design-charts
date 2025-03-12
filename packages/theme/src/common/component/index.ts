import type { IComponentTheme } from '@visactor/vchart';
import { axis } from './axis';
import { crosshair } from './crosshair';
import { discreteLegend } from './discreteLegend';
import { scrollBar } from './scrollBar';
import { title } from './title';
import { tooltip } from './tooltip';

export const component: IComponentTheme = {
  tooltip,
  title,
  axis,
  crosshair,
  scrollBar,
  discreteLegend,
};
