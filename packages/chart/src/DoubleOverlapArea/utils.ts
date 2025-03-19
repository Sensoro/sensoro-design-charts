import type { CommonChartProps } from '@visactor/react-vchart';
import type { ICartesianAxisSpec } from './types';
import { colorBlue2 } from '@sensoro-design/chart-theme';
import { merge } from '@visactor/vutils';
import { defaultArea, defaultPoint } from './config';

interface Params {
  xAxes?: Partial<ICartesianAxisSpec>;
  yAxes?: Partial<ICartesianAxisSpec>;
  xField?: string | string[];
  yField?: string | string[];
}

export function getDefaultProps(params: Params) {
  const { xAxes = {}, yAxes = {}, xField, yField } = params;

  const defaultXAxes = {
    orient: 'bottom',
    label: {
      visible: true,
    },
    type: 'band',
  };

  const defaultYAxes = {
    orient: 'left',
    seriesIndex: [0, 1, 2],
  };

  const xAxesData = merge(defaultXAxes, xAxes);
  const yAxesData = merge(defaultYAxes, yAxes);

  const defaultProps: CommonChartProps = {
    color: ['#C5D7F9', colorBlue2, '#C5D7F9'],
    series: [
      {
        type: 'area',
        zIndex: 0,
        id: 'area1',
        dataIndex: 0,
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
        area: {
          ...defaultArea,
          style: {
            ...defaultArea.style,
            cursor: 'not-allowed',
          },
        },
      },
      {
        type: 'area',
        id: 'area2',
        zIndex: 1,
        dataIndex: 1,
        xField,
        yField,
        stack: false,
        area: {
          ...defaultArea,
          style: {
            ...defaultArea.style,
          },
        },
        point: {
          ...defaultPoint,
          style: {
            ...defaultPoint.style,
          },
        },
      },
      {
        type: 'area',
        id: 'area3',
        dataIndex: 2,
        xField,
        yField,
        zIndex: 0,
        tooltip: {
          visible: false,
        },
        hover: false,
        select: false,
        point: {
          visible: false,
        },
        area: {
          ...defaultArea,
          style: {
            ...defaultArea.style,
            cursor: 'not-allowed',
          },
        },
      },
    ],
    axes: [
      yAxesData,
      xAxesData,
    ],
    crosshair: {
      xField: {
        visible: true,
        line: {
          type: 'line',
        },
      },
      followTooltip: true,
    },
  };

  return defaultProps;
}
