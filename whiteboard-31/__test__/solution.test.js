'use strict';

const repeatsFind = require('../solution.js');
require('jest');

describe('#solution module', function() {
  let array = [[1,2,3,4, 6, 8], [5,6,7, 8]];
  it('checks to see if there is anything to pass into the function', function() {
    expect(repeatsFind.findMatch()).toBe(null);
  });
  it('checks to see if only one array is passed into the function', function() {
    expect(repeatsFind.findMatch(array[0])).toBe(null);
  });
  it('checks to see if both items passed in are arrays', function() {
    expect(repeatsFind.findMatch('string', array[1])).toBe(null);
  });
  it('checks to see if we are returning only matching', function() {
    expect(repeatsFind.findMatch(array[0], array[1])).toEqual([6,8,]);
  });
});
