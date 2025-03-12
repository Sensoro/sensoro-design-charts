import * as path from 'node:path';
import { pluginPreview } from '@rspress/plugin-preview';
import { defineConfig } from 'rspress/config';

export default defineConfig({
  base: '/sensoro-design-charts/',
  root: path.join(__dirname, 'docs'),
  title: 'Sensoro Design Chart',
  icon: '/logo.png',
  logo: {
    light: '/logo.png',
    dark: '/logo.png',
  },
  logoText: 'Sensoro Design Chart',
  globalUIComponents: [
    path.join(__dirname, 'docs/global/ChartTheme.tsx'),
  ],
  plugins: [
    pluginPreview({}),
    // pluginPlayground({
    //   defaultDirection: 'vertical',
    //   include: [
    //     '@sensoro-design/chart',
    //     '@sensoro-design/chart-theme',
    //     'dayjs',
    //   ],
    // }),
  ],
  themeConfig: {
    lastUpdated: true,
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/Sensoro/sensoro-design-charts',
      },
    ],
  },
  builderConfig: {
    resolve: {
      alias: {
        '@sensoro-design/chart': './packages/chart/src',
        '@sensoro-design/chart-theme': './packages/theme/src',
      },
    },
  },
});
