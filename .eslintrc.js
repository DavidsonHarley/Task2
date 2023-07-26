module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-filename-extension': 0,
    'react/react-in-jsx-scope': 0,
    'import/no-unresolved': 0,
    'react/prop-types': 0,
    'no-unused-vars': 0,
    'no-sequences': 0,
    'import/no-extraneous-dependencies': 0,
    'max-len': 0,
    'no-tabs': 0,
    'react/jsx-indent-props': [2, 'tab'],
    'react/jsx-indent': [2, 2],
    'no-mixed-spaces-and-tabs': 0,
    'react/no-array-index-key': 0,
    'import/prefer-default-export': 'off',
  },
};
