# Problem Statement

**Exercise 14: Rotation Matrices.**

The matrix for a rotation through an angle $\theta$ is
$$R(\theta)=\begin{pmatrix}\cos\theta&-\sin\theta\\\sin\theta&\cos\theta\end{pmatrix}.$$
Compute $R(\alpha)R(\beta)$ and, using the angle-sum formulas for sine and cosine, show that
$$R(\alpha)R(\beta)=R(\alpha+\beta).$$
Explain the result geometrically.

## Theoretical Background and Concepts

Use the angle addition identities for sine and cosine.

## Detailed Step-by-Step Solution

**Step 1 — Identify the method.** Use the angle addition identities for sine and cosine.

**Step 2 — Calculate and interpret.** $R(\alpha)R(\beta)=\begin{pmatrix}\cos\alpha\cos\beta-\sin\alpha\sin\beta&-(\cos\alpha\sin\beta+\sin\alpha\cos\beta)\\\sin\alpha\cos\beta+\cos\alpha\sin\beta&\cos\alpha\cos\beta-\sin\alpha\sin\beta\end{pmatrix}=R(\alpha+\beta)$.

## Verification and Consistency Checks

For $\alpha=\beta=\pi/2$, the product is $-I=R(\pi)$, as expected for two quarter-turns.
