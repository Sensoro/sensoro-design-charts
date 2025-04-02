import { VChartCore } from '@sensoro-design/chart';
import { dark, light } from '@sensoro-design/chart-theme';
import React from 'react';
import { useDark } from 'rspress/runtime';
import './globale.css';

const { ThemeManager } = VChartCore;

ThemeManager.registerTheme('sensoroDesignLight', light as any);
ThemeManager.registerTheme('sensoroDesignDark', dark as any);

function ChartTheme() {
  const dark = useDark();

  React.useEffect(() => {
    ThemeManager.setCurrentTheme(dark ? 'sensoroDesignDark' : 'sensoroDesignLight');
  }, [dark]);

  return null;
}

export default ChartTheme;
