'use strict';

const TheTree = require('../lib/treeBuilder');
const doTheMagic = require('../index');
require('jest');

let test = new TheTree();
test.insert(5);
test.insert(15, 5);
test.insert(4, 5);
test.insert(2, 4);
test.insert(3, 15);
test.insert(9, 4);

let test2 = new TheTree();
test2.insert(666);

let answer = [{ val: 3, children: [] }, { val: 2, children: [] }, { val: 9, children: [] }];
let answer2 = [{ children: [], val: 666}];

describe('#solution module', function(){
  it('should return the right format was input.', function () {
    expect(doTheMagic.childLess(1)).toBe(null);
    expect(doTheMagic.childLess('test')).toBe(null);
  });
  it('checks to see if its the right answer is given', function () {
    expect(doTheMagic.childLess(test)).toEqual(answer);
    expect(doTheMagic.childLess(test2)).toEqual(answer2);
  });
  it('Should check if it doesnt return the same data passed in.', function () {
    expect(doTheMagic.childLess(test)).not.toEqual(test);
  });

});
