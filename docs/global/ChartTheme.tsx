import React from 'react';
import { useDark } from 'rspress/runtime';

import { dark, light } from '@sensoro-design/chart-theme';
import { ThemeManager } from '@visactor/vchart';

ThemeManager.registerTheme('sensoroDesignLight', light);
ThemeManager.registerTheme('sensoroDesignDark', dark);
ThemeManager.setCurrentTheme('sensoroDesignLight');

function ChartTheme() {
  const dark = useDark();

  React.useEffect(() => {
    ThemeManager.setCurrentTheme(dark ? 'sensoroDesignDark' : 'sensoroDesignLight');
  }, [dark])

  return null
}

export default ChartTheme;