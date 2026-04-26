import type { RulesConfig } from "@eslint/core";
import { configs } from "@eslint/js";

// NOTE: https://eslint.org/docs/latest/rules/#possible-problems
const POSSIBLE_PROBLEMS = {
  "array-callback-return": "error",
  "no-await-in-loop": "error",
  "no-constructor-return": "error",
  // Note: Typescript compiler already checks for this rule
  "no-dupe-class-members": "off",
  "no-duplicate-imports": [
    "error",
    {
      allowSeparateTypeImports: true,
    },
  ],
  "no-inner-declarations": [
    "error",
    "both",
  ],
  "no-promise-executor-return": "error",
  "no-self-compare": "error",
  "no-template-curly-in-string": "error",
  "no-unmodified-loop-condition": "error",
  "no-unreachable-loop": "error",
  // Note: "@typescript-eslint/no-unused-private-class-members" already covers this rule
  "no-unused-private-class-members": "off",
  // Note: "@typescript-eslint/no-use-before-define" already covers this rule
  "no-use-before-define": "off",
  "require-atomic-updates": "error",
} satisfies RulesConfig;

// NOTE: https://eslint.org/docs/latest/rules/#suggestions
const SUGGESTIONS = {
  "arrow-body-style": [
    "error",
    "as-needed",
  ],
  "camelcase": [
    "error",
    {
      ignoreDestructuring: false,
      ignoreGlobals: false,
      ignoreImports: false,
      properties: "always",
    },
  ],
  // Note: "@typescript-eslint/class-methods-use-this" already covers this rule
  "class-methods-use-this": "off",
  // NOTE: "@typescript-eslint/consistent-return" already covers this rule
  "consistent-return": "off",
  // Note: "@typescript-eslint/default-param-last" already covers this rule
  "default-param-last": "off",
  "eqeqeq": "error",
  // Note: "@typescript-eslint/init-declarations" already covers this rule
  "init-declarations": "off",
  // Note: "@typescript-eslint/max-params" already covers this rule
  "max-params": "off",
  "no-console": "warn",
  // Note: Typescript compiler already checks for this rule
  "no-invalid-this": "off",
  // NOTE: "@typescript-eslint/no-loop-func" already covers this rule
  "no-loop-func": "off",
  // NOTE: "@typescript-eslint/no-magic-numbers" already covers this rule
  "no-magic-numbers": "off",
  // Note: Typescript compiler already checks for this rule
  "no-redeclare": "off",
  // NOTE: "@typescript-eslint/no-restricted-imports" already covers this rule
  "no-restricted-imports": "off",
  // NOTE: "@typescript-eslint/no-shadow" already covers this rule
  "no-shadow": "off",
  "no-sparse-arrays": "error",
  "no-useless-concat": "error",
  "object-shorthand": [
    "error",
    "always",
  ],
  // NOTE: "@typescript-eslint/prefer-destructuring" already covers this rule
  "prefer-destructuring": "off",
  "prefer-template": "error",
  "sort-keys": [
    "error",
    "asc",
  ],
  "template-curly-spacing": [
    "error",
    "never",
  ],
} satisfies RulesConfig;

export const JS_CONFIG = {
  extends: [configs.recommended],
  files: ["*/**/*.{js,ts,vue}"],
  ignores: ["dist/**/*.js"],
  rules: {
    ...POSSIBLE_PROBLEMS,
    ...SUGGESTIONS,
  },
};
