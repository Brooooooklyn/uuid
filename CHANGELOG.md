# [0.2.0](https://github.com/Brooooooklyn/uuid/compare/v0.1.0...v0.2.0) (2021-12-25)


### Bug Fixes

* test should not contain isV4 ([a22e9c4](https://github.com/Brooooooklyn/uuid/commit/a22e9c48eae46db7016b4fe481eef7f942bb6794))


### Features

* upgrade to napi 2 ([a46d3a2](https://github.com/Brooooooklyn/uuid/commit/a46d3a29bd53557b525bacd0f4092954a6caeeee))



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
