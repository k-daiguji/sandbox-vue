import type { RulesConfig } from "@eslint/core";
import { parser } from "typescript-eslint";
import { configs } from "eslint-plugin-vue";
import { browser, node } from "globals";

// NOTE: https://eslint.vuejs.org/rules/#uncategorized
const UNCATEGORIZED = {
  "vue/block-lang": [
    "error",
    {
      script: {
        lang: "ts",
      },
    },
  ],
  "vue/block-tag-newline": [
    "error",
    {
      singleline: "always",
    },
  ],
  "vue/component-api-style": [
    "error",
    ["script-setup"],
  ],
  "vue/component-name-in-template-casing": [
    "error",
    "PascalCase",
    {
      registeredComponentsOnly: false,
    },
  ],
  "vue/component-options-name-casing": "error",
  "vue/custom-event-name-casing": "error",
  "vue/define-emits-declaration": [
    "error",
    "type-literal",
  ],
  "vue/define-macros-order": [
    "error",
    {
      defineExposeLast: true,
      order: [
        "defineModel",
        "defineProps",
        "defineEmits",
      ],
    },
  ],
  "vue/define-props-declaration": "error",
  "vue/define-props-destructuring": "error",
  "vue/enforce-style-attribute": [
    "error",
    {
      allow: ["scoped"],
    },
  ],
  "vue/html-button-has-type": "error",
  "vue/html-comment-content-newline": "error",
  "vue/html-comment-content-spacing": "error",
  "vue/html-comment-indent": "error",
  "vue/match-component-file-name": [
    "error",
    {
      extensions: ["vue"],
      shouldMatchCase: true,
    },
  ],
  "vue/match-component-import-name": "error",
  "vue/max-lines-per-block": [
    "error",
    {
      script: 20,
      skipBlankLines: true,
      style: 20,
      template: 50,
    },
  ],
  "vue/max-props": [
    "error",
    {
      maxProps: 1,
    },
  ],
  "vue/max-template-depth": [
    "error",
    {
      maxDepth: 5,
    },
  ],
  "vue/new-line-between-multi-line-property": "off",
  "vue/next-tick-style": [
    "error",
    "callback",
  ],
  "vue/no-bare-strings-in-template": "error",
  "vue/no-boolean-default": "error",
  "vue/no-duplicate-attr-inheritance": [
    "error",
    {
      checkMultiRootNodes: true,
    },
  ],
  "vue/no-duplicate-class-names": "error",
  "vue/no-empty-component-block": "error",
  "vue/no-import-compiler-macros": "error",
  "vue/no-literals-in-template": "error",
  "vue/no-multiple-objects-in-class": "error",
  "vue/no-negated-v-if-condition": "error",
  "vue/no-potential-component-option-typo": "error",
  "vue/no-ref-object-reactivity-loss": "error",
  "vue/no-restricted-block": "off",
  "vue/no-restricted-call-after-await": "off",
  "vue/no-restricted-class": "off",
  "vue/no-restricted-component-names": "off",
  "vue/no-restricted-component-options": "off",
  "vue/no-restricted-custom-event": "off",
  "vue/no-restricted-html-elements": "off",
  "vue/no-restricted-props": [
    "error",
    {
      message:
        "Please use 'enabled' prop instead of 'disabled' for better readability.",
      name: "disabled",
      suggest: "enabled",
    },
    {
      message:
        "Please use 'modelValue' prop instead of 'value' to avoid confusion with native HTML attributes.",
      name: "value",
      suggest: "modelValue",
    },
  ],
  "vue/no-restricted-static-attribute": [
    "error",
    {
      element: "/^([A-Z][a-zA-Z_-]*)$/",
      key: "style",
      message:
        "Please use 'class' attribute instead of 'style' for better maintainability and performance.",
    },
  ],
  "vue/no-restricted-v-bind": "off",
  "vue/no-restricted-v-on": "off",
  "vue/no-root-v-if": "error",
  "vue/no-setup-props-reactivity-loss": "error",
  "vue/no-static-inline-styles": "error",
  "vue/no-template-target-blank": "error",
  "vue/no-this-in-before-route-enter": "off",
  "vue/no-undef-components": "error",
  "vue/no-undef-directives": "error",
  "vue/no-undef-properties": "error",
  "vue/no-unsupported-features": [
    "error",
    {
      version: "^3.5.0",
    },
  ],
  "vue/no-unused-emit-declarations": "error",
  "vue/no-unused-properties": "error",
  "vue/no-unused-refs": "error",
  "vue/no-use-v-else-with-v-for": "error",
  "vue/no-useless-mustaches": "error",
  "vue/no-useless-v-bind": "error",
  "vue/no-v-text": "error",
  "vue/padding-line-between-blocks": "error",
  "vue/padding-line-between-tags": [
    "error",
    [
      {
        blankLine: "never",
        next: "*",
        prev: "*",
      },
    ],
  ],
  "vue/padding-lines-in-component-definition": [
    "error",
    {
      betweenOptions: "never",
      withinOption: {
        emits: "never",
        props: "never",
      },
    },
  ],
  "vue/prefer-define-options": "error",
  "vue/prefer-prop-type-boolean-first": "error",
  "vue/prefer-separate-static-class": "error",
  // "vue/prefer-single-event-payload": "error",
  "vue/prefer-true-attribute-shorthand": "error",
  "vue/prefer-use-template-ref": "error",
  // "vue/prefer-v-model": "error",
  "vue/require-default-export": "off",
  "vue/require-direct-export": "off",
  "vue/require-emit-validator": "error",
  "vue/require-explicit-slots": "error",
  "vue/require-expose": "off",
  "vue/require-macro-variable-name": [
    "error",
    {
      defineEmits: "emits",
    },
  ],
  "vue/require-name-property": "off",
  "vue/require-prop-comment": "off",
  "vue/require-typed-object-prop": "error",
  "vue/require-typed-ref": "error",
  "vue/restricted-component-names": [
    "error",
    {
      allow: ["/^(Base|Custom|Page)/"],
    },
  ],
  "vue/script-indent": "error",
  "vue/slot-name-casing": "error",
  "vue/sort-keys": "error",
  "vue/static-class-names-order": "error",
  "vue/v-for-delimiter-style": "error",
  "vue/v-if-else-key": "off",
  "vue/v-on-handler-style": "error",
} satisfies RulesConfig;

// NOTE: https://eslint.vuejs.org/rules/#extension-rules
const EXTENSION = {
  "vue/array-bracket-newline": "error",
  "vue/array-bracket-spacing": "error",
  "vue/array-element-newline": "error",
  "vue/arrow-spacing": "error",
  "vue/block-spacing": "error",
  "vue/brace-style": "error",
  "vue/camelcase": "error",
  "vue/comma-dangle": "error",
  "vue/comma-spacing": "error",
  "vue/comma-style": "error",
  "vue/dot-location": "error",
  "vue/dot-notation": "error",
  "vue/eqeqeq": "error",
  "vue/func-call-spacing": "error",
  "vue/key-spacing": "error",
  "vue/keyword-spacing": "error",
  "vue/max-len": [
    "error",
    {
      ignoreComments: true,
      ignoreStrings: true,
    },
  ],
  "vue/multiline-ternary": "error",
  "vue/no-console": "warn",
  "vue/no-constant-condition": "error",
  "vue/no-empty-pattern": "error",
  "vue/no-extra-parens": "error",
  "vue/no-implicit-coercion": "error",
  "vue/no-irregular-whitespace": "error",
  "vue/no-loss-of-precision": "error",
  "vue/no-negated-condition": "error",
  "vue/no-restricted-syntax": "error",
  "vue/no-sparse-arrays": "error",
  "vue/no-useless-concat": "error",
  "vue/object-curly-newline": "error",
  "vue/object-curly-spacing": "error",
  "vue/object-property-newline": "error",
  "vue/object-shorthand": "error",
  "vue/operator-linebreak": "error",
  "vue/prefer-template": "error",
  "vue/quote-props": "error",
  "vue/space-in-parens": "error",
  "vue/space-infix-ops": "error",
  "vue/space-unary-ops": "error",
  "vue/template-curly-spacing": "error",
} satisfies RulesConfig;

export const VUE_CONFIG = {
  extends: [configs["flat/recommended-error"]],
  ignores: ["dist/**/*.js"],
  languageOptions: {
    ecmaVersion: "latest",
    globals: {
      ...browser,
      ...node,
      NodeJS: true,
    },
    parserOptions: {
      extraFileExtensions: [".vue"],
      parser,
      project: "./tsconfig.json",
      sourceType: "module",
    },
  },
  rules: {
    ...UNCATEGORIZED,
    ...EXTENSION,
  },
};
