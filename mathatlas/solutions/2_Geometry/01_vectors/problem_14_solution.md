# Problem Statement

**Exercise 14: Closest Point on a Line.**

Given a point $P=(4,1)$ and a line through the origin with direction $v=(1,2)$. Using projection, find the closest point on the line, the distance from $P$ to the line, and verify that the appropriate vector is perpendicular to the direction of the line.

## Theoretical Background and Concepts

The closest point on a line through the origin is the orthogonal projection.

## Detailed Step-by-Step Solution

**Step 1 — Identify the method.** The closest point on a line through the origin is the orthogonal projection.

**Step 2 — Calculate and interpret.** $P\cdot v=6$, $v\cdot v=5$. Closest point $Q=(6/5,12/5)$. Residual $P-Q=(14/5,-7/5)$. Distance $\|P-Q\|=\sqrt{245}/5=7/\sqrt5$.

## Verification and Consistency Checks

$(14/5,-7/5)\cdot(1,2)=14/5-14/5=0$.
