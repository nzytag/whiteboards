'use strict';

const findThing = module.exports = {};


findThing.binaryIndexOf = function (n, arr) { //The Big O is O(logN)
  if (!n || !arr || typeof n !== 'number' || !Array.isArray(arr)) return null;
  arr.sort();
  let minIndex = 0;
  let maxIndex = arr.length - 1;
  let currentElement;
  let currentIndex;
  let resultIndex;

  while (minIndex <= maxIndex) {
    resultIndex = currentIndex = minIndex + maxIndex >> 1;
    currentElement = arr[currentIndex];

    if (currentElement < n) {
      minIndex = currentIndex + 1;
    }
    else if (currentElement > n) {
      maxIndex = currentIndex - 1;
    }
    else {
      return { value: n, index: currentIndex };
    }
  }
  return `item is not in array, please look at ${arr}`;
};