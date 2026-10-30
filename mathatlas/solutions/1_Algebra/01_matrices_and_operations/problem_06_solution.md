# Problem Statement

**Exercise 6: Transpose.**

For
$$A=\begin{pmatrix}1&2&3\\4&5&6\end{pmatrix},\qquad B=\begin{pmatrix}1&0\\2&1\\-1&3\end{pmatrix}$$
compute $A^T$, $B^T$, and $AB$. Then verify in this example that
$$(AB)^T=B^TA^T.$$

## Theoretical Background and Concepts

Transposition swaps rows with columns. For compatible products, $(AB)^T=B^TA^T$.

## Detailed Step-by-Step Solution

**Step 1 — Identify the method.** Transposition swaps rows with columns. For compatible products, $(AB)^T=B^TA^T$.

**Step 2 — Calculate and interpret.** $A^T=\begin{pmatrix}1&4\\2&5\\3&6\end{pmatrix}$; $B^T=\begin{pmatrix}1&2&-1\\0&1&3\end{pmatrix}$. Multiply: $AB=\begin{pmatrix}2&11\\8&23\end{pmatrix}$. Thus $(AB)^T=\begin{pmatrix}2&8\\11&23\end{pmatrix}$. Directly, $B^TA^T=\begin{pmatrix}2&8\\11&23\end{pmatrix}$.

## Verification and Consistency Checks

Both sides are $2\\times2$ and have identical four entries.
