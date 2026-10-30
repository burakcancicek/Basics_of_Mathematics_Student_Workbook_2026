# Problem Statement

**Exercise 12: Formula for a Matrix Power.**

Let
$$A=\begin{pmatrix}1&1\\0&1\end{pmatrix}.$$
Compute $A^2$, $A^3$, and $A^4$, and use them to formulate a conjecture for $A^n$. Then do not stop after checking one more case: assume the formula is true for $n$, multiply by $A$, and explain why you obtain exactly the formula for $n+1$.

## Theoretical Background and Concepts

Mathematical induction proves a pattern for every positive integer.

## Detailed Step-by-Step Solution

**Step 1 — Identify the method.** Mathematical induction proves a pattern for every positive integer.

**Step 2 — Calculate and interpret.** $A^2=\begin{pmatrix}1&2\\0&1\end{pmatrix}$, $A^3=\begin{pmatrix}1&3\\0&1\end{pmatrix}$, $A^4=\begin{pmatrix}1&4\\0&1\end{pmatrix}$. Claim $A^n=\begin{pmatrix}1&n\\0&1\end{pmatrix}$. Base $n=1$ holds. If it holds for $n$, then $A^{n+1}=A^nA=\begin{pmatrix}1&n+1\\0&1\end{pmatrix}$.

## Verification and Consistency Checks

The base case and induction step together establish the formula for every $n\ge1$.
