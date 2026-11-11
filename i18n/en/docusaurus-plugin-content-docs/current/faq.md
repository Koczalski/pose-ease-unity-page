---
title: FAQ
description: Answers to common questions.
---

## Does it work with Unity 6?

It has been tested with Unity 2022.3.22f1 and the Built-in Render Pipeline. Other versions have not been tested.

## Does the Rig Controller stay in an uploaded avatar?

The child object is tagged EditorOnly, so it is assumed to be left out of VRChat SDK builds. We have not yet checked whether the SDK's validation shows a warning for it.

## Does it connect to the internet?

The extension does not connect to external servers. The only runtime connection is to llama-server on the same PC at 127.0.0.1.

## Can I pose the fingers?

<span class="status-planned">Planned</span>. The finger slider will come after review.

## Are there operations that cannot be undone?

With mirroring and Apply Pose, bones such as the fingers may not return on Undo.

## Can I use the numbers for medical or workplace decisions?

No. The numbers are guides to load. The level boundaries are provisional values.

## Where should I report a problem?

We have not decided on a reporting channel yet.
