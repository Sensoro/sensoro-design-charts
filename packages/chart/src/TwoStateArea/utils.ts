import type { CommonChartProps } from '@visactor/react-vchart';
import type { DataItem, TwoStateAreaProps } from './types';
import { merge } from '@visactor/vutils';
import { hyphenPointPath } from '../config';

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
    return [
      [...prev[0], {
        [`${xField}`]: cur[`${xField}`],
        [`${yField}`]: cur[`${yField}`] === 0 ? null : cur[`${yField}`],
      }],
      [...prev[1], {
        [`${xField}`]: cur[`${xField}`],
        [`${yField}`]: cur[`${yField}`] === 0 ? 0 : null,
      }],
    ] as [DataItem[], DataItem[]];
  }, [[], []]);
}

interface GetDefaultTooltipOptions {
  yField: string;
}

export function getDefaultTooltip(options: GetDefaultTooltipOptions) {
  const { yField } = options;

  const defaultTooltip: CommonChartProps['tooltip'] = {
    mark: {
      visible: false,
    },
    dimension: {
      shapeType: hyphenPointPath,
      updateContent: (prev) => {
        return prev?.filter(item => item.datum?.[`${yField}`] !== null);
      },
    },
  };

  return defaultTooltip;
}

interface GetDefaultSeriesOptions {
  xField: string;
  yField: string;
  color: [string, string];
  tooltip: TwoStateAreaProps['tooltip'];
}

export function getDefaultSeries(options: GetDefaultSeriesOptions) {
  const { xField, yField, color, tooltip } = options;
  const defaultTooltip = getDefaultTooltip({ yField });
  const tooltip1 = merge({}, defaultTooltip, {
    dimension: {
      shapeFill: color[0],
    },
  }, tooltip);
  const tooltip2 = merge({}, defaultTooltip, {
    dimension: {
      shapeFill: color[1],
    },
  }, tooltip);

  const series: CommonChartProps['series'] = [
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
      tooltip: tooltip1,
      invalidType: 'break',
      line: {
        style: {
          lineCap: 'square',
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
      tooltip: tooltip2,
      line: {
        style: {
          lineCap: 'square',
        },
      },
    },
  ];

  return series;
}
