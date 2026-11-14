module.exports = [
  {
    ignores: ["venv/**", "node_modules/**", "**/coverage/**"],
  },
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "commonjs",
      globals: {
        node: true,
        jest: true,
        es2022: true,
      },
    },
    rules: {
      "no-unused-vars": "warn",
      "no-console": "off",
    },
  },
];
