import type { CommonChartProps } from '@visactor/react-vchart';
import type { ICartesianAxisSpec } from './types';
import { colorBlue2, colorGrey04 } from '@sensoro-design/chart-theme';
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
    trimPadding: true,
    innerOffset: {
      left: 32,
      right: 32,
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
    color: [colorGrey04, colorBlue2, colorGrey04],
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
            fill: {
              gradient: 'linear',
              x0: 0.5,
              y0: 0,
              x1: 0.5,
              y1: 1,
              stops: [
                {
                  offset: 0,
                  opacity: 0.35,
                },
                {
                  offset: 1,
                  opacity: 0,
                },
              ],
            },
            cursor: 'not-allowed',
          },
        },
      },
      {
        type: 'area',
        id: 'area2',
        zIndex: 2,
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
            fill: {
              gradient: 'linear',
              x0: 0.5,
              y0: 0,
              x1: 0.5,
              y1: 1,
              stops: [
                {
                  offset: 0,
                  opacity: 0.35,
                },
                {
                  offset: 1,
                  opacity: 0,
                },
              ],
            },
            cursor: 'not-allowed',
          },
        },
      },
    ],
    axes: [
      yAxesData,
      xAxesData,
    ],
  };

  return defaultProps;
}
