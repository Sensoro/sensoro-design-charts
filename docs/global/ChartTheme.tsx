import { VChartCore } from '@sensoro-design/chart';
import { dark, light } from '@sensoro-design/chart-theme';

import React from 'react';
import { useDark } from 'rspress/runtime';

const { ThemeManager } = VChartCore;

ThemeManager.registerTheme('sensoroDesignLight', light);
ThemeManager.registerTheme('sensoroDesignDark', dark);

function ChartTheme() {
  const dark = useDark();

  React.useEffect(() => {
    ThemeManager.setCurrentTheme(dark ? 'sensoroDesignDark' : 'sensoroDesignLight');
  }, [dark]);

  return null;
}

export default ChartTheme;
