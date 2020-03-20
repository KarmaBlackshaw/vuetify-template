module.exports = {
  root: true,

  env: {
    node: true
  },
  parser: 'vue-eslint-parser',

  rules: {
    camelcase: 'error',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-alert': 'off',
    'no-await-in-loop': 'error',
    'array-callback-return': 'error',
    'default-case': 'error',
    'no-else-return': 'error',
    'no-empty-function': 'error',
    'no-loop-func': 'error',
    'no-return-await': 'error',
    'require-await': 'error',
    'no-shadow': 'error',
    'comma-dangle': 'error',
    'array-bracket-spacing': ['error', 'never'],
    'block-spacing': 'error',
    'brace-style': 'error',
    'arrow-spacing': 'error',
    'no-var': 'error',
    'prefer-const': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'vue/max-attributes-per-line': ['error', {
      singleline: 2
    }],
    'vue/html-indent': ['error', 2, {
      attribute: 1,
      baseIndent: 1,
      closeBracket: 0,
      alignAttributesVertically: true,
      ignores: []
    }],
    'vue/html-closing-bracket-newline': ['error', {
      singleline: 'never',
      multiline: 'always'
    }],
    'vue/html-self-closing': ['error', {
      html: {
        void: 'never',
        normal: 'always',
        component: 'always'
      },
      svg: 'always',
      math: 'always'
    }],
    'vue/html-closing-bracket-spacing': ['error', {
      startTag: 'never',
      endTag: 'never',
      selfClosingTag: 'always'
    }],
    'vue/multiline-html-element-content-newline': ['error', {
      ignoreWhenEmpty: true,
      ignores: [],
      allowEmptyLines: false
    }],
    'vue/component-definition-name-casing': ['error', 'PascalCase'],
    'vue/html-end-tags': 'error',
    'vue/this-in-template': ['error', 'never'],
    'vue/v-bind-style': ['error', 'shorthand'],
    'vue/v-on-style': ['error', 'shorthand'],
    'vue/no-v-html': 'error',
    camelcase: ['error', { properties: 'always' }],
    'no-useless-catch': 'off'
  },

  parserOptions: {
    parser: 'babel-eslint'
  },

  extends: [
    'eslint:recommended',
    'plugin:vue/essential',
    '@vue/standard'
  ]
}
