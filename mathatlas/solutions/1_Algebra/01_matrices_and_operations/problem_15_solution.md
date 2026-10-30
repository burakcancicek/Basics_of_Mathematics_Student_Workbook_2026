# Problem Statement

**Exercise 15: Associativity of Multiplication and Different Calculation Paths.**

Given
$$A=\begin{pmatrix}1&2&0\\0&1&1\end{pmatrix},\quad B=\begin{pmatrix}1&0\\2&1\\-1&3\end{pmatrix},\quad C=\begin{pmatrix}2&1\\0&-1\end{pmatrix}.$$
Compute $(AB)C$ and $A(BC)$. Compare the results and the number of intermediate operations. Explain what associativity of matrix multiplication means in this example.

## Theoretical Background and Concepts

Associativity states $(AB)C=A(BC)$ whenever dimensions are compatible.

## Detailed Step-by-Step Solution

**Step 1 — Identify the method.** Associativity states $(AB)C=A(BC)$ whenever dimensions are compatible.

**Step 2 — Calculate and interpret.** $AB=\begin{pmatrix}5&2\\1&4\end{pmatrix}$; hence $(AB)C=\begin{pmatrix}10&3\\2&-3\end{pmatrix}$. Also $BC=\begin{pmatrix}2&1\\4&1\\-2&-4\end{pmatrix}$; hence $A(BC)=\begin{pmatrix}10&3\\2&-3\end{pmatrix}$.

## Verification and Consistency Checks

The two independently computed $2\\times2$ outputs match entry by entry. The first path uses 20 scalar multiplications (12+8); the second uses 24 (12+12), so associativity can change computational cost.
