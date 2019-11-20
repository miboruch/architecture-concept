module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": ["eslint:recommended", "prettier", "prettier/react"],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "prettier",
        "react-hooks"
    ],
    "rules": {
        "prettier/prettier": "warn",
        'no-undef': 'off',
        'no-unused-vars': 'off',
    }
};
