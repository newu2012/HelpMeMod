module.exports = {
  env: {
    node: true,
    es2021: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    project: ["./tsconfig.json"]
  },
  plugins: [
    'vue',
    '@typescript-eslint/recommended'
  ],
  rules: {
  }
}
