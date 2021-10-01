`@napi-rs/uuid`

![CI](https://github.com/Brooooooklyn/uuid/workflows/CI/badge.svg)
[![install size](https://packagephobia.com/badge?p=@napi-rs/uuid)](https://packagephobia.com/result?p=@napi-rs/uuid)
[![Downloads](https://img.shields.io/npm/dm/@napi-rs/uuid.svg?sanitize=true)](https://npmcharts.com/compare/@napi-rs/uuid?minimal=true)

Fastest ***[RFC4122](http://www.ietf.org/rfc/rfc4122.txt)*** generator for Node.js. Only `v4` available for now.

> 🚀 Help me to become a full-time open-source developer by [sponsoring me on Github](https://github.com/sponsors/Brooooooklyn)

# Install

```bash
yarn add @napi-rs/uuid
npm install @napi-rs/uuid
pnpm install @napi-rs/uuid
```

# Performance

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

# API

```ts
import { v4 } from '@napi-rs/uuid'

console.log(v4()) // eb4ffe32-2232-422a-933f-b905c0dfea84
```

# Support matrix

|                  | node12 | node14 | node16 |
| ---------------- | ------ | ------ | ------ |
| Windows x64      | ✓      | ✓      | ✓      |
| Windows x32      | ✓      | ✓      | ✓      |
| Windows arm64    | ✓      | ✓      | ✓      |
| macOS x64        | ✓      | ✓      | ✓      |
| macOS arm64      | ✓      | ✓      | ✓      |
| Linux x64 gnu    | ✓      | ✓      | ✓      |
| Linux x64 musl   | ✓      | ✓      | ✓      |
| Linux arm gnu    | ✓      | ✓      | ✓      |
| Linux arm64 gnu  | ✓      | ✓      | ✓      |
| Linux arm64 musl | ✓      | ✓      | ✓      |
| Android arm64    | ✓      | ✓      | ✓      |
| FreeBSD x64      | ✓      | ✓      | ✓      |
