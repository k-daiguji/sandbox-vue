import type { RulesConfig } from "@eslint/core";
import { configs } from "typescript-eslint";

// NOTE: https://typescript-eslint.io/rules/?=xdeprecated-xstrict-xstylistic
const RULES = {
  "@typescript-eslint/class-methods-use-this": "error",
  // WARN: If possible, it is recommended to use tsconfig's noImplicitReturns option rather than this rule.
  "@typescript-eslint/consistent-return": "off",
  "@typescript-eslint/consistent-type-exports": "error",
  "@typescript-eslint/consistent-type-imports": "error",
  "@typescript-eslint/default-param-last": "error",
  "@typescript-eslint/explicit-function-return-type": "off",
  "@typescript-eslint/explicit-member-accessibility": [
    "error",
    {
      accessibility: "explicit",
    },
  ],
  "@typescript-eslint/explicit-module-boundary-types": "error",
  "@typescript-eslint/init-declarations": "error",
  "@typescript-eslint/max-params": [
    "error",
    {
      max: 3,
    },
  ],
  "@typescript-eslint/member-ordering": [
    "error",
    {
      default: {
        memberTypes: [
          "public-static-readonly-field",
          "public-static-field",
          "public-instance-readonly-field",
          "public-instance-field",
          "private-static-readonly-field",
          "private-static-field",
          "private-instance-readonly-field",
          "private-instance-field",

          "public-constructor",
          "private-constructor",

          "public-static-method",
          "private-static-method",

          "public-instance-method",
          "private-instance-method",
        ],
        order: "natural-case-insensitive",
      },
    },
  ],
  "@typescript-eslint/method-signature-style": "error",
  "@typescript-eslint/naming-convention": [
    "error",
    {
      format: ["strictCamelCase"],
      selector: ["variableLike"],
    },
    {
      format: ["StrictPascalCase"],
      selector: ["typeLike"],
    },
    {
      format: ["UPPER_CASE"],
      modifiers: ["const"],
      selector: "variable",
    },
  ],
  // Note: Typescript compiler already checks for this rule
  "@typescript-eslint/no-dupe-class-members": "off",
  "@typescript-eslint/no-import-type-side-effects": "off",
  // Note: Typescript compiler already checks for this rule
  "@typescript-eslint/no-invalid-this": "off",
  "@typescript-eslint/no-loop-func": "error",
  "@typescript-eslint/no-magic-numbers": "error",
  // Note: Typescript compiler already checks for this rule
  "@typescript-eslint/no-redeclare": "off",
  "@typescript-eslint/no-restricted-imports": [
    "error",
    {
      paths: [
        {
          allowTypeImports: true,
          message: "Please use import-real instead.",
          name: "import-fake",
        },
      ],
    },
  ],
  "@typescript-eslint/no-restricted-types": [
    "error",
    {
      types: {
        OldType: {
          fixWith: "NewType",
          message: "Use NewType instead",
        },
      },
    },
  ],
  "@typescript-eslint/no-shadow": "error",
  "@typescript-eslint/no-unnecessary-parameter-property-assignment": "off",
  "@typescript-eslint/no-unnecessary-qualifier": "off",
  "@typescript-eslint/no-unsafe-type-assertion": "off",
  "@typescript-eslint/no-unused-private-class-members": "error",
  "@typescript-eslint/no-use-before-define": [
    "error",
    {
      ignoreTypeReferences: false,
    },
  ],
  "@typescript-eslint/no-useless-empty-export": "error",
  "@typescript-eslint/parameter-properties": "off",
  "@typescript-eslint/prefer-destructuring": "error",
  "@typescript-eslint/prefer-enum-initializers": "off",
  "@typescript-eslint/prefer-readonly": "error",
  "@typescript-eslint/prefer-readonly-parameter-types": "off",
  "@typescript-eslint/promise-function-async": "error",
  "@typescript-eslint/require-array-sort-compare": "error",
  "@typescript-eslint/strict-boolean-expressions": "error",
  "@typescript-eslint/strict-void-return": "off",
  "@typescript-eslint/switch-exhaustiveness-check": [
    "error",
    {
      considerDefaultExhaustiveForUnions: false,
      requireDefaultForNonUnion: true,
    },
  ],
} satisfies RulesConfig;

export const TS_CONFIG = {
  extends: [
    configs.strictTypeChecked,
    configs.stylisticTypeChecked,
  ],
  files: ["*/**/*.{ts,vue}"],
  ignores: ["dist/**.js"],
  rules: RULES,
};
