# 0.1.0 (2021-10-01)

## First release 🎉

### API

```ts
import { v4 } from "@napi-rs/uuid";

console.log(v4()); // eb4ffe32-2232-422a-933f-b905c0dfea84
```

### Performance

```
Running "UID string" suite...
Progress: 100%

  napi-uuid-v4:
    6 537 509 ops/s, ±0.46%   | fastest

  nanoid:
    4 919 948 ops/s, ±0.51%   | 24.74% slower

  uuid-js:
    1 970 252 ops/s, ±0.37%   | slowest, 69.86% slower

Finished 3 cases!
  Fastest: napi-uuid-v4
  Slowest: uuid-js

Running "Validate" suite...
Progress: 100%

  napi-uuid-v4:
    17 993 419 ops/s, ±0.28%   | fastest

  uuid-js:
    7 290 373 ops/s, ±0.63%    | slowest, 59.48% slower

Finished 2 cases!
  Fastest: napi-uuid-v4
  Slowest: uuid-js
```
