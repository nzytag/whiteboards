'use strict';
const solution = require('../recursive/solution.js');


describe('recursively', () => {
  it('should return a value for the correct input', () => {
    expect(solution.fiboRecurs(4)).toEqual(3);
  });
  it('should return null', () => {
    expect(solution.fiboRecurs('a')).toEqual(null);
  });
  it('should test if result is valid', () => {
    expect(solution.fiboRecurs(1)).toEqual(1);
  });
  it('should return null if nothing has been passing', () => {
    expect(solution.fiboRecurs()).toEqual(null);
  });
});