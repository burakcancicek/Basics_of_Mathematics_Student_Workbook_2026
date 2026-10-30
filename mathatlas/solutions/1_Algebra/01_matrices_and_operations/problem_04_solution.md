# Problem Statement
For $A=\begin{pmatrix}1&2\\0&1\end{pmatrix}$ and $B=\begin{pmatrix}2&0\\3&1\end{pmatrix}$, calculate $AB$ and $BA$. Decide whether $AB=BA$ and explain noncommutativity.

## Theoretical Background and Concepts
To multiply matrices, take each **row of the first matrix** and each **column of the second matrix**. Multiply matching entries and add. For a $2\times2$ product, each result entry is a sum of two products. Unlike ordinary number multiplication, matrix multiplication is **not generally commutative**: changing the order can change the result.

## Detailed Step-by-Step Solution
**Step 1 — Calculate $AB$.** Both matrices are $2\times2$, so the product exists.
$$AB=\begin{pmatrix}1\cdot2+2\cdot3 & 1\cdot0+2\cdot1\\0\cdot2+1\cdot3 & 0\cdot0+1\cdot1\end{pmatrix}=\boxed{\begin{pmatrix}8&2\\3&1\end{pmatrix}}.$$

**Step 2 — Reverse the order and calculate $BA$.**
$$BA=\begin{pmatrix}2\cdot1+0\cdot0 & 2\cdot2+0\cdot1\\3\cdot1+1\cdot0 & 3\cdot2+1\cdot1\end{pmatrix}=\boxed{\begin{pmatrix}2&4\\3&7\end{pmatrix}}.$$

**Step 3 — Compare.** The upper-left entries differ: $(AB)_{11}=8$, whereas $(BA)_{11}=2$. Therefore $AB\ne BA$. This is a concrete example of noncommutativity.

## Verification and Consistency Checks
Check the upper-right entries independently: in $AB$, row 1 of $A$ dotted with column 2 of $B$ is $1(0)+2(1)=2$; in $BA$, row 1 of $B$ dotted with column 2 of $A$ is $2(2)+0(1)=4$. These unequal entries confirm $AB\ne BA$.
