# Problem Statement

**Exercise 8: Row Operations and Their Reversibility.**

For
$$A=\begin{pmatrix}1&2&-1\\2&4&1\\-1&1&3\end{pmatrix}$$
perform, in order:
1. $R_2\leftarrow R_2-2R_1$,
2. $R_3\leftarrow R_3+R_1$,
3. interchange $R_2$ and $R_3$.

Write the matrix after each step. Then, for each of the three operations, state an operation that reverses it.

## Theoretical Background and Concepts

An elementary row operation changes one row using another; each operation is reversible.

## Detailed Step-by-Step Solution

**Step 1 — Identify the method.** An elementary row operation changes one row using another; each operation is reversible.

**Step 2 — Calculate and interpret.** Initially $\begin{pmatrix}1&2&-1\\2&4&1\\-1&1&3\end{pmatrix}$. After $R_2\leftarrow R_2-2R_1$: $\begin{pmatrix}1&2&-1\\0&0&3\\-1&1&3\end{pmatrix}$. After $R_3\leftarrow R_3+R_1$: $\begin{pmatrix}1&2&-1\\0&0&3\\0&3&2\end{pmatrix}$. After swapping rows 2 and 3: $\begin{pmatrix}1&2&-1\\0&3&2\\0&0&3\end{pmatrix}$.

## Verification and Consistency Checks

Undo in reverse order: swap rows 2 and 3; subtract row 1 from row 3; add twice row 1 to row 2. This restores the original.
