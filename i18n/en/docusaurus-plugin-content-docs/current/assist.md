---
title: Assist (analysis)
description: A feature in the Pose Controller window for building a pose while watching its load and the estimated support.
---

Assist is a feature in the Pose Controller window. It shows the load of the current pose while you build it. It uses the same calculation as Comfort Analysis.

## Status

| Feature | Status |
| --- | --- |
| Load markers on joints, with numbers | Available |
| Estimated support and ground offset | Available |
| List of the highest-load joints (top 5) | Available |
| Slider that moves the pose toward a lower-load pose | <span class="status-planned">Planned</span> |
| Muscle activity for a selected limb | <span class="status-planned">Planned</span> |
| Updating the display while dragging | <span class="status-planned">Planned (after measurement and review)</span> |

## How to use it

1. In the **Assist (analysis)** section of the Pose Controller window, turn on the option. It is off by default.
2. Enter the body size: height, weight, and sex. The defaults are 1.60 m, 50 kg, and female. This body size is kept separately from Comfort Analysis.
3. Move the pose. The analysis runs once, when you release the drag. It also runs after Undo and Redo.

## What the display means

- **Joint markers**: Show the load ratio in color, from white to magenta, over the range 0 to 50%. Joints with high loads show a number.
- **Estimated support**: When no floor or object surface supports the body, for example when sitting on nothing, the tool estimates a supporting surface and shows it. The estimated support is listed separately from the result.
- **Ground offset**: The vertical distance the analysis moved the body to meet the floor. A note appears above 1 cm.
- **Bone reproduction error**: The gap between the analysis model's body and the Rig Controller's bone positions. Above 3 cm, it is treated as a reference value only.

## Notes

- Analysis runs only when you release the drag. The numbers do not change while you drag.
- The numbers depend on assumptions: the body size and the level boundaries. Do not use them for medical or workplace decisions.
- The body is assumed to be upright. If the root is strongly tilted, the analysis does not run and the reason is shown.
