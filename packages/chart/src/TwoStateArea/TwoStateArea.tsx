import type { TwoStateAreaProps } from './types';
import { darkColors } from '@sensoro-design/chart-theme';
import { AreaChart } from '@visactor/react-vchart';
import { merge } from '@visactor/vutils';
import React, { useMemo } from 'react';
import { isMiniTheme } from '../utils';
import { defaultLegends, defaultLine, defaultMiniLine, defaultXAxes, defaultYAxes } from './config';
import { getDefaultTooltip, transformData } from './utils';

export function TwoStateArea(props: TwoStateAreaProps) {
  const {
    data,
    xField = 'time',
    yField = 'value',
    xAxes,
    yAxes,
    // eslint-disable-next-line react/no-unstable-default-props
    color = [darkColors.blue2, '#3EB390'],
    tooltip,
    legend,
    ...rest
  } = props;

  const miniTheme = isMiniTheme(props.theme);

  const dataMemo = useMemo(
    () => {
      const list = transformData(data, {
        xField,
        yField,
      });

      return [
        {
          values: list,
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
    color,
  });

  const tooltipData = merge({}, defaultTooltip, tooltip);
  const lineData = merge({}, defaultLine, miniTheme ? defaultMiniLine : {});
  const legendData = merge({}, defaultLegends, legend);

  return (
    <AreaChart
      data={dataMemo}
      axes={axes}
      area={{
        style: {
          curveType: 'step',
          fill: {
            gradient: 'linear',
            x0: 0.5,
            y0: 0,
            x1: 0.5,
            y1: 1,
            stops: [
              {
                offset: 0,
                opacity: 0.25,
              },
              {
                offset: 1,
                opacity: 0,
              },
            ],
          },
        },
      }}
      line={lineData}
      stack={false}
      xField={xField}
      yField={yField}
      seriesField="type"
      color={color}
      invalidType="break"
      tooltip={tooltipData}
      legends={legend ? legendData : undefined}
      point={{
        style: {
          stroke: (data) => {
            return data?.type === 1 ? color[0] : color[1];
          },
        },
      }}
      {...rest}
    />
  );
}
