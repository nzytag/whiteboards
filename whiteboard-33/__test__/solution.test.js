'use strict';
const exponentMath = require('../solution');
require('jest');


describe('#null Case ', function() {
  it('Should calculate result', function() {
    expect(exponentMath.sumAllTots(2, 12)).toBe(19);
  });
  it('Should return: Error', function() {
    expect(exponentMath.sumAllTots()).toBeInstanceOf(Error);
  });
  it('Should return: Error', function() {
    expect(exponentMath.sumAllTots('break this')).toBeInstanceOf(Error);
  });
  it('Should return: Error', function() {
    expect(exponentMath.sumAllTots(1, 'car')).toBeInstanceOf(Error);
  });
});