
'use strict';
//using test to make it more understandable. Since it requires the function from index, it is jus being renamed for testing purposes
const test = require('../index');
require('jest');
//we create a linked list to test
let list = {value: 1, next: {value: 2, next: {value: 3, next: null }}};
//we create an array in order to test if is a linked list or not
let cars = 'I am enjoying this';
//test 1 and 2 are checking and iterating to find end and stop or checking if it kees running
describe('#Circular List', function () {
  it('It should return false if not circular', function () {
    expect(test.circleCheck(list)).toBe(false);
  });

  it('It should return true if list is circular...', function () {
    list.next.next = list;
    expect(test.circleCheck(list)).toBe(true);
  });

//this one is going to pull the string and test to see if is a list or not
  it('It should return null if input is not a linked list', function () {
    expect(test.circleCheck(cars)).toEqual(null);
  });
});
