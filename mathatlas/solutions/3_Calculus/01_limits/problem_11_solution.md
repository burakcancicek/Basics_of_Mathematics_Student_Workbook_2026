# Problem Statement

**Exercise 11: An n-th Root.**

Compute
$$\lim_{n\to\infty}\sqrt[n]{5^n+2^n}.$$
Explain which term dominates and why the transformation looks different from the case of a quotient of polynomials.

## Theoretical Background and Concepts

Factor out the dominant exponential $5^n$.

## Detailed Step-by-Step Solution

**Step 1 — Identify the method.** Factor out the dominant exponential $5^n$.

**Step 2 — Calculate and interpret.** $(5^n+2^n)^{1/n}=5(1+(2/5)^n)^{1/n}\to5$ because $(2/5)^n\to0$ and the remaining factor tends to 1.

## Verification and Consistency Checks

The expression is at least 5 and at most $5\,2^{1/n}$; both bounds tend to 5 (squeeze theorem).
