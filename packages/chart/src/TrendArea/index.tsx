import type { CommonChartProps } from '@visactor/react-vchart';
import type { Datum, IAreaSeriesSpec, ICartesianAxisSpec } from './types';
import { colorBlue2, colorGreen2, colorGrey04 } from '@sensoro-design/chart-theme';
import { CommonChart } from '@visactor/react-vchart';
import { merge } from '@visactor/vutils';
import { uniq } from 'es-toolkit/array';
import React from 'react';
import { defaultXAxes, defaultYAxes } from './config';
import { getReferenceSerie } from './utils';

export interface TrendAreaProps extends Omit<CommonChartProps, 'data' | 'xField' | 'yField' | 'color'> {
  data?: Datum[];
  color?: {
    isNight?: boolean;
    disabled?: boolean;
    isReference: boolean;
    color: string;
  }[];
  /** x 字段 */
  xField?: string;
  /** y 字段 */
  yField?: string;
  /** 坐标轴 X 轴配置 */
  xAxes?: Partial<ICartesianAxisSpec>;
  /** 坐标轴 Y 轴配置 */
  yAxes?: Partial<ICartesianAxisSpec>;
  /** 隐藏参考面积图 */
  hideReference?: boolean;
  /** 参考面积图配置 */
  referenceSerie?: IAreaSeriesSpec;
  /** 白天判断 */
  daytime?: [number, number];
  /** 选择的时间 */
  selectTime?: [number, number];
}

const defaultColorConfig = [
  { isNight: false, disabled: false, color: colorGreen2 },
  { isNight: false, disabled: true, color: '#AEEAD8' },
  { isNight: true, disabled: false, color: colorBlue2 },
  { isNight: true, disabled: true, color: '#C5D7F9' },
  { isReference: true, color: colorGrey04 },
];

export function TrendArea(props: TrendAreaProps) {
  const {
    xField = 'date',
    yField = 'value',
    xAxes,
    yAxes,
    hideReference = false,
    referenceSerie,
    selectTime,
    // eslint-disable-next-line react/no-unstable-default-props
    daytime = [6, 18],
    color = defaultColorConfig,
    // eslint-disable-next-line react/no-unstable-default-props
    data = [],
    ...rest
  } = props;

  const referenceColor = defaultColorConfig.find(item => item.isReference)?.color || colorGrey04;

  const xAxesData = merge(defaultXAxes, xAxes);
  const yAxesData = merge(defaultYAxes, yAxes);
  const referenceSeries = merge(
    getReferenceSerie({
      xField,
      yField,
    }),
    referenceSerie,
  );

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
            values: data.filter((item) => {
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
      {...rest}
    />
  );
}
