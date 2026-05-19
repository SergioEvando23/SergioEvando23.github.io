import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import reactPlugin from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import importPlugin from "eslint-plugin-import";
import unusedImports from "eslint-plugin-unused-imports";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import prettier from "eslint-config-prettier";

export default tseslint.config(
  {
    ignores: [
      "dist",
      "build",
      "node_modules",
      ".next",
      "coverage",
      "*.config.js",
      "*.config.cjs",
    ],
  },

  js.configs.recommended,
  ...tseslint.configs.recommended,

  {
    files: ["**/*.{js,mjs,cjs,ts,tsx,jsx}"],

    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",

      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },

    plugins: {
      react: reactPlugin,
      "react-hooks": reactHooks,
      import: importPlugin,
      "unused-imports": unusedImports,
      "simple-import-sort": simpleImportSort,
    },

    settings: {
      react: {
        version: "detect",
      },
    },

    rules: {
      "no-console": [
        "warn",
        {
          allow: ["warn", "error"],
        },
      ],

      "no-else-return": "error",

      "@typescript-eslint/no-unused-vars": "off",
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "warn",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
        },
      ],

      "prefer-const": "error",

      "@typescript-eslint/no-explicit-any": "warn",

      "max-lines-per-function": [
        "warn",
        {
          max: 80,
          skipBlankLines: true,
          skipComments: true,
        },
      ],

      complexity: [
        "warn",
        {
          max: 10,
        },
      ],

      "max-depth": [
        "warn",
        {
          max: 3,
        },
      ],

      "max-nested-callbacks": [
        "warn",
        {
          max: 3,
        },
      ],

      curly: ["error", "all"],
      eqeqeq: ["error", "always"],

      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",

      "no-duplicate-imports": "error",

      "max-len": [
        "warn",
        {
          code: 100,
          ignoreUrls: true,
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
        },
      ],

      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",

      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",

      "@typescript-eslint/consistent-type-imports": [
        "error",
        {
          prefer: "type-imports",
        },
      ],

      "@typescript-eslint/no-empty-function": "warn",

      "@typescript-eslint/explicit-function-return-type": "off",

      "@typescript-eslint/no-inferrable-types": "off",

      "import/order": "off",

      "import/newline-after-import": [
        "error",
        {
          count: 1,
        },
      ],

      semi: ["error", "always"],

      quotes: [
        "error",
        "double",
        {
          avoidEscape: true,
        },
      ],

      indent: [
        "error",
        2,
        {
          SwitchCase: 1,
        },
      ],

      "comma-dangle": ["error", "always-multiline"],

      "object-curly-spacing": ["error", "always"],

      "array-bracket-spacing": ["error", "never"],
    },
  },

  prettier,
);
