import type { CommonChartProps } from '@visactor/react-vchart';
import type { IMarkLineSpec, IMarkPointSpec } from '@visactor/vchart';
import type { IAreaSeriesSpec, TrendAreaProps } from './types';
import { colorBlue2, colorGreyPro09, colorWhite } from '@sensoro-design/chart-theme';
import { merge } from '@visactor/vutils';
import { take } from 'es-toolkit/array';
import { floor } from 'es-toolkit/compat';
import { hyphenPointPath } from '../config';
import { defaultReferenceData, linearColor } from './config';

interface Params {
  xField?: string;
  yField?: string;
}

export function getDefaultTooltip(params: Params = {}) {
  const { xField, yField } = params;

  const tooltip: CommonChartProps['tooltip'] = {
    mark: {
      visible: false,
    },
    dimension: {
      title: {
        value: (datum) => {
          return `${datum?.[xField!]}:00 ~ ${datum?.[xField!] + 1}:00`;
        },
      },
      content: {
        valueFormatter: `{${yField}:,.0f}`,
      },
      shapeType: hyphenPointPath,
      shapeFill: colorBlue2,
      updateContent: (prev) => {
        return take(prev!, 1);
      },
    },
  };

  return tooltip;
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

export function getNumberArrayMaxIndexAndValue(list: number[]) {
  const max = Math.max(...list);

  const index = list.findIndex((item: number) => item === max);

  return {
    index,
    max,
  };
}

interface GetReferenceDataProps {
  data: TrendAreaProps['data'];
  xField: string;
  yField: string;
}

export function getReferenceData(props: GetReferenceDataProps) {
  const { data = [], xField, yField } = props;
  const result = getNumberArrayMaxIndexAndValue(defaultReferenceData);
  const datum = data[result.index];

  if (datum?.[yField] === 0) {
    return getByActualData();
  }
  else {
    return getByDefaultData();
  }

  // 以实际数据最大值计算
  function getByActualData() {
    const dataValues = data.map(item => item[yField]);
    const result = getNumberArrayMaxIndexAndValue(dataValues);
    const scale = result.max / defaultReferenceData[result.index];
    const referenceData = defaultReferenceData.map((item, index) => {
      const value = floor(item * scale);
      return {
        [xField]: index,
        [yField]: value,
      };
    });

    return referenceData;
  }

  // 以默认数据最大值计算
  function getByDefaultData() {
    const scale = datum[yField] / result.max;
    const referenceData = defaultReferenceData.map((item, index) => {
      const value = floor(item * scale);
      return {
        [xField]: index,
        [yField]: value,
      };
    });

    return referenceData;
  }
}
