---
title: クイックスタート
description: アバターに Rig Controller を組み込み、ポーズを作って保存するまでの流れ。
---

ここでは、アバターに Rig Controller を組み込み、ポーズを作って保存するまでを扱います。

## 1. アバターに組み込む

1. Hierarchy で、アバターのオブジェクトを選びます。選んだものから親をたどって、Humanoid の Root を決めます。
2. 右クリックして **GameObject > IKFK > Add Rig Controller** を選びます。

Root の下に **IKFK Rig Controller** という子オブジェクトができます。同じアバターに 2 つは入りません。詳しくは [アバターへの組み込み](./avatar-install) を読んでください。

## 2. ポーズを作る

1. アバターを選ぶと、シーン上に Rig Controller が表示されます。
2. 手や足の先の箱（IK）をドラッグして、位置を決めます。
3. 関節だけを回したいときは、FK の輪を選んで回転ギズモで回します。
4. 手足ごとに IK と FK を切り替えられます。切り替えても、今のポーズは保たれます。

## 3. 保存する

Pose Controller ウィンドウ（**Tools > IKFKController > Pose Controller**）の **Save Pose + Clip** を押すと、ポーズとアニメーションクリップが保存されます。

## 4. 負荷を確かめる

Pose Controller ウィンドウの **アシスト（解析）** で「有効」にすると、今のポーズの負荷が見られます。詳しくは [アシスト（解析）](./assist) を読んでください。
