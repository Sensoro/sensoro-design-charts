import type { CommonChartProps } from '@visactor/react-vchart';
import type {
  IAreaSeriesSpec,
  IBarSeriesSpec,
  ICartesianCrosshairSpec,
  IMarkAreaSpec,
} from '../types';

export interface DataItem {
  time: string | number;
  value?: number;
  select?: boolean;
  [key: string]: any;
}

export interface Color {
  isNight?: boolean;
  isReference?: boolean;
  color: string;
}

export interface HideAxesStackBarProps extends Omit<CommonChartProps, 'data' | 'xField' | 'yField' | 'color'> {
  mode?: 'hour' | 'day';
  color?: Color[];
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
  IBarSeriesSpec,
  ICartesianCrosshairSpec,
  IMarkAreaSpec,
};
