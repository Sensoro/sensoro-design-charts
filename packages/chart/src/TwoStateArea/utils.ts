import type { DataItem } from './types';

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
