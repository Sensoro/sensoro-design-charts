import type { CommonChartProps } from '@visactor/react-vchart';
import type { ICartesianAxisSpec } from './types';
import { CommonChart } from '@visactor/react-vchart';
import { merge } from '@visactor/vutils';
import React, { useMemo } from 'react';
import { defaultTooltip } from './config';
import { getDefaultProps } from './utils';

export interface DoubleOverlapAreaProps {
  /** 图表标题 */
  title?: CommonChartProps['title'];
  /** Tooltip */
  tooltip?: CommonChartProps['tooltip'];
  /** 图表高度 */
  height?: number;
  xField?: string | string[];
  yField?: string | string[];
  /**
   * 图表数据
   */
  data: CommonChartProps['data'];
  /**
   * 坐标轴 X 轴配置
   */
  xAxes?: Partial<ICartesianAxisSpec>;
  /**
   * 坐标轴 Y 轴配置
   */
  yAxes?: Partial<ICartesianAxisSpec>;
}

export function DoubleOverlapArea(props: DoubleOverlapAreaProps) {
  const { xAxes, yAxes, xField = 'date', yField = 'value', tooltip, ...rest } = props;

  const tooltipProps = merge(defaultTooltip, tooltip);

  const defaultProps = useMemo(
    () => {
      return getDefaultProps({
        yAxes,
        xAxes,
        xField,
        yField,
      });
    },
    [yAxes, xAxes, xField, yField],
  );

  return <CommonChart {...defaultProps} {...rest} tooltip={tooltipProps} />;
};
