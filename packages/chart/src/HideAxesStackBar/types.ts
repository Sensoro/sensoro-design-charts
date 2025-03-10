import type { CommonChartProps } from '@visactor/react-vchart';

export interface DataItem {
  time: string | number;
  value?: number;
  select?: boolean;
  [key: string]: any;
}

export interface HideAxesStackBarProps {
  /** 图表标题 */
  title?: CommonChartProps['title'];
  /** Tooltip */
  tooltip?: CommonChartProps['tooltip'];
  /** 图表高度 */
  height?: number;
  /** 图表宽度 */
  width?: number;
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
  /**
   * 图表主题
   */
  theme?: CommonChartProps['theme'];
  crosshair?: CommonChartProps['crosshair'];
}
