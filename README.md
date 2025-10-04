# use-effect-skip-first

Skip the first run of a React `useEffect`—handy for ignoring the initial mount and only reacting to subsequent dependency changes.

---

## Install

```bash
pnpm add use-effect-skip-first
# or
npm i use-effect-skip-first
```

## Usage

```tsx
import * as React from "react";
import { useState } from "react";
import { useEffectSkipFirst } from "use-effect-skip-first";

export default function App() {
  const [counter, setCounter] = useState(0);

  useEffectSkipFirst(() => {
    console.log("effect called", counter);
  }, [counter]);

  return (
    <div>
      <h1>use-effect-skip-first Demo</h1>
      <button onClick={() => setCounter(counter + 1)}>Click me</button>
      <p>Counter: {counter}</p>
    </div>
  );
}
```

## API

```ts
useEffectSkipFirst(effect: EffectCallback, deps?: DependencyList): void;
```

* Skips the effect on the initial render **when you provide a non-empty `deps` array**.
* On later updates (when any dep changes), your `effect` runs as usual.

## Notes

* If `deps` is **empty or omitted**, the effect behaves like a normal `useEffect` (it will run on mount).
* Return a cleanup function from `effect` if needed—identical to the standard `useEffect` API.
