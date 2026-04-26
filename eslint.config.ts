import { defineConfig } from "eslint/config";
import { JS_CONFIG } from "./eslint/javascript";
import { TS_CONFIG } from "./eslint/typescript";
import { STYLISTIC_CONFIG } from "./eslint/stylistic";
import { VITEST_CONFIG } from "./eslint/vitest";
import { PLAYWRIGHT_CONFIG } from "./eslint/playwright";
import { VUE_CONFIG } from "./eslint/vue";

export default defineConfig(
  JS_CONFIG,
  TS_CONFIG,
  VUE_CONFIG,
  VITEST_CONFIG,
  PLAYWRIGHT_CONFIG,
  STYLISTIC_CONFIG,
);
