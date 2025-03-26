import type { AreaChartProps } from '@visactor/react-vchart';
import type { ICartesianAxisSpec } from '@visactor/vchart/esm/component/axis/cartesian/interface';
import type { ILegendSpec } from '@visactor/vchart/esm/component/legend/interface';

export {
  ICartesianAxisSpec,
};

export interface DataItem {
  [key: string]: any;
}

export interface TwoStateAreaProps {
  options?: AreaChartProps['options'];
  padding?: AreaChartProps['padding'];
  /** 图表标题 */
  title?: AreaChartProps['title'];
  /** Tooltip */
  tooltip?: AreaChartProps['tooltip'];
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
  /**
   * 坐标轴 X 轴配置
   */
  xAxes?: Partial<ICartesianAxisSpec>;
  /**
   * 坐标轴 Y 轴配置
   */
  yAxes?: Partial<ICartesianAxisSpec>;
  /** 图表颜色 */
  color?: [string, string];
  /** 图表数据 */
  data: DataItem[];
  /** 图例配置 */
  legend?: ILegendSpec;
  /**
   * 图表主题
   */
  theme?: AreaChartProps['theme'];
  crosshair?: AreaChartProps['crosshair'];
}
