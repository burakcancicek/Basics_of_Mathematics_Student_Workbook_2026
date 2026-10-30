# Problem Statement
Let $A=\begin{pmatrix}2&-1\\1&3\end{pmatrix}$ and $x=\begin{pmatrix}4\\2\end{pmatrix}$. Compute $Ax$ and express it as a linear combination of the columns of $A$ with coefficients from $x$.

## Theoretical Background and Concepts
A matrix times a column vector produces a new vector. Multiply each **row of the matrix** by the vector entry-by-entry, then add. Equivalently, if the columns of $A$ are $a_1,a_2$ and $x=(x_1,x_2)^T$, then $Ax=x_1a_1+x_2a_2$.

## Detailed Step-by-Step Solution
**Step 1 — Multiply each row by the vector.**
$$Ax=\begin{pmatrix}2(4)+(-1)(2)\\1(4)+3(2)\end{pmatrix}=\begin{pmatrix}8-2\\4+6\end{pmatrix}=\boxed{\begin{pmatrix}6\\10\end{pmatrix}}.$$

**Step 2 — Identify the columns.**
$$a_1=\begin{pmatrix}2\\1\end{pmatrix},\qquad a_2=\begin{pmatrix}-1\\3\end{pmatrix}.$$

**Step 3 — Use the vector entries as weights.**
$$Ax=4a_1+2a_2=4\begin{pmatrix}2\\1\end{pmatrix}+2\begin{pmatrix}-1\\3\end{pmatrix}=\begin{pmatrix}8\\4\end{pmatrix}+\begin{pmatrix}-2\\6\end{pmatrix}=\boxed{\begin{pmatrix}6\\10\end{pmatrix}}.$$

## Verification and Consistency Checks
The row-by-row calculation and the column-combination calculation both give $(6,10)^T$. The sizes also agree: a $2\times2$ matrix times a $2\times1$ vector must produce a $2\times1$ vector.
