import { defineConfig } from "eslint/config";
import prettier from "eslint-config-prettier";
import pluginVue from "eslint-plugin-vue";
import typescriptEslint from "typescript-eslint";
import globals from "globals";
import { RulesConfig } from "@eslint/core";

const customRuleESLint = {} satisfies RulesConfig;

const customRuleVueUncategorized = {} satisfies RulesConfig;

const customRuleVueExtension = {} satisfies RulesConfig;

export default defineConfig([
  {
    extends: [
      typescriptEslint.configs.recommended,
      pluginVue.configs["flat/recommended-error"],
    ],
    ignores: ["*.d.ts", "coverage/**", "dist/**"],
    languageOptions: {
      ecmaVersion: "latest",
      globals: globals.browser,
      parserOptions: {
        parser: typescriptEslint.parser,
      },
      sourceType: "module",
    },
    rules: {
      ...customRuleESLint,
      ...customRuleVueUncategorized,
      ...customRuleVueExtension,
    },
  },
  // NOTE: Make sure "prettier" is the last element in this list.
  prettier,
]);
