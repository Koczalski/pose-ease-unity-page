---
title: Introduction
slug: /
description: pose-ease-unity is a Unity editor extension for posing VRChat avatars and checking the load on the body.
---

pose-ease-unity is a Unity editor extension for posing Humanoid avatars for VRChat. You pose the avatar by dragging the Rig Controller in the Scene view. Comfort Analysis then shows, as numbers, how much load the pose puts on the joints.

## What it does

- **Rig Controller**: Move the arms, legs, and torso with control handles in the Scene view. Each limb can switch between IK and FK, and you can mirror the pose left to right.
- **Installing on an avatar**: Add one control component to an avatar. After that, selecting the avatar shows the Rig Controller.
- **Comfort Analysis**: Calculates the load ratio of each joint for the current pose.
- **Assist (analysis)**: Shows the load and the estimated support in the Pose Controller window.

<span class="status-planned">Planned:</span> finger controls, a slider that moves the pose toward a comfortable one, and muscle activity for a selected limb. Each page shows the status.

## Requirements

- Unity 2022.3.22f1 (Built-in Render Pipeline)
- A Humanoid avatar (with an Animator and an Avatar)
- Other Unity versions and render pipelines have not been tested.

## How to read these docs

If this is your first time, read Install and then Quick start. The sources and assumptions behind the numbers are written on each page.

## Screenshots

![The Rig Controller handles (front view). FK rings, IK boxes, and the camera-facing Root ring with arrows.](/img/screens/controllers-front.png)

*The Rig Controller handles (front view). FK rings, IK boxes, and the camera-facing Root ring with arrows.*

![Always-on labels: placed outside the body and linked to each handle.](/img/screens/labels-always.png)

*Always-on labels: placed outside the body and linked to each handle.*


:::note About the images
The avatar in the screenshots is the "Nayu" 3D model by Mito Arisaka (https://www.arisakamito.com/).
:::
