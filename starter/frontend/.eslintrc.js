module.exports = {
  ignorePatterns: ['build/', 'dist/', 'node_modules/'],
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  plugins: ['react', 'prettier'],
  settings: {
    react: {
      version: 'detect', // Automatically detect the React version
    },
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        jsxSingleQuote: false,
        printWidth: 120,
        parser: 'babel-ts',
      },
    ],
    // Customize your rules here
    'react/prop-types': process.env.FAIL_LINT ? 2 : 0, // Strict error level based on environment
    'react/jsx-uses-vars': 'warn',
  },
};