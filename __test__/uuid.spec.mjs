import test from 'ava'
import { v4 as js, validate, version } from 'uuid'

import { v4, isV4 } from '../index.js'

test('should be able to generate uuid', (t) => {
  t.is(typeof v4(), 'string')
  t.true(validate(v4()))
  t.is(version(v4()), 4)
})

test('should be able to validate uuid', (t) => {
  t.true(isV4(js()))
  t.true(isV4(v4()))
})
