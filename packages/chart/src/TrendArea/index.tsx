import type { IAreaSeriesSpec, TrendAreaProps } from './types';
import { colorGrey04 } from '@sensoro-design/chart-theme';
import { CommonChart } from '@visactor/react-vchart';
import { merge } from '@visactor/vutils';
import { uniq } from 'es-toolkit/array';
import React from 'react';
import {
  defaultColor,
  defaultCrosshair,
  defaultPoint,
  defaultTooltip,
  defaultXAxes,
  defaultYAxes,
} from './config';
import { getReferenceSerie } from './utils';

export type {
  TrendAreaProps,
};

const defaultDaytime = [6, 18];

export function TrendArea(props: TrendAreaProps) {
  const {
    xField = 'date',
    yField = 'value',
    xAxes,
    yAxes,
    hideReference = true,
    referenceSerie,
    selectTime,
    daytime = defaultDaytime,
    color = defaultColor,
    data,
    tooltip,
    ...rest
  } = props;

  const referenceColor = color.find(item => item.isReference)?.color || colorGrey04;

  const xAxesData = merge(defaultXAxes, xAxes);
  const yAxesData = merge(defaultYAxes, yAxes);
  const referenceSeries = merge(
    getReferenceSerie({
      xField,
      yField,
    }),
    referenceSerie,
  );
  const tooltipProps = merge({}, defaultTooltip, tooltip);

  const { dataList, series, colors } = React.useMemo(
    () => {
      if (Array.isArray(selectTime) && selectTime.length === 2) {
        const times = uniq([...daytime, ...selectTime, 0, 23]).sort((a, b) => a - b);

        const items: {
          times: [number, number];
          isNight: boolean;
          disabled: boolean;
        }[] = [];

        for (let i = 0; i < times.length - 1; i++) {
          items.push({
            times: [times[i], times[i + 1]],
            isNight: !(times[i] >= daytime[0] && times[i + 1] <= daytime[1]),
            disabled: !(times[i] >= selectTime[0] && times[i + 1] <= selectTime[1]),
          });
        }

        const dataList = items.map((item) => {
          const { times } = item;

          return {
            values: (data || []).filter((item) => {
              const date = item[xField as string];
              return date >= times[0] && date <= times[1];
            }),
          };
        });

        const series = items.map(({ disabled, isNight }, index) => {
          const colorVal = color.find(item => item.isNight === isNight && item.disabled === disabled)?.color;

          const areaSeriesSpec: IAreaSeriesSpec = {
            type: 'area',
            dataIndex: index,
            xField,
            yField,
            zIndex: disabled ? 5 : 10,
            tooltip: {
              visible: !disabled,
            },
            point: {
              visible: !disabled,
              ...defaultPoint,
            },
            area: {
              style: {
                fill: disabled ? 'transparent' : colorVal,
                fillOpacity: disabled ? 1 : 0.08,
                // cursor: disabled ? 'not-allowed' : 'default',
              },
            },
          };

          return areaSeriesSpec;
        });

        const colors = (items
          .map(({ disabled, isNight }) => {
            return color.find(item => item.isNight === isNight && item.disabled === disabled)?.color;
          })
          .filter(Boolean)) as string[];

        return {
          colors,
          dataList,
          series,
        };
      }

      return {
        colors: [],
        dataList: [],
        series: [],
      };
    },
    [daytime, selectTime, data, xField, yField, color],
  );

  return (
    <CommonChart
      color={hideReference ? colors : [referenceColor, ...colors!]}
      data={dataList}
      series={hideReference ? series : [referenceSeries, ...series]}
      axes={[yAxesData, xAxesData]}
      crosshair={defaultCrosshair}
      tooltip={tooltipProps}
      {...rest}
    />
  );
}
