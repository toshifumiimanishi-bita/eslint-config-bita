# eslint-config-bita

This package provides bitA's .eslintrc as an extensible shared config.

## Install

```
$ npm install --save-dev eslint eslint-plugin-unicorn toshifumiimanishi-bita/eslint-config-bita.git
```

## Usage

Configure it in `.eslintrc`

```
{
  "extends": ["eslint-config-bita"]
}
```

## Rules

| Name | Description | Level |
| :--- | :--- | :--- |
| [complexity](https://eslint.org/docs/rules/complexity) | 循環的複雑度（Cyclomatic Complexity）を `5` に制限します。  | :warning: |
| [max-depth](https://eslint.org/docs/rules/max-depth) | ネストの最大深度を `3` に制限します。 | :warning: |
| [max-lines](https://eslint.org/docs/rules/max-lines) | 1 ファイルの最大行数を `100` に制限します。 | :warning: |
| [no-magic-numbers](https://eslint.org/docs/rules/max-statements) | マジックナンバー（意味不明な数値）を禁止します。 | :warning: |
| [unicorn/consistent-destructuring](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/consistent-destructuring.md) | 分割代入値の利用を強制します。 | :no_entry_sign: |
| [unicorn/consistent-function-scoping](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/consistent-function-scoping.md) | 可能な限り高いスコープの関数定義を強制します。 | :warning: |
