---
title: 出典とライセンス
description: 解析に使っている数値・モデルの出典、画像のアバターの利用規約、このサイトのライセンス。
---

# 出典とライセンス

## ツール本体
pose-ease-unity のライセンスはまだ決めていません。決まりしだい、ここに書きます。

## 解析に使っている筋骨格モデルとデータ
筋の経路・モーメントアーム・筋力の値は、次の公開モデルから取り出したものです（数値は出典の値のまま使っています）。

| データ | 出典 | ライセンス | 著作権表示 |
|---|---|---|---|
| 脚の筋（Rajagopal 2015） | SimTK「Full Body Model for use in Dynamic Simulations of Human Gait」 https://simtk.org/projects/full_body | MIT Use Agreement | Copyright (c) 2015, Stanford University |
| 腕の筋（Arm26） | OpenSim Models, Models/Arm26/arm26.osim https://github.com/opensim-org/opensim-models | CC BY 3.0 https://creativecommons.org/licenses/by/3.0/ （変更あり: 経路を関節角の格子の表にした、左腕は鏡映、巻きつき面を使う筋は OpenSim 4.6 で計算） | The OpenSim Development Team |
| 腰椎の筋（Christophy ほか） | SimTK「Musculoskeletal Model of the Lumbar Spine」 https://simtk.org/projects/lumbarspine | MIT Use Agreement | Copyright (c) 2010, University of California at Berkeley |
| 頸部の筋（Vasavada Neck Model 1.6） | SimTK https://simtk.org/frs/?group_id=253 | MIT Use Agreement | Copyright (c) 2016, Stanford University |

開発中のリポジトリでは、MIT Use Agreement の全文を各データの隣の LICENSE ファイルに、Arm26 の出典とライセンスをデータの中に記録しています。配布の形が決まったら、配布物に同梱します。

## 姿勢の基準と負荷率の段階
- 姿勢の参照値: OWAS（Ovako Working posture Analysing System）と ISO 11226:2000 を引用する公開資料に基づきます。
- 負荷率の段階: 約 15% は長時間可、約 50% は約 2 分（Ergoweb）。それ以外の境界は仮の値（Assumed）です。

## 画像のアバター
このサイトの画像に写っているアバターは「ナユ 3D モデル」です。

- 権利者: 有坂みと（https://www.arisakamito.com/ ）
- 利用規約: ナユ３Dモデル利用規約（VN3 ライセンス Ver.1.10 準拠）。「出版物および電子出版物への利用」が許可されている範囲で、スクリーンショットを載せています。
- アバターのデータ（モデル・テクスチャなど）は、このサイトでもツールでも配布していません。データの再配布は利用規約で許可されていません。

## このサイト
- [Docusaurus](https://docusaurus.io/)（MIT License）で作っています。
- Unity は Unity Technologies の商標です。VRChat は VRChat Inc. の商標です。
