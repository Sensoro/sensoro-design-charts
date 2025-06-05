import type { IMarkLineSpec, IMarkPointSpec } from '@visactor/vchart';
import type { IAreaSeriesSpec } from './types';
import { colorGreyPro09, colorWhite } from '@sensoro-design/chart-theme';
import { merge } from '@visactor/vutils';
import { linearColor } from './config';

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

export function getMarkLineItem(opts: IMarkLineSpec): IMarkLineSpec {
  return {
    endSymbol: {
      visible: false,
    },
    zIndex: 101,
    line: {
      style: {
        stroke: linearColor,
        lineDash: [0],
        lineWidth: 24,
      },
    },
    ...opts,
  };
}

export function getMarkLineLabel() {
  const label: IMarkLineSpec['label'] = {
    text: '再次点击可取消选中',
    style: {
      fill: colorWhite,
    },
    labelBackground: {
      visible: true,
      padding: {
        top: 8,
        left: 12,
        right: 12,
        bottom: 8,
      },
      style: {
        fill: colorGreyPro09,
      },
    },
    dy: -8,
  };

  return label;
}

export function getMarkPoint(opts: Partial<IMarkPointSpec> = {}): IMarkPointSpec {
  return merge({
    itemLine: {
      visible: true,
      startSymbol: {
        visible: true,
        size: 10,
        style: {
          lineWidth: 2,
          fill: '#fff',
          stroke: 'default',
        },
      },
      line: {
        style: {
          visible: false,
        },
      },
    },
  }, opts);
}
