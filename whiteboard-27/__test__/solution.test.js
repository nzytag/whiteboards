'use strict';

const runTheTests = require('../lib/solution.js');
require('jest');

let initialArray = [
  [1, 2, 3], 
  [4, 5, 6], 
  [7, 8, 9]];

let resultAfter = [
  [7, 4, 1], 
  [8, 5, 2], 
  [9, 6, 3]
];


describe('#Testing for rotation', function () {
  it('Should validate if info is correct.', function () {
    expect(runTheTests.rotateTheArr(1)).toBe(null);
    expect(runTheTests.rotateTheArr('break-it')).toBe(null);
  });
  it('Should pass if result is correct', function () {
    expect(runTheTests.rotateTheArr(initialArray)).toEqual(resultAfter);
  });
  
});