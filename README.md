# `@napi-rs/uuid`

![CI](https://github.com/Brooooooklyn/uuid/workflows/CI/badge.svg)
[![install size](https://packagephobia.com/badge?p=@napi-rs/uuid)](https://packagephobia.com/result?p=@napi-rs/uuid)
[![Downloads](https://img.shields.io/npm/dm/@napi-rs/uuid.svg?sanitize=true)](https://npmcharts.com/compare/@napi-rs/uuid?minimal=true)

Fastest **_[RFC4122](http://www.ietf.org/rfc/rfc4122.txt)_** generator for Node.js. Only `v4` available for now.

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
    737 523 ops/s, ±4.21%      | slowest, 93.34% slower

  napi-uuid-v4:
    11 067 865 ops/s, ±0.37%   | fastest

  nanoid:
    6 105 697 ops/s, ±0.72%    | 44.83% slower

  uuid-js:
    1 886 725 ops/s, ±0.38%    | 82.95% slower

Finished 4 cases!
  Fastest: napi-uuid-v4
  Slowest: crypto.randomUUID
```

### Hardware

```
OS: Ubuntu 20.04.3 LTS on Windows 10 x86_64
Host: Micro-Star International Co., Ltd. MS-7C35
Kernel: 5.10.60.1-microsoft-standard-WSL2
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
| Android armv7         | ✓      | ✓      | ✓      |
| FreeBSD x64           | ✓      | ✓      | ✓      |
