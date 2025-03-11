import type { IAxisCommonTheme } from '@visactor/vchart';

export const axis: IAxisCommonTheme = {
  domainLine: {
    visible: true,
    style: {
      lineWidth: 1,
      stroke: {
        type: 'palette',
        key: 'axisDomainColor'
      },
      strokeOpacity: 1
    }
  },
  /** 网格线配置 */
  grid: {
    visible: false,
    style: {
      lineWidth: 1,
      stroke: {
        type: 'palette',
        key: 'axisGridColor'
      },
      strokeOpacity: 1,
      lineDash: [3, 2],
      opacity: 1,
    },
  },
  subGrid: {
    visible: false,
    style: {
      lineWidth: 1,
      stroke: {
        type: 'palette',
        key: 'axisGridColor'
      },
      strokeOpacity: 1,
      lineDash: [4, 4]
    }
  },
  /** 轴刻度线配置 */
  tick: {
    visible: true,
    inside: false,
    tickSize: 4,
    alignWithLabel: true,
    style: {
      lineWidth: 1,
      stroke: {
        type: 'palette',
        key: 'axisDomainColor'
      },
      opacity: 1,
    },
  },
  subTick: {
    visible: false,
    tickSize: 2,
    style: {
      lineWidth: 1,
      stroke: {
        type: 'palette',
        key: 'axisDomainColor'
      },
      strokeOpacity: 1
    }
  },
  /** 轴标签配置 */
  label: {
    visible: true,
    inside: false,
    space: 10,
    style: {
      fontSize: 12,
      fill: {
        type: 'palette',
        key: 'axisLabelFontColor'
      },
      fontWeight: 'normal',
      fillOpacity: 1,
    },
  },
  title: {
    space: 10,
    padding: 0,
    style: {
      fontSize: {
        type: 'token',
        key: 'l5FontSize'
      },
      lineHeight: {
        type: 'token',
        key: 'l5LineHeight'
      },
      fill: {
        type: 'palette',
        key: 'secondaryFontColor'
      },
      fontWeight: 'normal',
      fillOpacity: 1
    }
  }
}