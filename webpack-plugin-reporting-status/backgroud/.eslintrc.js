module.exports = {
  root: true,
  env: {
    "commonjs": true,
    "node": true,
    "es6": true,
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 0,
    '@typescript-eslint/no-empty-interface': 0,
    '@typescript-eslint/member-delimiter-style': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/no-unused-vars': 0,
    'import/no-anonymous-default-export': 0,
    'react-hooks/exhaustive-deps': 0,
    'no-mixed-spaces-and-tabs': 0,
    'no-empty': 0,
    "no-console": 0,
    "strict": ["error", "global"],
    "curly": "warn"
  },
};
