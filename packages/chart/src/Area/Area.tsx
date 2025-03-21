import type { AreaChartProps } from '@visactor/react-vchart';
import { AreaChart } from '@visactor/react-vchart';
import { merge } from '@visactor/vutils';
import React from 'react';
import { defaultTooltip } from './config';

export interface AreaProps extends AreaChartProps {}

export function Area(props: AreaProps) {
  const { tooltip } = props;
  const tooltipData = merge(defaultTooltip, tooltip);

  return (
    <AreaChart
      {...props}
      tooltip={tooltipData}
    />
  );
};
