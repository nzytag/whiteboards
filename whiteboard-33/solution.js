'use strict';

let exponentMath = (module.exports = {});


exponentMath.sumAllTots = function(base, exp) {
  if (typeof base !== 'number' || typeof exp !== 'number') return new Error('error: insert valid input');
  if (isNaN(base**exp)) return new Error('cant run calc')
  return (base**exp).toString().split('').reduce((a, b) => ~~a + ~~b);
};