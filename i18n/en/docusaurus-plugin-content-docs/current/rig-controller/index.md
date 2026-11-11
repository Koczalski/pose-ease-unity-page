---
title: Rig Controller
description: The types of Rig Controller handles and how to operate them in the Scene view.
---

The Rig Controller moves the avatar's joints with handles in the Scene view. It appears for the avatar you select in the Pose Controller window.

![Schematic of Rig Controller shapes: an FK ring, an IK box, a pole diamond, and a Root ring](/img/controllers.svg)

## Types and appearance

| Type | Shape | Role | How to operate |
| --- | --- | --- | --- |
| FK | A thin ring around a bone's axis | Sets a joint's rotation directly | Select it, then rotate with the rotation gizmo |
| IK | A box made of 12 edges | Sets the position of a hand or foot | Drag directly |
| Pole | A diamond and a solid line to the elbow or knee | In IK, sets the direction of the elbow or knee | Drag directly |
| Root | An unfilled ring with four arrows | Sets the position of the whole body | Drag directly |

Left handles are blue, right handles are red, and the center is yellow.

## Operation

- **Click**: Selects the handle. Clicking empty space clears the selection. An installed Rig Controller disappears when the selection is cleared, and appears again when you select the avatar.
- **Drag**: IK, pole, and Root handles can be dragged on a plane facing the camera.
- **Shift while dragging**: Constrains the motion to the larger of the vertical or horizontal direction.
- **FK rotation**: Select the FK ring, then rotate it with the rotation gizmo. The gizmo follows Unity's Pivot Rotation setting (Local or Global).
- **Undo**: One drag is one Undo step. Ctrl+Z reverts it.

## Next

- [Display settings and View Preset](./rig-controller/display)
- [IK/FK switching and mirroring](./rig-controller/ik-fk-mirror)
