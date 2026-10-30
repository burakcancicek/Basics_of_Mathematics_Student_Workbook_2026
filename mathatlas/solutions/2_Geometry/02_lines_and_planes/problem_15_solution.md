# Problem Statement

**Exercise 15: Complete Classification of a Line Relative to a Plane.**

Let
$$L:p+tv,\qquad \Pi:n\cdot x=d.$$
State the conditions distinguishing the three cases: one intersection point, parallel with no common points, and the line contained in the plane. Then illustrate each case with your own simple numerical example.

## Theoretical Background and Concepts

For line $x=p+tv$ and plane $n\cdot x=d$, solve $n\cdot p+t(n\cdot v)=d$.

## Detailed Step-by-Step Solution

**Step 1 — Identify the method.** For line $x=p+tv$ and plane $n\cdot x=d$, solve $n\cdot p+t(n\cdot v)=d$.

**Step 2 — Calculate and interpret.** If $n\cdot v\ne0$, one intersection occurs at $t=(d-n\cdot p)/(n\cdot v)$: example $p=(0,0,1)$, $v=(0,0,-1)$, plane $z=0$ gives $t=1$. If $n\cdot v=0$ and $n\cdot p\ne d$, no intersection: $p=(0,0,1)$, $v=(1,0,0)$, plane $z=0$. If $n\cdot v=0$ and $n\cdot p=d$, line lies in plane: $p=(0,0,0)$, $v=(1,0,0)$, plane $z=0$.

## Verification and Consistency Checks

Substituting the three example lines into $z=0$ yields respectively $1-t=0$, $1=0$ (impossible), and $0=0$ (always true).
