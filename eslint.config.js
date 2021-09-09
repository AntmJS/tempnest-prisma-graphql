module.exports = {
  extends: './node_modules/@antmjs/eslint/index.js',
  settings: {
    'import/resolver': {
      typescript: {
        project: 'tsconfig.json',
      },
    },
  },
}
