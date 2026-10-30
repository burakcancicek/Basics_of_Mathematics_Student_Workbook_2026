# Problem Statement

**Exercise 11: Plane Containing a Line and a Point.**

Find the equation of the plane containing
$$(x,y,z)=(1,0,2)+t(1,1,-1)$$
and the point $P=(0,2,1)$. Check that both the entire line and the point lie in the plane you obtain.

## Theoretical Background and Concepts

A plane through a line and an extra point contains two directions: the line direction and the displacement to that point.

## Detailed Step-by-Step Solution

**Step 1 — Identify the method.** A plane through a line and an extra point contains two directions: the line direction and the displacement to that point.

**Step 2 — Calculate and interpret.** Line base $p=(1,0,2)$, direction $v=(1,1,-1)$. To $P=(0,2,1)$, $w=P-p=(-1,2,-1)$. Cross $v\times w=(1,2,3)$. Plane $(x-1)+2y+3(z-2)=0$, i.e. $x+2y+3z=7$.

## Verification and Consistency Checks

At $P$: $0+4+3=7$. On line: $(1+t)+2t+3(2-t)=7$ for all $t$.
