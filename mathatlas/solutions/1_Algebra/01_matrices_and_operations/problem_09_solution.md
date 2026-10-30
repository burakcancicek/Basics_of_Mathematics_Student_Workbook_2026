# Problem Statement

**Exercise 9: Composing Transformations.**

Let
$$S=\begin{pmatrix}2&0\\0&1\end{pmatrix},\qquad R=\begin{pmatrix}0&-1\\1&0\end{pmatrix}.$$
The matrix $S$ describes nonuniform scaling, while $R$ describes a $90^\circ$ counterclockwise rotation.
For
$$x=\begin{pmatrix}1\\2\end{pmatrix}$$
compute $RSx$ and $SRx$. Compare the results and explain geometrically why the order of these transformations matters.

## Theoretical Background and Concepts

The rightmost transformation acts first; scaling and rotation need not commute.

## Detailed Step-by-Step Solution

**Step 1 — Identify the method.** The rightmost transformation acts first; scaling and rotation need not commute.

**Step 2 — Calculate and interpret.** $Sx=(2,2)^T$, so $RSx=(-2,2)^T$. Also $Rx=(-2,1)^T$, so $SRx=(-4,1)^T$.

## Verification and Consistency Checks

Check $R(a,b)=(-b,a)$ and $S(a,b)=(2a,b)$. Applying these maps in either order reproduces the two results, which differ.
