/** @type {import('eslint').Linter.Config} */
module.exports = {
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
  ],
  plugins: [
    "react",
  ],
  rules: {
    // Your custom ESLint rules
  },
};
