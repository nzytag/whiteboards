'use strict';

const solution = require('../iterative/solution.js');

describe('recursively', () => {
  it('should return a value for the correct input', () => {
    expect(solution.fiboIter(4)).toEqual(3);
  });
  it('should return null', () => {
    expect(solution.fiboIter('a')).toEqual(null);
  });
  it('should test if result is valid', () => {
    expect(solution.fiboIter(1)).toEqual(1);
  });
  it('should return null if nothing has been passing', () => {
    expect(solution.fiboIter()).toEqual(null);
  });
});