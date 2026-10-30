# Problem Statement

**Exercise 13: Do Four Points Lie in One Plane?.**

Given
$$A=(0,0,0),\qquad B=(1,2,0),\qquad C=(0,1,1),\qquad D=(2,5,1).$$

1. Construct $\overrightarrow{AB}$ and $\overrightarrow{AC}$.
2. Find $n=\overrightarrow{AB}\times\overrightarrow{AC}$.
3. Construct $\overrightarrow{AD}$ and check whether $\overrightarrow{AD}\cdot n=0$.
4. Based on this, decide whether $D$ lies in the plane determined by $A,B,C$, and justify the criterion.

## Theoretical Background and Concepts

Four points are coplanar if the fourth point's displacement is perpendicular to the first three points' normal.

## Detailed Step-by-Step Solution

**Step 1 — Identify the method.** Four points are coplanar if the fourth point's displacement is perpendicular to the first three points' normal.

**Step 2 — Calculate and interpret.** $AB=(1,2,0)$, $AC=(0,1,1)$, so $n=AB\times AC=(2,-1,1)$. $AD=(2,5,1)$, hence $AD\cdot n=4-5+1=0$. All four points are coplanar.

## Verification and Consistency Checks

$n\cdot AB=2-2=0$ and $n\cdot AC=-1+1=0$, confirming the normal. $AD\cdot n=0$ confirms $D$ is in that plane.
