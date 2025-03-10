import type { IMarkLineSpec, IMarkLineXYSpec } from './types';

export function getDefaultMarkLine(value: IMarkLineXYSpec['y']) {
  const markLineY: IMarkLineSpec = {
    y: value,
    endSymbol: {
      visible: false,
    },
    line: {
      style: {
        stroke: '#F72231',
        lineWidth: 1,
      },
    },
    label: {
      text: `均值: ${value}`,
      position: 'insideEndTop',
      labelBackground: {
        visible: false,
      },
      style: {
        fontSize: 10,
        fill: '#F72231',
      },
    },
    zIndex: 0,
  };

  return markLineY;
}
