import { randomUUID } from 'crypto'

import b from 'benny'
import { nanoid as nanoidJs } from 'nanoid'
import * as uuid from 'uuid'

import { v4 } from './index.js'

await b.suite(
  'UID string',
  b.add('crypto.randomUUID', () => {
    randomUUID({
      disableEntropyCache: true,
    })
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
