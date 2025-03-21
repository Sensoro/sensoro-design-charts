import type { LineChartProps } from '@visactor/react-vchart';
import type { IMarkLineYSpec } from '@visactor/vchart/esm/component/marker/mark-line/interface/spec';

import { LineChart } from '@visactor/react-vchart';
import { merge } from '@visactor/vutils';
import React from 'react';
import { defaultPoint, defaultTooltip } from './config';
import { getDefaultMarkLine } from './utils';

export interface LineProps extends LineChartProps {
  defaultMarkLine?: IMarkLineYSpec;
}

export function Line(props: LineProps) {
  const { defaultMarkLine, markLine, point, tooltip } = props;

  let markLineData = markLine;
  const pointData = merge(defaultPoint, point);
  const tooltipData = merge(defaultTooltip, tooltip);

  if (!markLineData && defaultMarkLine && defaultMarkLine.y) {
    markLineData = [
      merge(getDefaultMarkLine(defaultMarkLine.y), defaultMarkLine),
    ];
  }

  return (
    <LineChart
      {...props}
      markLine={markLineData}
      point={pointData}
      tooltip={tooltipData}
    />
  );
};
