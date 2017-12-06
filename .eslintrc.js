module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "node": true,
        "jasmine": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "comma-dangle": ["error", "never"], // 要求或禁止末尾逗号：不允许逗号
        "linebreak-style": [
            "error",
            "unix"
        ],
        "semi": [
            "error",
            "always"
        ],
        "no-cond-assign": ["error", "always"],
        // disable rules from base configurations
        "no-console": "off",
        "no-unused-vars": 0,
        "react/jsx-uses-react": 2,
        "react/jsx-uses-vars": 2,
        "react/react-in-jsx-scope": 2,
        "react/self-closing-comp": ["error", {
            "component": true,
            "html": true
        }],
        "react/no-is-mounted": 2,
        "react/require-render-return": 2, // 在 render 方法中总是确保 return 返回值
        "react/no-string-refs": 2,
        "jsx-a11y/no-access-key": 2,
        "jsx-a11y/aria-role": [ 2, {
            "ignoreNonDOM": true
        }],
        "react/jsx-boolean-value": 1,
        "react/jsx-curly-spacing": [2, {"when": "never", "allowMultiline": false}],
        "react/prefer-es6-class": [1, "never"],
        "react/prefer-stateless-function": [1, { "ignorePureComponents": true }]
    }
};