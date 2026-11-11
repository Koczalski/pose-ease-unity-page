# pose-ease-unity-page

pose-ease-unity のドキュメントサイトです。Docusaurus 3.10.2 で作り、日本語を主、英語を併設しています。

公開先: https://koczalski.github.io/pose-ease-unity-page/

## 手元で確かめる

Node.js 20 以上が必要です。

```
npm ci
npm run build
npm run start
```

`npm run build` は `build/` に静的サイトを作ります。`npm run start` は開発用のサーバーを立てます。

## 公開

`main` に push すると、`.github/workflows/pages.yml` が GitHub Actions でビルドして、GitHub Pages に配信します。

## 内容の注意

- 画像は、アバターが写らない模式図だけを使います。
- アバターのデータやポーズの素材は、このリポジトリに入れません。
- 数値の出典と仮定は、各ページに書きます。
