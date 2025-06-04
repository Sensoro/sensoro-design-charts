import type { ICartesianAxisSpec } from './types';

export const defaultXAxes: ICartesianAxisSpec = {
  orient: 'bottom',
  type: 'band',
  trimPadding: true,
  innerOffset: {
    left: 16,
    right: 16,
  },
  label: {
    visible: true,
    formatMethod: (text) => {
      return `${text}~${+text + 1}时`;
    },
  },
  tick: {
    tickCount: 7,
  },
};

export const defaultYAxes: ICartesianAxisSpec = {
  orient: 'left',
  seriesIndex: [0, 1, 2, 3, 4, 5, 6],
};

export const defaultReferenceData = {
  values: [
    { date: 0, value: 9855 },
    { date: 1, value: 7114 },
    { date: 2, value: 5687 },
    { date: 3, value: 5170 },
    { date: 4, value: 4188 },
    { date: 5, value: 4376 },
    { date: 6, value: 17151 },
    { date: 7, value: 84498 },
    { date: 8, value: 104363 },
    { date: 9, value: 106162 },
    { date: 10, value: 139124 },
    { date: 11, value: 147276 },
    { date: 12, value: 176278 },
    { date: 13, value: 179344 },
    { date: 14, value: 150707 },
    { date: 15, value: 152922 },
    { date: 16, value: 163838 },
    { date: 17, value: 140549 },
    { date: 18, value: 115520 },
    { date: 19, value: 125382 },
    { date: 20, value: 84962 },
    { date: 21, value: 49611 },
    { date: 22, value: 22338 },
    { date: 23, value: 12522 },
  ],
};
