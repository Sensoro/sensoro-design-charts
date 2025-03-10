import type { LineChartProps } from '@visactor/react-vchart';
import type { IMarkLineYSpec } from '@visactor/vchart/esm/component/marker/mark-line/interface/spec';

import { LineChart } from '@visactor/react-vchart';
import { merge } from '@visactor/vutils';
import { forwardRef } from 'react';
import { defaultPoint } from './config';
import { getDefaultMarkLine } from './utils';
import React from 'react';

export interface LineProps extends LineChartProps {
  defaultMarkLine?: IMarkLineYSpec;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Line = forwardRef<any, LineProps>((props, ref) => {
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
      ref={ref}
    />
  );
});
