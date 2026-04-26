import type { RulesConfig } from "@eslint/core";
import vitest from "@vitest/eslint-plugin";

// NOTE: https://github.com/vitest-dev/eslint-plugin-vitest
const RULES = {
  "vitest/consistent-each-for": [
    "error",
    {
      describe: "each",
      it: "for",
      test: "for",
    },
  ],
  "vitest/consistent-test-filename": [
    "error",
    {
      pattern: ".+.test.ts",
    },
  ],
  "vitest/consistent-test-it": "error",
  "vitest/consistent-vitest-vi": "error",
  "vitest/hoisted-apis-on-top": "error",
  "vitest/max-expects": [
    "error",
    {
      max: 1,
    },
  ],
  "vitest/max-nested-describe": [
    "error",
    {
      max: 3,
    },
  ],
  "vitest/no-alias-methods": "error",
  "vitest/no-conditional-in-test": "error",
  "vitest/no-conditional-tests": "error",
  "vitest/no-duplicate-hooks": "error",
  "vitest/no-focused-tests": [
    "error",
    {
      fixable: false,
    },
  ],
  "vitest/no-hooks": "off",
  "vitest/no-importing-vitest-globals": "off",
  "vitest/no-large-snapshots": "error",
  "vitest/no-restricted-matchers": "error",
  "vitest/no-restricted-vi-methods": "error",
  "vitest/no-test-prefixes": "error",
  "vitest/no-test-return-statement": "error",
  "vitest/padding-around-after-all-blocks": "off",
  "vitest/padding-around-after-each-blocks": "off",
  "vitest/padding-around-all": "error",
  "vitest/padding-around-before-all-blocks": "off",
  "vitest/padding-around-before-each-blocks": "off",
  "vitest/padding-around-describe-blocks": "off",
  "vitest/padding-around-expect-groups": "off",
  "vitest/padding-around-test-blocks": "off",
  "vitest/prefer-called-once": "error",
  "vitest/prefer-called-times": "off",
  "vitest/prefer-called-with": "error",
  "vitest/prefer-comparison-matcher": "error",
  "vitest/prefer-describe-function-title": "off",
  "vitest/prefer-each": "error",
  "vitest/prefer-equality-matcher": "error",
  "vitest/prefer-expect-assertions": "off",
  "vitest/prefer-expect-resolves": "error",
  "vitest/prefer-expect-type-of": "error",
  "vitest/prefer-hooks-in-order": "error",
  "vitest/prefer-hooks-on-top": "error",
  "vitest/prefer-import-in-mock": "error",
  "vitest/prefer-importing-vitest-globals": "error",
  "vitest/prefer-lowercase-title": "error",
  "vitest/prefer-mock-promise-shorthand": "error",
  "vitest/prefer-mock-return-shorthand": "error",
  "vitest/prefer-snapshot-hint": "error",
  "vitest/prefer-spy-on": "error",
  "vitest/prefer-strict-boolean-matchers": "error",
  "vitest/prefer-strict-equal": "error",
  "vitest/prefer-to-be": "error",
  "vitest/prefer-to-be-falsy": "off",
  "vitest/prefer-to-be-object": "error",
  "vitest/prefer-to-be-truthy": "off",
  "vitest/prefer-to-contain": "error",
  "vitest/prefer-to-have-been-called-times": "error",
  "vitest/prefer-to-have-length": "error",
  "vitest/prefer-todo": "error",
  "vitest/prefer-vi-mocked": "error",
  "vitest/require-awaited-expect-poll": "error",
  "vitest/require-hook": "error",
  "vitest/require-mock-type-parameters": [
    "error",
    {
      checkImportFunctions: true,
    },
  ],
  "vitest/require-test-timeout": "off",
  "vitest/require-to-throw-message": "error",
  "vitest/require-top-level-describe": [
    "error",
    {
      maxNumberOfTopLevelDescribes: 2,
    },
  ],
  "vitest/unbound-method": "error",
  "vitest/warn-todo": "warn",
} satisfies RulesConfig;

export const VITEST_CONFIG = {
  extends: [vitest.configs.recommended],
  files: ["tests/**/*.test.ts"],
  rules: RULES,
};
