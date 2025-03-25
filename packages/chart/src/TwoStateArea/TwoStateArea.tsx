import type { TwoStateAreaProps } from './types';
import { merge } from '@visactor/vutils';
import React, { useMemo } from 'react';
import Common from '../Common';
import { defaultXAxes, defaultYAxes } from './config';
import { getDefaultSeries, getDefaultTooltip, transformData } from './utils';

export function TwoStateArea(props: TwoStateAreaProps) {
  const {
    data,
    xField = 'time',
    yField = 'value',
    xAxes,
    yAxes,
    color = ['#5C8BE6', '#3EB390'],
    tooltip,
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

  const axes = [
    merge(defaultXAxes, xAxes),
    merge(defaultYAxes, yAxes),
  ];

  const defaultTooltip = getDefaultTooltip({
    yField,
  });

  const tooltipData = merge(defaultTooltip, tooltip);

  const series = getDefaultSeries({
    xField,
    yField,
    color,
    tooltip,
  });

  return (
    <Common
      series={series}
      data={dataMemo}
      axes={axes}
      color={color}
      tooltip={tooltipData}
      {...rest}
    />
  );
}
