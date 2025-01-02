import js from '@eslint/js';
import nPlugin from 'eslint-plugin-n';

export default [
  {
    files: ['backend/**/*.js'],
    ignores: ['node_modules'],
    ...js.configs.recommended,
    ...nPlugin.configs.recommendedModule,
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        __dirname: 'readonly',
      },
    },
    plugins: {
      n: nPlugin,
    },
    rules: {
      // override or add your own
      'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      'no-console': 'warn',
    },
  },
];
