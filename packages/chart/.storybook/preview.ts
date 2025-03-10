import type { Preview } from '@storybook/react';
import { dark, light } from '@sensoro-design/chart-theme';
import { ThemeManager } from '@visactor/vchart';

ThemeManager.registerTheme('sensoroDesignLight', light);
ThemeManager.registerTheme('sensoroDesignDark', dark);
ThemeManager.setCurrentTheme('sensoroDesignLight');

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
