import { dark, light } from '@sensoro-design/chart-theme';
import { ThemeManager } from '@visactor/vchart';

import React from 'react';
import { useDark } from 'rspress/runtime';

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
