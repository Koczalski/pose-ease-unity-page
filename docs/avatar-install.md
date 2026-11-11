---
title: アバターへの組み込み
description: アバターに Rig Controller を組み込む方法と、アップロードへの影響。
---

Rig Controller は、アバターの Root の下に、制御用の子オブジェクトとして組み込めます。組み込むと、Pose Controller を開かなくても、アバターを選ぶだけで Rig Controller が出ます。

## 組み込み方

次のどれかを使います。

1. Hierarchy で右クリックし、**GameObject > IKFK > Add Rig Controller** を選ぶ。
2. Inspector の Animator のメニュー（CONTEXT）から、**Add IKFK Rig Controller** を選ぶ。
3. Pose Controller ウィンドウの **アバターに組み込む** を押す。

## 組み込まれるもの

- Root の下に、**IKFK Rig Controller** という子オブジェクトが 1 つできます。
- 子には、コンポーネント **IKFKRigController** が付きます。持つのは、印、Animator への参照、手足ごとの FK/IK の状態だけです。
- IK の目標の位置とポールの位置は持ちません。Rig Controller を使うたびに、今の骨の位置から作ります。古い位置が残らないようにするためです。

## Root の決め方

選んだオブジェクトから親をたどり、Humanoid の Root を決めます。Avatar Descriptor を持つものを優先します。

次の場合は組み込まず、理由を表示します。

- Prefab のアセット（プロジェクト内のファイル）そのもの
- Humanoid でないオブジェクト

同じ Root に 2 回組み込んでも、子は増えません。追加は、元に戻す（Undo）1 回で戻せます。

## アップロードへの影響

子オブジェクトには **EditorOnly** タグを付けます。VRChat SDK のビルドでは、EditorOnly のオブジェクトは含まれない前提の設計です。

ただし、SDK の検証がこのコンポーネントに警告を出すかは、まだ確かめていません。アップロードの前に、SDK の検証の結果と、ビルドしたアバターの中身を確かめてください。〔要確認〕
