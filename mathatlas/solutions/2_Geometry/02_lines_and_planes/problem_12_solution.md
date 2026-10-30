# Problem Statement

**Exercise 12: Intersection Line of Two Planes.**

Find a parametric equation of the line that is the intersection of
$$x+y+z=3,\qquad x-y+z=1.$$
Find its direction vector in two ways: from the system of equations and from the cross product of the normal vectors. Compare the results.

## Theoretical Background and Concepts

Intersect two planes by solving their equations simultaneously; their normals' cross product gives a direction.

## Detailed Step-by-Step Solution

**Step 1 — Identify the method.** Intersect two planes by solving their equations simultaneously; their normals' cross product gives a direction.

**Step 2 — Calculate and interpret.** Subtract equations: $(x+y+z)-(x-y+z)=3-1$, so $2y=2$ and $y=1$. Then $x+z=2$. Set $z=t$: $(x,y,z)=(2-t,1,t)=(2,1,0)+t(-1,0,1)$. Normals $(1,1,1)$ and $(1,-1,1)$ have cross product $(2,0,-2)$, parallel to $(-1,0,1)$.

## Verification and Consistency Checks

Substitution into both planes gives $3$ and $1$. Dotting the direction with both normals gives zero.
