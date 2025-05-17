// eslint.config.js
import js from '@eslint/js';
import * as svelte from 'eslint-plugin-svelte';
import tseslint from 'typescript-eslint';

const ts = await tseslint.config();

export default [
  js.configs.recommended,

  ...ts,

  // Svelte support
  {
    ignores: [
      '**/node_modules/**',
      '**/.svelte-kit/**',
      '**/build/**',
      '**/dist/**',
    ],
    
    files: ['**/*.svelte'],
    languageOptions: {
      parser: svelte.parser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        extraFileExtensions: ['.svelte'],
      },
    },
    plugins: {
      svelte,
    },
    rules: {
      'svelte/valid-compile': 'error',
      'svelte/comment-directive': 'off',
      'svelte/no-at-html-tags': 'off',
      'svelte/no-unused-svelte-ignore': 'warn',
    },
  },

  {
    rules: {
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
    },
  },
];
