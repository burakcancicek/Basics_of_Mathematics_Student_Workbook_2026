# Problem Statement
For $A=\begin{pmatrix}1&2\\-1&3\end{pmatrix}$ and $B=\begin{pmatrix}4&-2\\0&5\end{pmatrix}$, compute $A+B$, $A-B$, and $3A-2B$. Explain when addition is allowed.

## Theoretical Background and Concepts
We add and subtract matrices **position by position**, only when their sizes match. Multiplying a matrix by a number multiplies every entry.

## Detailed Step-by-Step Solution
**Step 1 — Check sizes.** Both are $2\times2$, so addition and subtraction are defined.

**Step 2 — Add matching entries.**
$$A+B=\begin{pmatrix}1+4&2+(-2)\\-1+0&3+5\end{pmatrix}=\boxed{\begin{pmatrix}5&0\\-1&8\end{pmatrix}}.$$

**Step 3 — Subtract matching entries.**
$$A-B=\begin{pmatrix}1-4&2-(-2)\\-1-0&3-5\end{pmatrix}=\boxed{\begin{pmatrix}-3&4\\-1&-2\end{pmatrix}}.$$

**Step 4 — Multiply first, then subtract.**
$$3A=\begin{pmatrix}3&6\\-3&9\end{pmatrix},\quad 2B=\begin{pmatrix}8&-4\\0&10\end{pmatrix}.$$
$$3A-2B=\boxed{\begin{pmatrix}-5&10\\-3&-1\end{pmatrix}}.$$

## Verification and Consistency Checks
$(A+B)-B=A$: for instance the upper-right entry is $0-(-2)=2$, matching $A$. Also $(3A-2B)+2B=3A$: the upper-left entry is $-5+8=3$. All outputs are $2\times2$.
