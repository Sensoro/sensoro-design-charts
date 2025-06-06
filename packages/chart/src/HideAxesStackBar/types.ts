import type { CommonChartProps } from '@visactor/react-vchart';
import type { IAreaSeriesSpec, ICartesianCrosshairSpec } from '../types';

export interface DataItem {
  time: string | number;
  value?: number;
  select?: boolean;
  [key: string]: any;
}

export interface HideAxesStackBarProps extends Omit<CommonChartProps, 'data' | 'xField' | 'yField' | 'color'> {
  color?: string[];
  /**
   * 白天判断
   * @default [6, 18]
   */
  daytime?: [number, number];
  /**
   * X
   * @default time
   */
  xField?: string;
  /**
   * X
   * @default value
   */
  yField?: string;
  /** 图表数据 */
  data: DataItem[];
  /**
   * 柱宽度
   * @default 6
   */
  barWidth?: number;
  /** 显示参考面积图 */
  showReference?: boolean;
  /** 参考面积图配置 */
  referenceSerie?: Partial<Omit<IAreaSeriesSpec, 'data'>>;
}

export {
  IAreaSeriesSpec,
  ICartesianCrosshairSpec,
};
