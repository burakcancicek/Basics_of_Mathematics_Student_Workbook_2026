# Problem Statement

**Exercise 7: Identity Matrix, Zero Matrix, and Powers.**

For
$$A=\begin{pmatrix}2&1\\0&2\end{pmatrix}$$
compute
$$AI,\qquad IA,\qquad A+0,\qquad A^2,\qquad A^3.$$
Explain the roles of the matrices $I$ and $0$, and describe the pattern you observe in successive powers of $A$.

## Theoretical Background and Concepts

$I$ is the multiplicative identity and $0$ is the additive identity.

## Detailed Step-by-Step Solution

**Step 1 — Identify the method.** $I$ is the multiplicative identity and $0$ is the additive identity.

**Step 2 — Calculate and interpret.** $AI=IA=A$, $A+0=A$. $A^2=\begin{pmatrix}4&4\\0&4\end{pmatrix}$, $A^3=\begin{pmatrix}8&12\\0&8\end{pmatrix}$. In general $A^n=\begin{pmatrix}2^n&n2^{n-1}\\0&2^n\end{pmatrix}$ for $n\ge1$.

## Verification and Consistency Checks

For $n=1,2,3$ the formula reproduces the direct products. Multiplying the claimed $A^n$ by $A$ gives upper-right $(n+1)2^n$.
