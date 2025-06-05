import type { IAreaSeriesSpec } from '@visactor/vchart/esm/series/area/interface';
import type { HideAxesStackBarProps } from './types';
import { CommonChart } from '@visactor/react-vchart';
import { merge } from '@visactor/vutils';
import React, { useMemo } from 'react';
import { defaultColor, defaultProps, defaultTooltip } from './config';
import {
  getDefaultCrosshair,
  getDefaultSeries,
  getReferenceData,
  getReferenceSerie,
  transformData,
} from './utils';

export function HideAxesStackBar(props: HideAxesStackBarProps) {
  const {
    barWidth = 6,
    data,
    color = defaultColor,
    xField = 'time',
    yField = 'value',
    showReference = false,
    referenceSerie,
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

  const referenceSeries = useMemo<IAreaSeriesSpec[]>(
    () => {
      if (!data || !data.length || !showReference) {
        return [];
      }

      const referenceData = getReferenceData({
        data,
        xField,
        yField,
      });

      if (referenceData.length === 0) {
        return [];
      }

      const defaultReferenceSerie = getReferenceSerie({
        xField,
        yField,
      });

      return [
        merge(defaultReferenceSerie, referenceSerie, {
          data: {
            values: referenceData,
          },
        }),
      ];
    },
    [xField, yField, referenceSerie, data, showReference],
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
      series={[...referenceSeries, ...series]}
      crosshair={crosshairMemo}
      color={color}
      {...rest}
    />
  );
}

export type { HideAxesStackBarProps };
