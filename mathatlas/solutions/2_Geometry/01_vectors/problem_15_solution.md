# Problem Statement

**Exercise 15: Comparing Directions Using the Cosine of the Angle.**

Given
$$a=(1,2,1),\qquad b=(2,4,2),\qquad c=(2,0,3).$$
For each pair, compute
$$\frac{u\cdot v}{\|u\|\,\|v\|}.$$
Order the pairs by increasing angle between the vectors. Explain why for $a$ and $b$ the value is $1$ even though the vectors have different lengths.

## Theoretical Background and Concepts

Cosine similarity equals dot product divided by the product of lengths; larger cosine means smaller angle on $[0,\pi]$.

## Detailed Step-by-Step Solution

**Step 1 — Identify the method.** Cosine similarity equals dot product divided by the product of lengths; larger cosine means smaller angle on $[0,\pi]$.

**Step 2 — Calculate and interpret.** $\|a\|=\sqrt6$, $\|b\|=2\sqrt6$, $\|c\|=\sqrt{13}$. $\cos(a,b)=1$. $a\cdot c=5$, so $\cos(a,c)=5/\sqrt{78}$. Since $b=2a$, $\cos(b,c)=5/\sqrt{78}$. Increasing angles: $(a,b)$ first (0°), then $(a,c)$ and $(b,c)$ tied (about 55.5°).

## Verification and Consistency Checks

The normalized dot product is unchanged under positive scaling, explaining why $a$ and $b$ have cosine 1 despite different lengths.
