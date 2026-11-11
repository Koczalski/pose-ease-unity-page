---
title: Quick start
description: Install the Rig Controller on an avatar, pose it, and save the pose.
---

This page covers installing the Rig Controller on an avatar, posing it, and saving the result.

## 1. Install on the avatar

1. In the Hierarchy, select an object of the avatar. The tool follows parents from the selected object to find the Humanoid root.
2. Right-click and choose **GameObject > IKFK > Add Rig Controller**.

An object named **IKFK Rig Controller** is added under the root. An avatar gets only one. See [Installing on an avatar](./avatar-install).

## 2. Pose the avatar

1. Select the avatar. The Rig Controller appears in the Scene view.
2. Drag the box at a hand or foot (IK) to set its position.
3. To rotate only a joint, select its FK ring and turn it with the rotation gizmo.
4. Each limb can switch between IK and FK. The pose stays the same when you switch.

## 3. Save

In the Pose Controller window (**Tools > IKFKController > Pose Controller**), press **Save Pose + Clip** to save the pose and an animation clip.

## 4. Check the load

In the **Assist (analysis)** section of the Pose Controller window, turn on the option to see the load of the current pose. See [Assist (analysis)](./assist).
