import * as path from 'node:path';
import { pluginPreview } from '@rspress/plugin-preview';
import { defineConfig } from 'rspress/config';

export default defineConfig({
  base: '/sensoro-design-charts/',
  root: path.join(__dirname, 'docs'),
  title: 'Sensoro Design Chart',
  icon: '/logo.png',
  logo: '/logo.png',
  logoText: 'Sensoro Design Chart',
  globalUIComponents: [
    path.join(__dirname, 'docs/global/ChartTheme.tsx'),
  ],
  markdown: {
    checkDeadLinks: true,
  },
  route: {
    cleanUrls: true,
  },
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
    enableContentAnimation: true,
    enableAppearanceAnimation: false,
    lastUpdated: true,
    hideNavbar: 'auto',
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
