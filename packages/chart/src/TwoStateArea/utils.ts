import type { AreaChartProps } from '@visactor/react-vchart';
import type { DataItem } from './types';
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

  const list: DataItem[] = data.reduce<DataItem[]>((prev, cur) => {
    return [
      ...prev,
      {
        [`${xField}`]: cur[`${xField}`],
        [`${yField}`]: cur[`${yField}`] === 0 ? null : cur[`${yField}`],
        type: 1,
      },
      {
        [`${xField}`]: cur[`${xField}`],
        [`${yField}`]: cur[`${yField}`] === 0 ? 0 : null,
        type: 2,
      },
    ];
  }, []);

  return list;
}

interface GetDefaultTooltipOptions {
  yField: string;
  /** 图表颜色 */
  color: [string, string];
}

export function getDefaultTooltip(options: GetDefaultTooltipOptions) {
  const { yField, color } = options;

  const defaultTooltip: AreaChartProps['tooltip'] = {
    mark: {
      visible: false,
    },
    dimension: {
      shapeType: hyphenPointPath,
      shapeColor: (datum) => {
        if (datum?.type === 1) {
          return color[0];
        }
        return color[1];
      },
      updateContent: (prev) => {
        return prev?.filter(item => item.datum?.[`${yField}`] !== null);
      },
    },
  };

  return defaultTooltip;
}
