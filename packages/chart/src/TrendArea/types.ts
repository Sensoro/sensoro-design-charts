import type { CommonChartProps } from '@visactor/react-vchart';
import type {
  Datum,
  IAreaSeriesSpec,
  ICartesianAxisSpec,
  IGradient,
  IMarkAreaSpec,
  IMarkLineSpec,
  IMarkPointSpec,
} from '../types';

export interface Color {
  isNight?: boolean;
  disabled?: boolean;
  isReference?: boolean;
  color: string;
}

export interface TrendAreaProps extends Omit<CommonChartProps, 'data' | 'xField' | 'yField' | 'color' | 'onDimensionClick'> {
  data?: Datum[];
  mode?: 'default' | 'select';
  color?: Color[];
  /** x 字段 */
  xField?: string;
  /** y 字段 */
  yField?: string;
  /** 坐标轴 X 轴配置 */
  xAxes?: Partial<ICartesianAxisSpec>;
  /** 坐标轴 Y 轴配置 */
  yAxes?: Partial<ICartesianAxisSpec>;
  /** 显示参考面积图 */
  showReference?: boolean;
  /** 参考面积图配置 */
  referenceSerie?: Partial<Omit<IAreaSeriesSpec, 'data'>>;
  /** 白天判断 */
  daytime?: [number, number];
  /** 选择的时间 */
  selectTime?: [number, number];
  defaultSelectValue?: Datum | null;
  onDimensionClick?: (e: {
    data: Datum;
    select?: boolean;
  }) => void;
}

export {
  Datum,
  IAreaSeriesSpec,
  ICartesianAxisSpec,
  IGradient,
  IMarkAreaSpec,
  IMarkLineSpec,
  IMarkPointSpec,
};
