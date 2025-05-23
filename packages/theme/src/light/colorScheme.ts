import type { IThemeColorScheme } from '@visactor/vchart';
import {
  colorBlue04,
  colorGrey03,
  colorGrey04,
  colorGrey06,
  colorGrey10,
  colorGreyPro08,
  colorGreyPro09,
  colorWhite,
} from '../common';
import { dataScheme } from './dataScheme';

export const colorScheme: IThemeColorScheme = {
  default: {
    dataScheme,
    palette: {
      /** 背景色 */
      backgroundColor: colorWhite,
      /** 图表边框色 */
      borderColor: 'rgba(229,230,235,1)',
      /** 默认阴影颜色 */
      shadowColor: 'rgba(0,0,0,0.1)',
      /** 鼠标 hover 项背景颜色 */
      hoverBackgroundColor: 'rgba(229,230,235,1)',
      /** 滑块类组件背景条填充颜色 */
      sliderRailColor: 'rgba(229,230,235,1)',
      /** 滑块类组件滑块填充颜色 */
      sliderHandleColor: 'rgba(255,255,255,1)',
      /** 滑块类组件已选范围填充颜色 */
      sliderTrackColor: 'rgba(22,93,255,1)',
      /** 浮层背景区域颜色 */
      popupBackgroundColor: colorGreyPro09,
      /** 浮层边框颜色 */
      popupBorderColor: 'transparent',

      /** 主要字色 */
      primaryFontColor: colorGrey10,
      /** 次要字色 */
      secondaryFontColor: colorGreyPro08,
      /** 第三字色 */
      tertiaryFontColor: 'rgba(134,144,156,1)',
      /** 轴标签字色 */
      axisLabelFontColor: colorGrey06,
      /** 禁用字色 */
      disableFontColor: 'rgba(201,205,212,1)',
      /** 轴高亮标记字色 */
      axisMarkerFontColor: 'rgba(255,255,255,1)',

      /** 轴网格线颜色 */
      axisGridColor: colorGrey03,
      /** 轴线颜色 */
      axisDomainColor: colorGrey04,

      /** 缩略轴滑块描边颜色 */
      dataZoomHandleStrokeColor: 'rgba(169,174,184,1)',
      /** 缩略轴图表区域颜色 */
      dataZoomChartColor: 'rgba(201,205,212,1)',

      /** 播放器控制器填充颜色 */
      playerControllerColor: 'rgba(22,93,255,1)',

      /** 轴高亮标记背景色 */
      axisMarkerBackgroundColor: 'rgba(29,33,41,1)',
      /** 标注标签背景颜色 */
      markLabelBackgroundColor: 'rgba(229,230,235,1)',
      /** 标注线颜色 */
      markLineStrokeColor: 'rgba(78,89,105,1)',

      /** Tooltip 标题颜色 */
      tooltipTitleColor: colorGrey06,
      /** Tooltip Key颜色 */
      tooltipKeyLabelColor: 'rgba(255,255,255,0.8)',
      /** Tooltip Value 颜色 */
      tooltipValueLabelColor: colorWhite,

      /** crosshair 线颜色  */
      crosshairLineColor: colorBlue04,

      /** 危险色 */
      dangerColor: 'rgba(245,63,63,1)',
      /** 警告色 */
      warningColor: 'rgba(255,125,0,1)',
      /** 成功色 */
      successColor: 'rgba(0,180,42,1)',
      /** 信息色 */
      infoColor: 'rgba(22,93,255,1)',
    },
  },
};
