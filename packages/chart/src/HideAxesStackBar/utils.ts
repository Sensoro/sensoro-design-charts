import type { CommonChartProps } from '@visactor/react-vchart';
import type {
  DataItem,
  HideAxesStackBarProps,
  IAreaSeriesSpec,
  ICartesianCrosshairSpec,
} from './types';
import { colorBlue2 } from '@sensoro-design/chart-theme';
import { floor } from 'es-toolkit/compat';
import { defaultReferenceData } from './config';

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

export function getNumberArrayMaxIndexAndValue(list: number[]) {
  const max = Math.max(...list);

  const index = list.findIndex((item: number) => item === max);

  return {
    index,
    max,
  };
}

interface GetReferenceDataProps {
  data: HideAxesStackBarProps['data'];
  xField: string;
  yField: string;
}

export function getReferenceData(props: GetReferenceDataProps) {
  const { data = [], xField, yField } = props;
  const result = getNumberArrayMaxIndexAndValue(defaultReferenceData);
  const actualData = data.map(item => item[yField]);
  const actualresult = getNumberArrayMaxIndexAndValue(actualData);
  const datum = data[result.index];

  if (
    datum?.[yField] < defaultReferenceData[result.index]
    && actualresult.max < defaultReferenceData[actualresult.index]
  ) {
    return getByDefaultData();
  }

  if (datum?.[yField] === 0) {
    return getByActualMaxData();
  }
  else {
    return getByDefaultMaxData();
  }

  function getByDefaultData() {
    return defaultReferenceData.map((item, index) => {
      return {
        [xField]: index,
        [yField]: item + 4,
      };
    });
  }

  // 以实际数据最大值计算
  function getByActualMaxData() {
    const scale = actualresult.max / defaultReferenceData[actualresult.index];
    if (!Number.isFinite(scale)) {
      return getByDefaultData();
    }
    const referenceData = defaultReferenceData.map((item, index) => {
      const value = floor(item * scale);
      return {
        [xField]: index,
        [yField]: value + 4,
      };
    });

    return referenceData;
  }

  // 以默认数据最大值计算
  function getByDefaultMaxData() {
    const scale = datum[yField] / result.max;
    if (!Number.isFinite(scale)) {
      return getByDefaultData();
    }

    const referenceData = defaultReferenceData.map((item, index) => {
      const value = floor(item * scale);
      return {
        [xField]: index,
        [yField]: value + 4,
      };
    });

    return referenceData;
  }
}

interface Params {
  xField?: string;
  yField?: string;
}

export function getReferenceSerie(params: Params = {}): IAreaSeriesSpec {
  const { xField, yField } = params;

  return {
    id: 'reference_area',
    type: 'area',
    data: {
      values: [],
    },
    xField,
    yField,
    zIndex: 1,
    tooltip: {
      visible: false,
    },
    hover: false,
    select: false,
    point: {
      visible: false,
    },
    line: {
      style: {
        lineDash: [2, 4],
      },
    },
    area: {
      interactive: false,
      style: {
        fillOpacity: 0.25,
      },
    },
  };
}
