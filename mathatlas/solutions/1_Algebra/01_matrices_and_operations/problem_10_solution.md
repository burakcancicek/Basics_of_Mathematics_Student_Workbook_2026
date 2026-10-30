# Problem Statement

**Exercise 10: Columns of a Matrix Product.**

Given
$$A=\begin{pmatrix}1&2&0\\0&1&1\end{pmatrix},\qquad B=\begin{pmatrix}1&2\\-1&0\\3&1\end{pmatrix}.$$
Denote the columns of $B$ by $b_1,b_2$.

1. Compute $Ab_1$ and $Ab_2$.
2. Compute the matrix $AB$.
3. Compare the results and explain why the columns of $AB$ are exactly the vectors $Ab_1$ and $Ab_2$.

## Theoretical Background and Concepts

A matrix product is built column by column: the $j$th column of $AB$ equals $Ab_j$.

## Detailed Step-by-Step Solution

**Step 1 — Identify the method.** A matrix product is built column by column: the $j$th column of $AB$ equals $Ab_j$.

**Step 2 — Calculate and interpret.** $b_1=(1,-1,3)^T$, $b_2=(2,0,1)^T$. Hence $Ab_1=(-1,2)^T$ and $Ab_2=(2,1)^T$. Therefore $AB=\begin{pmatrix}-1&2\\2&1\end{pmatrix}$.

## Verification and Consistency Checks

Direct multiplication gives entries $1-2=-1$, $2$, $-1+3=2$, and $1$; they agree with the computed columns.
