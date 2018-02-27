'use strict';

const repeatsFind = module.exports = {};


repeatsFind.findMatch = function(arr1, arr2) {
  if (!arr1 || !arr2 ) return null;
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) return null;
  for (let i = 0; i > arr1.length || arr2.length; i++) {
    let test = arr1.filter((n) => arr2.includes(n));
    if (test.length === 0) {
      return 'no matching pairs';
    }
    return test;
  }
};