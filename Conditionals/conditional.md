## **What I Learned:**

- **The order of conditional checks matters!** Bad placement creates messy/wrong results
- Need separate variables for separate concerns (e.g., `prevValue` for the count, `isLocked` for the status)
- `start` parameter initializes the closure's private state
- Check for `undefined` early to avoid `NaN` bugs
- Use `>=` instead of `>` when you want to include zero

Logical Operator

```
&& 	AND 	(x < 10 && y > 1) is true
|| 	OR 	(x === 5 || y === 5) is false
! 	NOT 	!(x === y) is true
```
