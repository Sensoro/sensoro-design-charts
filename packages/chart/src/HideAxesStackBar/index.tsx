import type {
  HideAxesStackBarProps,
  IAreaSeriesSpec,
  IBarSeriesSpec,
} from './types';
import { colorBlue2, colorGreen2 } from '@sensoro-design/chart-theme';
import { CommonChart } from '@visactor/react-vchart';
import { merge } from '@visactor/vutils';
import { flatten } from 'es-toolkit/array';
import React, { useMemo } from 'react';
import { defaultColor, defaultProps, defaultTooltip } from './config';
import {
  getDefaultCrosshair,
  getReferenceData,
  getReferenceSerie,
  transformData,
} from './utils';

const defaultDaytime = [6, 18];

export function HideAxesStackBar(props: HideAxesStackBarProps) {
  const {
    barWidth = 6,
    data,
    color = defaultColor,
    xField = 'time',
    yField = 'value',
    daytime = defaultDaytime,
    showReference = true,
    referenceSerie,
    tooltip,
    crosshair,
    ...rest
  } = props;

  const colorMap = useMemo(
    () => {
      return {
        reference: color.find(item => item.isReference === true)?.color || '#314059',
        night: color.find(item => item.isNight === true)?.color || colorBlue2,
        day: color.find(item => item.isNight === false)?.color || colorGreen2,
      };
    },
    [color],
  );

  const { dataList, series, colors } = useMemo(
    () => {
      const items = [
        {
          times: [0, daytime[0] - 1],
          isNight: true,
        },
        {
          times: [daytime[0], daytime[1]],
          isNight: false,
        },
        {
          times: [daytime[1] + 1, 23],
          isNight: true,
        },
      ];

      const dataList = flatten(
        items.map((item) => {
          const { times } = item;

          const datalist = (data || []).filter((item) => {
            const date = item[xField as string];
            return date >= times[0] && date <= times[1];
          });

          const list = transformData(datalist, {
            xField,
            yField,
          });

          return [
            { values: list[0] },
            { values: list[1] },
          ];
        }),
      );

      const series = flatten(
        items.map(({ isNight }, index) => {
          const list: IBarSeriesSpec[] = [
            {
              id: `${2 * index + 1}_hide`,
              type: 'bar',
              dataIndex: 2 * index,
              stack: true,
              xField,
              yField,
              tooltip: {
                visible: false,
              },
              bar: {
                style: {
                  fill: (datum) => {
                    return datum.select
                      ? (isNight ? colorMap.night : colorMap.day)
                      : '#314059';
                  },
                  height: 4,
                  dy: -4,
                },
              },
              barWidth,
            },
            {
              id: `${2 * index + 2}${isNight ? '_night' : '_day'}${index === 0 ? '_hide' : ''}`,
              type: 'bar',
              dataIndex: 2 * index + 1,
              stack: true,
              xField,
              yField,
              barWidth,
            },
          ];

          return list;
        }),
      );

      const colors = flatten(
        items
          .map(({ isNight }) => {
            return [
              colorMap.reference,
              isNight ? colorMap.night : colorMap.day,
            ];
          })
          .filter(Boolean),
      );

      return {
        series,
        colors,
        dataList,
      };
    },
    [daytime, data, xField, yField, barWidth, colorMap],
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

  const tooltipProps = merge(defaultTooltip, tooltip);

  return (
    <CommonChart
      {...defaultProps}
      data={dataList}
      tooltip={tooltipProps}
      series={[...referenceSeries, ...series]}
      crosshair={crosshairMemo}
      color={!showReference ? colors : [colorMap.reference, ...colors!]}
      {...rest}
    />
  );
}

export type { HideAxesStackBarProps };
