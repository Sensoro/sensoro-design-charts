import type { CommonChartProps } from '@visactor/react-vchart';
import type { ICartesianCrosshairSpec } from '@visactor/vchart/esm/component/crosshair/interface'
import type { DataItem } from './types';
import { colorBlue2 } from '@sensoro-design/charts-themes';

interface TransformDataOptions {
  xField?: string;
  yField?: string;
}

export function transformData(data: DataItem[] = [], options: TransformDataOptions = {}) {
  const {
    xField = 'time',
    yField = 'value',
  } = options;

  return data.reduce<[DataItem[], DataItem[]]>((prev, cur) => {
    if (cur.select === false) {
      return [
        [...prev[0], {
          [`${xField}`]: cur[`${xField}`],
          [`${yField}`]: 0,
          select: false,
        }],
        prev[1],
      ] as [DataItem[], DataItem[]];
    }
    else {
      return [
        [...prev[0], {
          [`${xField}`]: cur[`${xField}`],
          [`${yField}`]: 0,
          select: true,
        }],
        [...prev[1], {
          [`${xField}`]: cur[`${xField}`],
          [`${yField}`]: cur[`${yField}`] || 0,
        }],
      ] as [DataItem[], DataItem[]];
    }
  }, [[], []]);
}

interface GetDefaultSeriesOptions {
  xField?: string;
  yField?: string;
  /**
   * 柱宽度
   * @default 6
   */
  barWidth?: number;
}

export function getDefaultSeries(options: GetDefaultSeriesOptions = {}) {
  const { xField, yField, barWidth = 6 } = options;

  const series: CommonChartProps['series'] = [
    {
      type: 'bar',
      dataIndex: 0,
      stack: true,
      xField,
      yField,
      tooltip: {
        visible: false,
      },
      bar: {
        style: {
          fill: (datum) => {
            return datum.select ? colorBlue2 : '#314059';
          },
          height: 4,
          dy: -4,
        },
      },
      barWidth,
    },
    {
      type: 'bar',
      dataIndex: 1,
      stack: true,
      xField,
      yField,
      barWidth,
    },
  ];

  return series;
}

interface GetDefaultCrosshairOptions {
  /**
   * 柱宽度
   * @default 6
   */
  barWidth?: number;
}

export function getDefaultCrosshair(options: GetDefaultCrosshairOptions = {}) {
  const { barWidth = 6 } = options;

  const crosshair: CommonChartProps['crosshair'] = {
    xField: {
      visible: true,
      line: {
        type: 'rect',
        width: barWidth,
        style: {
          fill: '#314059',
        },
      } as NonNullable<ICartesianCrosshairSpec['xField']>['line'],
    },
    followTooltip: true,
  };

  return crosshair;
}
