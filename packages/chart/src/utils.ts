import type { ITheme } from '@visactor/vchart';
import { isString } from '@visactor/vutils';

/**
 * 是否为 mini 主题
 */
export function isMiniTheme(theme?: Omit<ITheme, 'name'> | string) {
  return isString(theme) && theme.endsWith('Mini');
}
