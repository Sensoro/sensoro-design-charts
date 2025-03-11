import type { DataSchemeItem, ProgressiveDataScheme } from '@visactor/vchart';
import { category1, category2, category3 } from './colors';

/** 标准色板 */
export const dataScheme: ProgressiveDataScheme<DataSchemeItem> = [
  // 第一档颜色（数据项 <= 8）
  {
    maxDomainLength: 8,
    scheme: category1,
  },
  // 第二档颜色（数据项 <= 16）
  {
    maxDomainLength: 16,
    scheme: category2,
  },
  // 第三档颜色（数据项 > 16）
  {
    scheme: category3,
  },
];
