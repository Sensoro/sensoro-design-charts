import { CommonChart } from '@visactor/react-vchart';
import { merge } from '@visactor/vutils';
import { defaultTooltip, defaultProps } from './config';
import { transformData, getDefaultSeries, getDefaultCrosshair } from './utils';
import React from 'react';
import { HideAxesStackBarProps } from './types';

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

  const dataMemo = React.useMemo(
    () => {
      const list = transformData(data, {
        xField,
        yField
      });

      return [
        {
          values: list[0],
        },
        {
          values: list[1],
        },
      ]
    },
    [data, xField, yField]
  )

  const crosshairMemo = React.useMemo(
    () => {
      const defaultCrosshair = getDefaultCrosshair({
        barWidth,
      });

      return merge(defaultCrosshair, crosshair);
    },
    [crosshair, barWidth]
  )

  const series = getDefaultSeries({
    xField,
    yField,
    barWidth,
  })
  const tooltipProps = merge(defaultTooltip, tooltip);

  return (
    // @ts-expect-error 忽略报错
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

export type { HideAxesStackBarProps }
