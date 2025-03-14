import type { HideAxesStackBarProps } from './types';
import { CommonChart } from '@visactor/react-vchart';
import { merge } from '@visactor/vutils';
import React, { useMemo } from 'react';
import { defaultProps, defaultTooltip } from './config';
import { getDefaultCrosshair, getDefaultSeries, transformData } from './utils';

export function HideAxesStackBar(props: HideAxesStackBarProps) {
  const {
    barWidth = 6,
    data,
    xField = 'time',
    yField = 'value',
    tooltip,
    crosshair,
    ...rest
  } = props;

  const dataMemo = useMemo(
    () => {
      const list = transformData(data, {
        xField,
        yField,
      });

      return [
        {
          values: list[0],
        },
        {
          values: list[1],
        },
      ];
    },
    [data, xField, yField],
  );

  const crosshairMemo = useMemo(
    () => {
      const defaultCrosshair = getDefaultCrosshair({
        barWidth,
      });

      return merge(defaultCrosshair, crosshair);
    },
    [crosshair, barWidth],
  );

  const series = getDefaultSeries({
    xField,
    yField,
    barWidth,
  });
  const tooltipProps = merge(defaultTooltip, tooltip);

  return (
    <CommonChart
      {...defaultProps}
      data={dataMemo}
      tooltip={tooltipProps}
      series={series}
      crosshair={crosshairMemo}
      {...rest}
    />
  );
}

export type { HideAxesStackBarProps };
