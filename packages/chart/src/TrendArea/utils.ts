import type { IAreaSeriesSpec } from './types';

interface Params {
  xField?: string | string[];
  yField?: string | string[];
}

export function getReferenceSerie(params: Params = {}): IAreaSeriesSpec {
  const { xField, yField } = params;

  return {
    type: 'area',
    data: {
      values: [],
    },
    xField,
    yField,
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
      style: {
        fill: {
          gradient: 'linear',
          x0: 0.5,
          y0: 0,
          x1: 0.5,
          y1: 1,
          stops: [
            {
              offset: 0,
              opacity: 0.25,
            },
            {
              offset: 1,
              opacity: 0,
            },
          ],
        },
        fillOpacity: 1,
      },
    },
  };
}
