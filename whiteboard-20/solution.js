'use strict';
const utils = module.exports ={};
//this is the map:
utils.map = function(arr, cb) {
  if(typeof cb!== 'function') return 'callback not a function';
  let solution = [];
  for(let i = 0; i <arr.length; i++){
    solution.push(cb(arr[i]));
  }
  return solution;
};

//this is the reduce:
utils.reduce = function(arr, cb, init) {
  if(typeof cb!== 'function') return 'cb is not a function';
  let solution = init;
  for(let i=0; i< arr.length; i++){
    solution += cb(arr[i]);
  }
  return solution;
};

//this is the filter:

utils.filter = function(arr, cb, init){
  let solution = init;
  if(typeof cb!=='function') return 'callback is not a function';
  for(let i = 0; i<arr.length; i++){
    let val = cb(arr[i]);
    if(val !== null)solution.push(val);
  }
  return solution;
};