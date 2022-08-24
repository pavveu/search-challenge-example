module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    tsconfigRootDir: "./",
    project: ["./tsconfig.json"],
  },
  plugins: ["@typescript-eslint"],
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "prettier",
  ],
  settings: {
    react: {
      // https://github.com/jsx-eslint/eslint-plugin-react/issues/1981
      version: "999.999.999",
    },
  },
  rules: {
    "react/jsx-key": "off",
    "array-callback-return": "error",
    "no-alert": ["error"],
    "no-debugger": ["error"],
    eqeqeq: ["error", "always", { null: "ignore" }],
    "no-restricted-syntax": [
      "error",
      {
        selector: "ForInStatement",
        message: "for ... in disallowed, use for ... of instead",
      },
    ],

    // we allow empty interfaces
    "no-empty-pattern": "off",
    "@typescript-eslint/no-empty-interface": "off",

    // we allow empty functions
    "@typescript-eslint/no-empty-function": "off",

    // @todo
    "react/display-name": "off",
    "react/no-children-prop": "off",
    "@typescript-eslint/no-unsafe-assignment": "off",
    "@typescript-eslint/no-unsafe-member-access": "off",
    "@typescript-eslint/ban-types": "off",
    "@typescript-eslint/restrict-template-expressions": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-unsafe-return": "off",
    "@typescript-eslint/require-await": "off",
    "@typescript-eslint/no-unsafe-argument": "off",
    "@typescript-eslint/no-unnecessary-type-assertion": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/restrict-plus-operands": "off",
    "@typescript-eslint/no-non-null-asserted-optional-chain": "off",
    "@typescript-eslint/no-unsafe-call": "off",
    "@typescript-eslint/await-thenable": "off",
    "@typescript-eslint/no-floating-promises": "off",
    "require-await": "off",
    "@typescript-eslint/no-misused-promises": "off",
  },
};