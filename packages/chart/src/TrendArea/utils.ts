import type { CommonChartProps } from '@visactor/react-vchart';
import type {
  IAreaSeriesSpec,
  IMarkLineSpec,
  IMarkPointSpec,
  TrendAreaProps,
} from './types';
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
  // const { xField, yField } = params;
  const { xField } = params;

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
        // valueFormatter: `{${yField}:,.0f}`,
      },
      shapeType: hyphenPointPath,
      shapeFill: colorBlue2,
      updateContent: (prev) => {
        const list = take(prev!, 1).map((item) => {
          return {
            ...item,
            shapeFill: item.shapeStroke,
          };
        });
        return list;
      },
    },
  };

  return tooltip;
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
        lineDash: [2, 4],
        lineCap: 'square',
        strokeOpacity: 0.15,
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
              opacity: 0.05,
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

interface GetReferenceDataProps {
  data: TrendAreaProps['data'];
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
        [yField]: item,
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
        [yField]: value,
      };
    });

    return referenceData;
  }
}
