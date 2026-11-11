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

## 書き方（MDX）

ページは `docs/**/*.mdx`（日本語）と `i18n/en/docusaurus-plugin-content-docs/current/**/*.mdx`（英語）です。次の部品は `src/theme/MDXComponents.js` で全ページに登録してあり、import なしで使えます。

| 部品 | 使い方 |
| --- | --- |
| `<Figure src="/img/screens/x.png" caption="説明" />` | 画像と説明。`alt` を省くと説明を代替テキストにも使う |
| `<Gallery>…</Gallery>` | 複数の Figure を 1〜2 列に並べる |
| `<Status>使えます</Status>`、`<Status kind="planned">予定</Status>` | 機能の状態の札 |
| `<Steps>`（中に番号つきリスト）`</Steps>` | 番号つきの手順 |
| `<ImageCredit />` | 画像のアバターの注記（表示中の言語で出る） |
| `<Hero>`、`<FeatureCards>` | トップページの見出しと機能の入口 |
| `<DocCardList />` | カテゴリの中のページをカードで並べる |

部品の中身は `src/components/` にあります。

## 内容の注意

- 画像に写るアバターは「ナユ 3D モデル」（有坂みと）です。利用規約で許可されたスクリーンショットだけを載せ、アバターのデータやポーズの素材は、このリポジトリに入れません。
- 数値の出典と仮定は、各ページに書きます。
