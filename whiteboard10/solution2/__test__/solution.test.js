'use strict';

const doThing = require('../lib/solution.js');
require('jest');


let array = [0, 1, 2, 4, 5, 5.3, 5.7, 5.9, 6, 6.5, 7, 8, 9];

describe('#solution module', function () {

  it('checks to see if the right items are passed in.', function () {
    expect(doThing.binaryIndexOf('hector', array)).toBe(null);
    expect(doThing.binaryIndexOf(1)).toBe(null);
    expect(doThing.binaryIndexOf(1, 'hector')).toBe(null);
  });
  it('checks to see if its the right answer with number', function () {
    expect(doThing.binaryIndexOf(2, array)).toEqual({ 'index': 2, 'value': 2});
  });
 
});