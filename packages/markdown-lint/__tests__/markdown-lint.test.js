'use strict';

const markdownLint = require('..');
const assert = require('assert').strict;

assert.strictEqual(markdownLint(), 'Hello from markdownLint');
console.info('markdownLint tests passed');
