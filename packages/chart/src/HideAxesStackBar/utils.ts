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

/**
 * 获取参考数据，根据默认值及真实值最大值计算比例
 * @param props
 */
export function getReferenceData(props: GetReferenceDataProps) {
  const { data = [], xField, yField } = props;
  const actualData = data.map(item => item[yField] || 0);
  const actualMax = Math.max(...actualData);
  const defaultMax = Math.max(...defaultReferenceData);

  let referenceData = getByActualAndDefaultMaxData();

  if (referenceData.length === 0) {
    referenceData = getByDefaultData();
  }

  return referenceData;

  // 直接使用默认值
  function getByDefaultData() {
    return defaultReferenceData.map((item, index) => {
      return {
        [xField]: index,
        [yField]: item + 4,
      };
    });
  }

  // 以真实数据最大值&默认数据最大值计算
  function getByActualAndDefaultMaxData() {
    const scale = actualMax / defaultMax;

    if (
      !Number.isFinite(scale)
      || actualMax <= defaultMax
    ) {
      return [];
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
    id: 'reference',
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
        lineWidth: 1,
        lineDash: [2, 4],
        lineCap: 'square',
        strokeOpacity: 1,
      },
    },
    area: {
      interactive: false,
      style: {
        fill: '#314059',
        fillOpacity: 0.25,
      },
    },
  };
}
