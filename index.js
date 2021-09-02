module.exports = {
  plugins: [
    "unicorn",
  ],
  rules: {
    "complexity": ["warn", 5],
    "max-depth": ["warn", 3],
    "max-lines": ["warn", { max: 100 }],
    "no-magic-numbers": "warn",
    "unicorn/consistent-destructuring": "error",
    "unicorn/consistent-function-scoping": "warn",
  },
}
