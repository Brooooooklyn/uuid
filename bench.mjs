import { randomUUID } from 'crypto'

import b from 'benny'
import { nanoid as nanoidJs } from 'nanoid'
import * as uuid from 'uuid'

import { isV4, v4 } from './index.js'

await b.suite(
  'UID string',
  b.add('crypto.randomUUID', () => {
    randomUUID()
  }),
  b.add('napi-uuid-v4', () => {
    v4()
  }),
  b.add('nanoid', () => {
    nanoidJs()
  }),
  b.add('uuid-js', () => {
    uuid.v4()
  }),
  b.cycle(),
  b.complete()
)

const UUID_V4 = '26f980fd-3ee2-4b7a-8e4e-9b417d83fcd8'

await b.suite(
  'Validate',
  b.add('napi-uuid-v4', () => {
    isV4(UUID_V4)
  }),
  b.add('uuid-js', () => {
    uuid.validate(UUID_V4) && uuid.version(UUID_V4) === 4
  }),
  b.cycle(),
  b.complete()
)
