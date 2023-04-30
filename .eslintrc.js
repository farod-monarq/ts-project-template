const fs = require('fs');

module.exports = {
    env: {
        node: true,
        mocha: true,
        es6: true
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
    ],
    root: true,
    parserOptions:{
        ecmaVersion:"latest",
        sourceType:"module",
        project: getProjectFile(),
    },
    parser: "@typescript-eslint/parser",
    plugins: ['eslint-plugin', '@typescript-eslint', 'mocha'],

};

/**
 * Detect tsconfig file
 */
function getProjectFile() {
    if (fs.existsSync('./tsconfig.build.json')) return './tsconfig.build.json';
    if (fs.existsSync('./tsconfig.json')) return './tsconfig.json';
    return undefined;
}

