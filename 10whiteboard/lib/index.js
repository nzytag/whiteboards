'use strict';

const Stack = require('./stack');

let testStack = new Stack();
let testString = '{sometimes} I feel behind {but then} {{{I}}} see how much {more} I know every day, and that calms me down.';

const solution = module.exports = {};

solution.curlyString = function (str) {
  if (typeof str !== 'string') return null;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '{') testStack.push('{');
    if (str[i] === '}') {
      if (testStack.size === 0) return;
      testStack.pop();
    }
  }
  if (testStack.top) 
    return ;

};

solution.curlyString(testString);

let testArray = [0,1,2,3,4,5,6,7,8,9];
solution.binarySearch = function (arr, n) {
  let location = Math.floor(arr.length/2);
  let max = arr.length;
  let min = 0;
  let range = max-min;
  for (let k = 0; k<arr.length; k++){

    if (arr[location] > n)  max = location;
    if (arr[location] < n)  min = location;
    if (arr[location] === n) return;
    range = max-min;
    location = Math.floor(range/2);
  }
  return;
};

solution.binarySearch(testArray,10);