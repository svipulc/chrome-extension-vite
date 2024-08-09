module.exports = {
  root: true, // Indicates that this is the root configuration file for ESLint
  env: {
    browser: true, // Specifies that the code is intended to run in a browser environment
    es2020: true, // Enables ES2020 global variables and syntax
  },
  extends: [
    // Specifies the base configurations to extend
    "eslint:recommended", // Use the recommended ESLint rules
    "plugin:@typescript-eslint/recommended", // Use recommended rules from the TypeScript ESLint plugin
    "plugin:react-hooks/recommended", // Use recommended rules for React Hooks
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"], // Files and directories to ignore during linting
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser for TypeScript
  plugins: ["react-refresh"], // Includes the react-refresh plugin for hot reloading support
  rules: {
    // Custom rules to override the defaults
    "react-refresh/only-export-components": [
      "warn", // Set the rule to warn level
      { allowConstantExport: true }, // Allow exporting constants without warnings
    ],
  },
};
