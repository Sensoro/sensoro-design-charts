import type { CommonProps } from '../Common';
import type { TwoStateAreaProps } from './types';
import { merge } from '@visactor/vutils';
import React, { useMemo } from 'react';
import Common from '../Common';
import { defaultTooltip, defaultXAxes, defaultYAxes } from './config';
import { transformData } from './utils';

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

  const tooltipData = merge(defaultTooltip, tooltip);

  const spec: CommonProps = {
    series: [
      {
        type: 'area',
        area: {
          style: {
            curveType: 'step',
          },
        },
        dataIndex: 0,
        xField,
        yField,
        tooltip: {
          dimension: {
            shapeFill: color[0],
            ...tooltipData.dimension,
          },
        },
        invalidType: 'break',
        point: {
          style: {
            size: 0,
            stroke: '#fff',
            lineWidth: 2,
          },
          state: {
            dimension_hover: {
              size: 10,
            },
          },
        },
      },
      {
        type: 'area',
        area: {
          style: {
            curveType: 'step',
          },
        },
        dataIndex: 1,
        xField,
        yField,
        invalidType: 'break',
        tooltip: {
          dimension: {
            shapeFill: color[1],
            ...tooltipData.dimension,
          },
        },
        point: {
          style: {
            size: 0,
            stroke: '#fff',
            lineWidth: 2,
          },
          state: {
            dimension_hover: {
              size: 10,
            },
          },
        },
      },
    ],
  };

  return (
    <Common
      {...spec}
      data={dataMemo}
      axes={axes}
      color={color}
      // tooltip={tooltipData}
      {...rest}
    />
  );
}
