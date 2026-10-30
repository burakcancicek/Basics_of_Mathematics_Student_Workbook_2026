# Problem Statement

**Exercise 10: Projection of a Point onto a Plane.**

Find the orthogonal projection of $P=(2,1,3)$ onto the plane $x+y+z=3$, and then find the reflection of $P$ across this plane. Check that the midpoint of the segment joining the point and its reflection lies on the plane.

## Theoretical Background and Concepts

Orthogonal projection subtracts the normal component; reflection subtracts it twice.

## Detailed Step-by-Step Solution

**Step 1 — Identify the method.** Orthogonal projection subtracts the normal component; reflection subtracts it twice.

**Step 2 — Calculate and interpret.** Plane $n=(1,1,1)$, $d=3$. For $P=(2,1,3)$, $n\cdot P-d=3$, $\|n\|^2=3$. Projection $Q=P-n=(1,0,2)$. Reflection $P'=P-2n=(0,-1,1)$.

## Verification and Consistency Checks

$Q$ lies on plane: $1+0+2=3$. Midpoint $(P+P')/2=(1,0,2)=Q$.
