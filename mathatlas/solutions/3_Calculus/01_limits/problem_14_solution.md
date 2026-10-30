# Problem Statement

**Exercise 14: A $0/0$ Limit with Trigonometry.**

Compute
$$\lim_{x\to0}\frac{1-\cos x}{x^2}.$$
Justify the result without using l'Hôpital's rule, using a trigonometric identity and the fundamental limit.

## Theoretical Background and Concepts

Use the identity $1-\cos x=2\sin^2(x/2)$.

## Detailed Step-by-Step Solution

**Step 1 — Identify the method.** Use the identity $1-\cos x=2\sin^2(x/2)$.

**Step 2 — Calculate and interpret.** $\frac{1-\cos x}{x^2}=\frac{2\sin^2(x/2)}{x^2}=\frac12\left(\frac{\sin(x/2)}{x/2}\right)^2\to\frac12$.

## Verification and Consistency Checks

The squared factor tends to $1^2$, and the constant factor is $1/2$; no l'Hôpital rule is needed.
