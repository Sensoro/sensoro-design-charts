import type { IDataPos, IDataPosCallback } from '@visactor/vchart/esm/component/marker/interface';

export function getDefaultMarkLine(value: IDataPos | IDataPosCallback) {
  const markLineY = {
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
