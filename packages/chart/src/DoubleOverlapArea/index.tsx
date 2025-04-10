import type { CommonChartProps } from '@visactor/react-vchart';
import type { Cursor } from '@visactor/vchart/esm/typings/cursor';
import type { ICartesianAxisSpec } from './types';
import { CommonChart } from '@visactor/react-vchart';
import { merge } from '@visactor/vutils';
import React, { useMemo } from 'react';
import { defaultTooltip } from './config';
import { getDefaultProps } from './utils';

export interface DoubleOverlapAreaProps extends CommonChartProps {
  xField?: string | string[];
  yField?: string | string[];
  cursor?: Cursor;
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
  const { xAxes, yAxes, xField = 'date', yField = 'value', cursor = 'default', tooltip, ...rest } = props;

  const tooltipProps = merge(defaultTooltip, tooltip);

  const defaultProps = useMemo(
    () => {
      return getDefaultProps({
        yAxes,
        xAxes,
        xField,
        yField,
        cursor,
      });
    },
    [yAxes, xAxes, xField, yField, cursor],
  );

  return <CommonChart {...defaultProps} {...rest} tooltip={tooltipProps} />;
};
