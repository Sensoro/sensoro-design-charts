import type { LineChartProps } from '@visactor/react-vchart';
import type { IMarkLineYSpec } from '@visactor/vchart/esm/component/marker/mark-line/interface/spec';

import { LineChart } from '@visactor/react-vchart';
import { merge } from '@visactor/vutils';
import { defaultPoint } from './config';
import { getDefaultMarkLine } from './utils';
import React from 'react';

export interface LineProps extends LineChartProps {
  defaultMarkLine?: IMarkLineYSpec;
}

export function Line(props: LineProps) {
  const { defaultMarkLine, markLine, point } = props;

  let markLineData = markLine;
  const pointData = merge(defaultPoint, point);

  if (!markLineData && defaultMarkLine && defaultMarkLine.y) {
    markLineData = [
      merge(getDefaultMarkLine(defaultMarkLine.y), defaultMarkLine),
    ];
  }

  return (
    // @ts-expect-error 忽略报错
    <LineChart
      {...props}
      markLine={markLineData}
      point={pointData}
    />
  );
};
