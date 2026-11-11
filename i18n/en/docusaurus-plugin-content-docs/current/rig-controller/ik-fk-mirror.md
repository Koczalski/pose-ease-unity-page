---
title: IK/FK switching and mirroring
description: Switching IK and FK per limb, the pole direction, and left-right mirroring.
---

## Switching IK and FK

Each hand and foot can be set to IK or FK. Switching keeps the current pose. One Undo step reverts a switch.

- **IK**: Moves the box at the hand or foot to set the body shape.
- **FK**: Uses the joint angles directly.

**IK Weight**, in the details section, sets how strongly IK applies. At 0, the pose returns to the FK pose it had before IK.

## Pole direction

The pole sets the direction of the elbow or knee for a limb in IK. When the arm is straight, the elbow points backward. When the leg is straight, the knee points forward. The direction comes from the body's facing direction.

## Mirroring

- **Mirror**: Flips the whole body left to right.
- **L → R**: Copies the left half of the pose to the right half.
- **R → L**: Copies the right half of the pose to the left half.

Mirroring works on Unity's Humanoid muscle values, not joint angles, so differences in bone direction matter less.

## Known limits

- With mirroring and Apply Pose, bones such as the fingers may not return on Undo.

## Screenshots

![The Details (IK Weight) foldout.](/img/screens/window-detail.png)

*The Details (IK Weight) foldout.*

![After mirroring the whole pose.](/img/screens/mirror.png)

*After mirroring the whole pose.*


:::note About the images
The avatar in the screenshots is the "Nayu" 3D model by Mito Arisaka (https://www.arisakamito.com/).
:::
