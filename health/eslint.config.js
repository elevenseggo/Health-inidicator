import js from '@eslint/js';
import jestPlugin from 'eslint-plugin-jest';
import globals from 'globals';

export default [

  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.node,  
        ...globals.jest  
      }
    },
    rules: {
      ...js.configs.recommended.rules,
      'no-unused-vars': 'warn',
      'no-console': 'off'
    }
  },
  
  {
    files: ['**/tests/**/*.js', '**/*.test.js'],
    ...jestPlugin.configs['flat/recommended']
  }
];