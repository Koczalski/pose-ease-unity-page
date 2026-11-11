---
title: Installing on an avatar
description: How to install the Rig Controller on an avatar, and what it means for upload.
---

The Rig Controller can be installed under the avatar's root as a child object. After installation, selecting the avatar shows the Rig Controller without opening the Pose Controller.

## How to install

Use one of these:

1. In the Hierarchy, right-click and choose **GameObject > IKFK > Add Rig Controller**.
2. From the Animator's menu (CONTEXT) in the Inspector, choose **Add IKFK Rig Controller**.
3. Press **Install on avatar** in the Pose Controller window.

## What gets installed

- One child object named **IKFK Rig Controller** is created under the root.
- The child has the component **IKFKRigController**. It stores only a marker, a reference to the Animator, and the FK/IK state of each limb.
- It does not store IK target or pole positions. They are built from the current bones each time you use the Rig Controller, so old positions do not linger.

## How the root is chosen

The tool follows parents from the selected object to find the Humanoid root. An object with an Avatar Descriptor is preferred.

In these cases nothing is installed, and the reason is shown:

- A Prefab asset (the file in the project itself)
- An object that is not Humanoid

Installing twice on the same root does not add a second child. One Undo step reverts an installation.

## Effect on upload

The child object is tagged **EditorOnly**. The design assumes VRChat SDK builds leave EditorOnly objects out.

We have not yet checked whether the SDK's validation warns about this component. Before you upload, check the SDK's validation result and the contents of the built avatar. 〔要確認〕

## Screenshots

![Handles hide when deselected and come back when you select the avatar again.](/img/screens/module-reselect.png)

*Handles hide when deselected and come back when you select the avatar again.*


:::note About the images
The avatar in the screenshots is the "Nayu" 3D model by Mito Arisaka (https://www.arisakamito.com/).
:::
