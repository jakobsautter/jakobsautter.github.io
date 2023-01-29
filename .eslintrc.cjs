/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
    root: true,
    extends: ['plugin:vue/vue3-essential', 'eslint:recommended', '@vue/eslint-config-typescript', '@vue/eslint-config-prettier'],
    parserOptions: {
        ecmaVersion: 'latest'
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'prettier/prettier': {
            semi: true,
            trailingComma: 'none',
            singleQuote: true,
            printWidth: 150,
            tabWidth: 4,
            bracketSameLine: true,
            useTabs: false,
            singleAttributePerLine: false,
            proseWrap: 'always',
            endOfLine: 'auto'
        }
    }
};
