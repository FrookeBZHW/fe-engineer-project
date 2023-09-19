'use strict';

const commitLint = require('..');
const assert = require('assert').strict;

assert.strictEqual(commitLint(), 'Hello from commitLint');
console.info('commitLint tests passed');
