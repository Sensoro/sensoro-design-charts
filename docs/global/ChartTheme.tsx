import type { ITheme } from '@visactor/vchart';
import { VChartCore } from '@sensoro-design/chart';
import { dark, darkMini, light } from '@sensoro-design/chart-theme';
import React from 'react';
import { useDark } from 'rspress/runtime';
import './globale.css';

const { ThemeManager } = VChartCore;

ThemeManager.registerTheme('sensoroDesignLight', light as ITheme);
ThemeManager.registerTheme('sensoroDesignDark', dark as ITheme);
ThemeManager.registerTheme('sensoroDesignDarkMini', darkMini as ITheme);

function ChartTheme() {
  const dark = useDark();

  React.useEffect(() => {
    ThemeManager.setCurrentTheme(dark ? 'sensoroDesignDark' : 'sensoroDesignLight');
  }, [dark]);

  return null;
}

export default ChartTheme;
