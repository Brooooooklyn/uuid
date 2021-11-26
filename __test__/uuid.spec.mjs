import test from 'ava'
import { validate, version } from 'uuid'

import { v4 } from '../index.js'

test('should be able to generate uuid', (t) => {
  t.is(typeof v4(), 'string')
  t.true(validate(v4()))
  t.is(version(v4()), 4)
})
