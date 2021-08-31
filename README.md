# eslint-config-bita

This package provides bitA's .eslintrc as an extensible shared config.

## Install

```
$ npm install --save-dev toshifumiimanishi-bita/eslint-config-bita.git
```

## Usage

Configure it in `.eslintrc`

```
{
  "extends": ["eslint-config-bita"]
}
```

## Rules

| Name | Description |
| :--- | :--- |
| [complexity](https://eslint.org/docs/rules/complexity) | 循環的複雑度（Cyclomatic Complexity）を `5` に制限します。  |
| [max-depth](https://eslint.org/docs/rules/max-depth) | ネストの最大深度を `3` に制限します。 |
| [max-lines](https://eslint.org/docs/rules/max-lines) | 1 ファイルの最大行数を `100` に制限します。 |
| [no-magic-numbers](https://eslint.org/docs/rules/max-statements) | マジックナンバー（意味不明な数値）を禁止します。 |
