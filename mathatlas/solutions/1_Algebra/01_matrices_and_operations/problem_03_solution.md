# Problem Statement
Given the matrix sizes $A_{2\times3}$, $B_{3\times4}$, $C_{4\times2}$ and $D_{2\times2}$, decide whether $AB,BA,BC,CB,AC,CA,AD,DA$ exist. If a product exists, give its size.

## Theoretical Background and Concepts
For matrices $X_{m\times n}$ and $Y_{p\times q}$, the product $XY$ is defined **only when $n=p$** (the inside numbers match). The result has size $m\times q$ (the outside numbers). **Order matters**: $XY$ and $YX$ may behave differently.

## Detailed Step-by-Step Solution
**Step 1 — Compare the inside dimensions for each pair.**

| Product | Inside dimensions | Defined? | Result size |
|---|---|---|---|
| $AB$ | $3=3$ | Yes | $2\times4$ |
| $BA$ | $4\ne2$ | No | — |
| $BC$ | $4=4$ | Yes | $3\times2$ |
| $CB$ | $2\ne3$ | No | — |
| $AC$ | $3\ne4$ | No | — |
| $CA$ | $2=2$ | Yes | $4\times3$ |
| $AD$ | $3\ne2$ | No | — |
| $DA$ | $2=2$ | Yes | $2\times3$ |

**Step 2 — Read the outside dimensions.** For example, $A_{2\times3}B_{3\times4}$ produces a $2\times4$ matrix because the shared dimension $3$ is used up when multiplying.

**Step 3 — Summarize.** The defined products are $AB$ ($2\times4$), $BC$ ($3\times2$), $CA$ ($4\times3$) and $DA$ ($2\times3$). The other four products are undefined.

## Verification and Consistency Checks
Check the two reverse-order cases: $AB$ exists but $BA$ does not, because $3=3$ while $4\ne2$. Also, $CA$ exists ($2=2$), but $AC$ does not ($3\ne4$). This confirms why the order of multiplication matters.
