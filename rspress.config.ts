import * as path from 'node:path';
import { defineConfig } from 'rspress/config';
import { pluginPreview } from '@rspress/plugin-preview';
import { pluginLastUpdated } from '@rspress/plugin-last-updated';
import { pluginPlayground } from '@rspress/plugin-playground';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: 'Sensoro Design Chart',
  icon: '/rspress-icon.png',
  logo: {
    light: '/rspress-light-logo.png',
    dark: '/rspress-dark-logo.png',
  },
  plugins: [
    pluginPreview({

    }),
    pluginLastUpdated(),
    // pluginPlayground({
    //   defaultDirection: 'vertical',
    //   include: [
    //     '@sensoro-design/chart',
    //     '@sensoro-design/chart-theme',
    //     'dayjs',
    //   ]
    // }),
  ],
  themeConfig: {
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/Sensoro/sensoro-design-charts',
      },
    ],
  },
});
