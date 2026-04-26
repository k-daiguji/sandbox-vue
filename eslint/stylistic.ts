import type { RulesConfig } from "@eslint/core";
import stylistic from "@stylistic/eslint-plugin";

const OVERRIDES = {
  "@stylistic/array-bracket-spacing": [
    "error",
    "always",
    {
      arraysInArrays: false,
      objectsInArrays: false,
      singleValue: false,
    },
  ],
  "@stylistic/lines-between-class-members": [
    "error",
    {
      enforce: [
        {
          blankLine: "always",
          next: "field",
          prev: "*",
        },
        {
          blankLine: "never",
          next: "field",
          prev: "field",
        },
        {
          blankLine: "always",
          next: "method",
          prev: "field",
        },
        {
          blankLine: "always",
          next: "method",
          prev: "method",
        },
      ],
    },
  ],
  "@stylistic/quotes": [
    "error",
    "double",
  ],
  "@stylistic/semi": [
    "error",
    "always",
  ],
} satisfies RulesConfig;

const OPTIONS = {
  "@stylistic/array-bracket-newline": "error",
  "@stylistic/array-element-newline": [
    "error",
    "always",
  ],
  "@stylistic/comma-dangle": [
    "error",
    "always-multiline",
  ],
  "@stylistic/curly-newline": [
    "error",
    "always",
  ],
  // "@stylistic/exp-list-style": "error",
  "@stylistic/function-call-argument-newline": [
    "error",
    "consistent",
  ],
  "@stylistic/function-call-spacing": "error",
  "@stylistic/function-paren-newline": "error",
  "@stylistic/implicit-arrow-linebreak": "error",
  "@stylistic/line-comment-position": "error",
  // Note: "@stylistic/linebreak-style" is not compatible with Windows and Unix-based systems, so we disable it.
  "@stylistic/linebreak-style": "off",
  "@stylistic/lines-around-comment": [
    "error",
    {
      beforeBlockComment: true,
    },
  ],
  "@stylistic/max-len": [
    "error",
    {
      code: 80,
      ignoreComments: true,
      ignoreStrings: true,
      tabWidth: 2,
    },
  ],
  "@stylistic/multiline-comment-style": "error",
  "@stylistic/newline-per-chained-call": "error",
  "@stylistic/no-confusing-arrow": "error",
  "@stylistic/no-extra-semi": "error",
  "@stylistic/nonblock-statement-body-position": [
    "error",
    "below",
  ],
  "@stylistic/object-curly-newline": [
    "error",
    {
      ExportDeclaration: "always",
      ImportDeclaration: "never",
      ObjectExpression: "always",
      ObjectPattern: "never",
    },
  ],
  "@stylistic/object-property-newline": "error",
  "@stylistic/one-var-declaration-per-line": "error",
  "@stylistic/padding-line-between-statements": [
    "error",
    {
      blankLine: "always",
      next: "return",
      prev: "*",
    },
  ],
  "@stylistic/semi-style": "error",
  "@stylistic/switch-colon-spacing": "error",
  "@stylistic/wrap-regex": "error",
} satisfies RulesConfig;

export const STYLISTIC_CONFIG = {
  extends: [stylistic.configs.recommended],
  files: ["*/**/*.{js,ts,vue}"],
  ignores: ["dist/**/*.js"],
  plugins: {
    "@stylistic": stylistic,
  },
  rules: {
    ...OVERRIDES,
    ...OPTIONS,
  },
};
