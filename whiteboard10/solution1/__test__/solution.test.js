'use strict';

const doThing = require('../lib/solution.js');
require('jest');


let answer = 'it should { test { the } remove}';
let answer2 = 'this is a { test{ { of the } remove}}}';

describe('#solution module', function () {
  it('check if there is anything passing', function () {
    expect(doThing.checkBraces()).toBe(null);
  });
  it('should check ig the right items are passed in', function () {
    expect(doThing.checkBraces(1)).toBe(null);
    expect(doThing.checkBraces({})).toBe(null);
  });

});