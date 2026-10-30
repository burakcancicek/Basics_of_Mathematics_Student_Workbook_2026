# Problem Statement

**Exercise 7: Linear Dependence Without Heavy Computation.**

Given
$$u=(1,2,3),\qquad v=(2,4,6),\qquad w=(0,1,1).$$
Identify a specific relation between $u$ and $v$, decide whether the three vectors can be linearly independent, and explain why no long calculation is needed.

## Theoretical Background and Concepts

If one vector is a multiple of another, the whole collection is linearly dependent.

## Detailed Step-by-Step Solution

**Step 1 — Identify the method.** If one vector is a multiple of another, the whole collection is linearly dependent.

**Step 2 — Calculate and interpret.** $v=(2,4,6)=2(1,2,3)=2u$. Thus $2u-v+0w=0$ with nonzero coefficients, so $u,v,w$ are dependent.

## Verification and Consistency Checks

Check $2u-v=(2,4,6)-(2,4,6)=(0,0,0)$.
