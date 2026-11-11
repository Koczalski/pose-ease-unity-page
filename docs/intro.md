---
title: はじめに
slug: /
description: pose-ease-unity は、Unity エディタの中で VRChat 向けアバターのポーズを作り、その負荷を数値で確かめる拡張です。
---

pose-ease-unity は、Unity エディタの中で VRChat 向けの Humanoid アバターのポーズを作る拡張です。ポーズは Rig Controller を直接ドラッグして作ります。できあがったポーズが体にどれくらい負担をかけるかは、Comfort Analysis で数値として確かめられます。

## できること

- **Rig Controller**: 腕、脚、体幹の関節を、シーン上の制御点で動かします。手足ごとに IK と FK を切り替えられ、左右のミラーもできます。
- **アバターへの組み込み**: アバターに制御用のコンポーネントを 1 つ足すと、アバターを選ぶだけで Rig Controller が出ます。
- **Comfort Analysis**: 今のポーズについて、関節ごとの負荷率を計算します。負担の小さい姿勢への経路も示します。
- **アシスト（解析）**: Pose Controller ウィンドウの中で、今のポーズの負荷と、推定した支えを見られます。

<span class="status-planned">予定:</span> 指の操作、負担の小さい方向へ寄せるスライダー、選んだ手足の筋の活性。詳しくは各ページの状態の表を見てください。

## 対応環境

- Unity 2022.3.22f1（Built-in Render Pipeline）
- Humanoid のアバター（Animator と Avatar が設定されているもの）
- ほかの Unity のバージョンや Render Pipeline では確かめていません。

## 読み方

はじめて使う人は、「インストール」「クイックスタート」の順に読んでください。数値の出典と仮定は、それぞれのページに書いてあります。

## 画面の例

![Rig Controller のコントローラー（正面）。FK は細い輪、IK は箱、腰の Root は画面に正対した輪と矢印。](/img/screens/controllers-front.png)

*Rig Controller のコントローラー（正面）。FK は細い輪、IK は箱、腰の Root は画面に正対した輪と矢印。*

![ラベルを常に表示したところ。札は体の外に並び、細い線でコントローラーとつながる。](/img/screens/labels-always.png)

*ラベルを常に表示したところ。札は体の外に並び、細い線でコントローラーとつながる。*


:::note 画像について
画像のアバターは「ナユ 3D モデル」（有坂みと、https://www.arisakamito.com/ ）です。
:::
