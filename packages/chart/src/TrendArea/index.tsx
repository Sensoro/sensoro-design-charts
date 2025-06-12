import type { CommonChartProps } from '@visactor/react-vchart';
import type {
  Datum,
  IAreaSeriesSpec,
  IMarkAreaSpec,
  IMarkLineSpec,
  IMarkPointSpec,
  TrendAreaProps,
} from './types';
import { useGetState } from '@rcuse/core';
import { colorBlue06, colorGreen2, colorGrey04 } from '@sensoro-design/chart-theme';
import { CommonChart } from '@visactor/react-vchart';
import { merge } from '@visactor/vutils';
import { uniq } from 'es-toolkit/array';
import { isNotNil } from 'es-toolkit/predicate';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  defaultColor,
  defaultCrosshair,
  defaultPoint,
  defaultSelectModeCrosshair,
  defaultXAxes,
  defaultYAxes,
} from './config';
import {
  getDefaultTooltip,
  getMarkLineItem,
  getMarkLineLabel,
  getMarkPoint,
  getReferenceData,
  getReferenceSerie,
} from './utils';

export type {
  TrendAreaProps,
};

const defaultDaytime = [6, 18];

export function TrendArea(props: TrendAreaProps) {
  const {
    mode = 'default',
    xField = 'date',
    yField = 'value',
    xAxes,
    yAxes,
    showReference = true,
    referenceSerie,
    selectTime,
    daytime = defaultDaytime,
    color = defaultColor,
    data,
    tooltip,
    defaultSelectValue = null,
    onDimensionClick,
    ...rest
  } = props;

  const timeoutRef = useRef<NodeJS.Timeout>();
  const [, setFirstSelect, getFirstSelect] = useGetState(true);
  const [, setSelectVal, getSelectVal] = useGetState<Datum | null>(defaultSelectValue);
  const [markLine, setMarkLine] = useState<IMarkLineSpec[]>([]);
  const [markPoint, setMarkPoint] = useState<IMarkPointSpec[]>([]);
  const referenceColor = color.find(item => item.isReference)?.color || colorGrey04;
  const xAxesData = merge(defaultXAxes, xAxes);
  const yAxesData = merge(defaultYAxes, yAxes);
  const tooltipProps = merge(
    getDefaultTooltip({
      xField,
      yField,
    }),
    tooltip,
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

  const { dataList, series, colors } = useMemo(
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
            id: `${index}_${isNight ? '_night' : '_day'}`,
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

  const markAreaProps = useMemo(
    () => {
      if (Array.isArray(selectTime) && selectTime.length === 2) {
        const times = uniq([...selectTime, 0, 23]).sort((a, b) => a - b);

        const items: {
          times: [number, number];
          disabled: boolean;
        }[] = [];

        for (let i = 0; i < times.length - 1; i++) {
          items.push({
            times: [times[i], times[i + 1]],
            disabled: !(times[i] >= selectTime[0] && times[i + 1] <= selectTime[1]),
          });
        }

        const markAreas: IMarkAreaSpec[] = [];

        for (let i = 0; i < items.length; i++) {
          const { disabled } = items[i];

          markAreas.push({
            x: times[i],
            x1: times[i + 1],
            zIndex: 1000,
            area: {
              style: {
                fillOpacity: 0,
                cursor:
                  mode === 'select'
                    ? (disabled ? 'not-allowed' : 'pointer')
                    : 'default',
              },
            },
          });
        }

        return markAreas;
      }

      return [];
    },
    [selectTime, mode],
  );

  const handleChangeMarkLine = () => {
    const selectVal = getSelectVal();
    const firstSelect = getFirstSelect();

    const markLine: IMarkLineSpec[] = [];
    const markPoint: IMarkPointSpec[] = [];

    if (isNotNil(selectVal)) {
      markLine.push(
        getMarkLineItem({
          x: selectVal[xField],
          label: firstSelect ? getMarkLineLabel() : undefined,
        }),
        getMarkLineItem({
          x: selectVal[xField],
          line: {
            style: {
              stroke: colorBlue06,
              lineWidth: 1,
              lineDash: [3, 2],
            },
          },
        }),
      );

      const isNotNight = selectVal[xField] >= daytime[0] && selectVal[xField] <= daytime[1];
      const notNightColor = color.find(item => item.isNight === false && item.disabled === false)?.color || colorGreen2;

      markPoint.push(
        getMarkPoint({
          x: selectVal[xField],
          y: selectVal[yField],
          itemLine: {
            startSymbol: {
              visible: true,
              style: {
                stroke: isNotNight ? notNightColor : 'default',
              },
            },
          },
        }),
      );
    }

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    if (firstSelect) {
      setFirstSelect(false);
      timeoutRef.current = setTimeout(() => {
        handleChangeMarkLine();
      }, 3 * 1000);
    }

    setMarkLine(markLine);
    setMarkPoint(markPoint);
  };

  const handleDimensionClick: CommonChartProps['onDimensionClick'] = (e) => {
    if (Array.isArray(selectTime) && selectTime.length === 2 && mode === 'select') {
      const dimensionInfo = e.dimensionInfo[0];
      const value = dimensionInfo.value;

      if (dimensionInfo && value >= selectTime[0] && value <= selectTime[1]) {
        const datum = (data || []).find(item => item[xField] === value);

        if (datum) {
          if (getSelectVal()?.[yField] === value) {
            setSelectVal(null);
            onDimensionClick?.({
              data: datum,
              select: false,
            });
          }
          else {
            setSelectVal(datum);
            onDimensionClick?.({
              data: datum,
              select: true,
            });
          }
        }

        handleChangeMarkLine();
      }
    }
  };

  useEffect(() => {
    if (defaultSelectValue) {
      const handler = () => {
        handleChangeMarkLine();
      };

      handler();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    timeoutRef.current && clearTimeout(timeoutRef.current);
  }, []);

  return (
    <CommonChart
      color={!showReference ? colors : [referenceColor, ...colors!]}
      data={dataList}
      series={[...referenceSeries, ...series]}
      axes={[yAxesData, xAxesData]}
      crosshair={mode === 'default' ? defaultCrosshair : defaultSelectModeCrosshair}
      tooltip={tooltipProps}
      markLine={markLine}
      markPoint={markPoint}
      skipFunctionDiff
      onDimensionClick={handleDimensionClick}
      markArea={markAreaProps}
      {...rest}
    />
  );
}
