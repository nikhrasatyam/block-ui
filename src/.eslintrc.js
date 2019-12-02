module.exports = {
    extends: [
      "airbnb-typescript",
    ],
    plugins: ["@typescript-eslint", "react-hooks"],
    rules: {
        '@typescript-eslint/camelcase': "off",
        'react/prop-types': "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "react-hooks/rules-of-hooks": "error",
        'max-len': ["error", { "code": 200 }]
    },
    env: {
        "browser": true,
        "jest" : true
    },
}