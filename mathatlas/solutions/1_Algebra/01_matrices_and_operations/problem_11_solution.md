# Problem Statement

**Exercise 11: When Do Matrices Commute?.**

Given
$$A=\begin{pmatrix}1&1\\0&1\end{pmatrix},\qquad B=\begin{pmatrix}a&b\\c&d\end{pmatrix}.$$
Find the conditions on $a,b,c,d$ under which $AB=BA$. Describe the general form of all such matrices $B$.

## Theoretical Background and Concepts

To commute means $AB=BA$; compare the four corresponding entries.

## Detailed Step-by-Step Solution

**Step 1 — Identify the method.** To commute means $AB=BA$; compare the four corresponding entries.

**Step 2 — Calculate and interpret.** $AB=\begin{pmatrix}a+c&b+d\\c&d\end{pmatrix}$ and $BA=\begin{pmatrix}a&a+b\\c&c+d\end{pmatrix}$. Equality forces $c=0$ and $d=a$. Thus $B=\begin{pmatrix}a&b\\0&a\end{pmatrix}$ with arbitrary $a,b$.

## Verification and Consistency Checks

Substitute $c=0,d=a$ into both products: each becomes $\begin{pmatrix}a&a+b\\0&a\end{pmatrix}$.
