`Shallow copy`
A shallow copy duplicates the container, not the things inside it.

example

```js
const original = [{ name: "Alice" }, { name: "Bob" }];

const shallowCopy = original.slice(); // or [...original]
```

At this point:

original !== shallowCopy ✅ (different arrays)

BUT the objects inside are the same references ❌

Now watch this carefully:

```js
shallowCopy[0].name = "Eve";

console.log(original[0].name); // "Eve"
```

Why did the original change?

Because this happened:

```js
original[0] ─┐
├──> { name: "Eve" }
shallowCopy[0]┘
```

Both arrays point to the same object in memory.

That’s a shallow copy.

`Deep Copy`
A deep copy duplicates everything, all the way down.

To make a deep copy, you must create new objects:

```js
const original = [{ name: "Alice" }, { name: "Bob" }];

const deepCopy = original.map((item) => {
  return { ...item };
});
```

Now test it:

```js
deepCopy[0].name = "Eve";

console.log(original[0].name); // "Alice"
console.log(deepCopy[0].name); // "Eve"
```

🎉 Safe. No cross-contamination.

Memory-wise:

```js
original[0]  ──> { name: "Alice" }
deepCopy[0]  ──> { name: "Eve" }
```

---

Different objects. Different references
Value types (copied by value)

These are safe, boring, drama-free:

- number
- string
- boolean
- null
- undefined
- bigint
- symbol

```tsx
let a = 10;
let b = a;
b = 99;

console.log(a); // 10
```

No shared memory. No surprise.
