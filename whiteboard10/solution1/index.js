'use strict';

const run = require('./lib/solution');


let test = process.argv[2];
let testStr = 'this is a { test { of the } remove}';
let testStrFail = 'this is a { test{ { of the } remove}}}';

if (test === 'true') {
  run.checkBraces(testStr);
}
if (test === 'false') {
  run.checkBraces(testStrFail);
}