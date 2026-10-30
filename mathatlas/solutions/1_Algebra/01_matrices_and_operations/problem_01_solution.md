# Problem Statement
Given $A=\begin{pmatrix}2&-1&3\\0&4&5\end{pmatrix}$ and $B=\begin{pmatrix}1&0\\-2&3\\4&1\end{pmatrix}$, determine their sizes, $a_{12},a_{23},b_{21},b_{32}$, the second row of $A$, and the first column of $B$.

## Theoretical Background and Concepts
The size of a matrix is **rows × columns**. The entry $a_{ij}$ is at **row $i$, column $j$** (counting from 1).

## Detailed Step-by-Step Solution
**Step 1 — Count rows and columns.** $A$ has 2 rows and 3 columns, so its size is $2\times3$. $B$ has 3 rows and 2 columns, so its size is $3\times2$.

**Step 2 — Find each entry by row and column.**
$$a_{12}=-1,\quad a_{23}=5,\quad b_{21}=-2,\quad b_{32}=1.$$

**Step 3 — Extract the requested row and column.**
The second row of $A$ is $(0,4,5)$. The first column of $B$ is $\begin{pmatrix}1\\-2\\4\end{pmatrix}$.

## Verification and Consistency Checks
Row 1 of $A$ is $(2,-1,3)$, so its second entry is indeed $-1$. Row 3 of $B$ is $(4,1)$, so its second entry is $1$. The extracted row and column both have 3 entries, as expected.
