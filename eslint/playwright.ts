import type { RulesConfig } from "@eslint/core";
import playwright from "eslint-plugin-playwright";

// NOTE: https://github.com/mskelton/eslint-plugin-playwright#readme
const RULES = {
  "playwright/max-expects": [
    "error",
    {
      max: 3,
    },
  ],
  "playwright/no-commented-out-tests": "error",
  "playwright/no-get-by-title": "error",
  "playwright/no-hooks": "off",
  "playwright/no-nth-methods": "off",
  "playwright/no-raw-locators": "error",
  "playwright/no-restricted-locators": "off",
  "playwright/no-restricted-matchers": "off",
  "playwright/no-restricted-roles": "off",
  "playwright/no-slowed-test": "error",
  "playwright/prefer-comparison-matcher": "error",
  "playwright/prefer-equality-matcher": "error",
  "playwright/prefer-lowercase-title": "error",
  "playwright/prefer-native-locators": "error",
  "playwright/prefer-strict-equal": "error",
  "playwright/prefer-to-be": "error",
  "playwright/prefer-to-contain": "error",
  "playwright/require-hook": "error",
  "playwright/require-soft-assertions": "off",
  "playwright/require-tags": "off",
  "playwright/require-to-pass-timeout": "error",
  "playwright/require-to-throw-message": "error",
  "playwright/require-top-level-describe": [
    "error",
    {
      maxTopLevelDescribes: 2,
    },
  ],
} satisfies RulesConfig;

export const PLAYWRIGHT_CONFIG = {
  extends: [playwright.configs["flat/recommended"]],
  files: ["e2e/**/*.spec.ts"],
  rules: RULES,
};
