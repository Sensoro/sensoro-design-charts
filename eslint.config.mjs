import antfu from '@antfu/eslint-config';

export default antfu(
  {
    react: true,
    stylistic: {
      semi: true,
    },
    ignores: [
      'scripts',
      'dist',
      'tsconfig.app.json',
      'tsconfig.json',
      'tsconfig.node.json',
    ],
  },
);
