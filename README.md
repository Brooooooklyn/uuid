# `@napi-rs/uuid`

![CI](https://github.com/Brooooooklyn/uuid/workflows/CI/badge.svg)
[![install size](https://packagephobia.com/badge?p=@napi-rs/uuid)](https://packagephobia.com/result?p=@napi-rs/uuid)
[![Downloads](https://img.shields.io/npm/dm/@napi-rs/uuid.svg?sanitize=true)](https://npmcharts.com/compare/@napi-rs/uuid?minimal=true)

Fastest (Only on Windows) **_[RFC4122](http://www.ietf.org/rfc/rfc4122.txt)_** generator for Node.js. Only `v4` available for now.

> 🚀 Help me to become a full-time open-source developer by [sponsoring me on Github](https://github.com/sponsors/Brooooooklyn)

## Install

```bash
yarn add @napi-rs/uuid
npm install @napi-rs/uuid
pnpm install @napi-rs/uuid
```

## Performance

```
Running "UID string" suite...
Progress: 100%

  crypto.randomUUID:
    6 028 578 ops/s, ±3.78%   | 1.59% slower

  napi-uuid-v4:
    6 126 249 ops/s, ±0.30%   | fastest

  nanoid:
    4 952 090 ops/s, ±0.42%   | 19.17% slower

  uuid-js:
    2 003 718 ops/s, ±0.33%   | slowest, 67.29% slower

Finished 4 cases!
  Fastest: napi-uuid-v4
  Slowest: uuid-js

Running "Validate" suite...
Progress: 100%

  napi-uuid-v4:
    19 890 111 ops/s, ±0.30%   | fastest

  uuid-js:
    7 083 602 ops/s, ±0.35%    | slowest, 64.39% slower

Finished 2 cases!
  Fastest: napi-uuid-v4
  Slowest: uuid-js
```

### Hardware

```
OS: Windows 10 Pro x86_64
Host: Micro-Star International Co., Ltd. MS-7C35
Kernel: 10.0.19043
Terminal: Windows Terminal
CPU: AMD Ryzen 9 5950X (32) @ 3.400GHz
Memory: 23839MiB / 32688MiB
```

## API

```ts
import { v4 } from "@napi-rs/uuid";

console.log(v4()); // eb4ffe32-2232-422a-933f-b905c0dfea84
```

## Support matrix

|                       | node12 | node14 | node16 |
| --------------------- | ------ | ------ | ------ |
| Windows x64           | ✓      | ✓      | ✓      |
| Windows arm64         | ✓      | ✓      | ✓      |
| macOS x64             | ✓      | ✓      | ✓      |
| macOS arm64 (m chips) | ✓      | ✓      | ✓      |
| Linux x64 gnu         | ✓      | ✓      | ✓      |
| Linux x64 musl        | ✓      | ✓      | ✓      |
| Linux arm gnu         | ✓      | ✓      | ✓      |
| Linux arm64 gnu       | ✓      | ✓      | ✓      |
| Linux arm64 musl      | ✓      | ✓      | ✓      |
| Android arm64         | ✓      | ✓      | ✓      |
| FreeBSD x64           | ✓      | ✓      | ✓      |
