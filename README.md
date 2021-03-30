# Electron + Next.jsアプリ

(Next.js公式の例)[https://github.com/vercel/next.js/tree/canary/examples/with-electron]を元に作成

## 動作環境

|||
|--|--|
|node.js|12.13.0|
|npm|6.14.5|
|yarn|1.22.4|

## 実行コマンド

### 起動

```bash
npm start
# or
yarn start

# command
electron .
```

### Next.jsのビルド

```bash
npm run build
# or
yarn build

# command
next build renderer && next export renderer
```

### Next.jsのビルドを削除

```bash
npm run clean
# or
yarn clean

# command
rimraf dist renderer/.next renderer/out
```

### パッケージ化

```bash
npm dist
# or
yarn dist

# command
npm run build && electron-builder
```
