# Problem Statement

**Exercise 13: A Recurrence Written in Matrix Form.**

Let
$$F=\begin{pmatrix}1&1\\1&0\end{pmatrix}.$$
Compute $F^2$, $F^3$, $F^4$, and $F^5$. Compare the numbers obtained with the sequence
$$0,1,1,2,3,5,8,\ldots$$
and describe the relationship you observe. Then compute
$$F\begin{pmatrix}a\\b\end{pmatrix}$$
and explain how this multiplication performs one recurrence step: it creates the sum of two consecutive terms and keeps one of them for the next step.

## Theoretical Background and Concepts

The Fibonacci recurrence is $F_{k+1}=F_k+F_{k-1}$.

## Detailed Step-by-Step Solution

**Step 1 — Identify the method.** The Fibonacci recurrence is $F_{k+1}=F_k+F_{k-1}$.

**Step 2 — Calculate and interpret.** $F^2=\begin{pmatrix}2&1\\1&1\end{pmatrix}$, $F^3=\begin{pmatrix}3&2\\2&1\end{pmatrix}$, $F^4=\begin{pmatrix}5&3\\3&2\end{pmatrix}$, $F^5=\begin{pmatrix}8&5\\5&3\end{pmatrix}$. Generally $F^n=\begin{pmatrix}F_{n+1}&F_n\\F_n&F_{n-1}\end{pmatrix}$. Also $F(a,b)^T=(a+b,a)^T$.

## Verification and Consistency Checks

Multiplying $F^4$ by $F$ gives $F^5$; the new entries are sums of the two preceding Fibonacci numbers.
