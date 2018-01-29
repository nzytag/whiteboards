'use strict';

const solution = require('../lib/solution.js');
const SLL = require('../lib/sll.js');
require('jest');


let listUno = new SLL();
listUno.insertEnd(1);
listUno.insertEnd(2);
listUno.insertEnd(3);
listUno.insertEnd(4);


let listDos = new SLL();
listDos.insertEnd(3);
listDos.insertEnd(4);
listDos.insertEnd(5);
listDos.insertEnd(6);


let answer = { head: { value: 3, next: { value: 4, next: null } } };
let wrong = { head: { value: '1', next: { value: '1', next: null } } };

describe('#solution module', function () {
  it('checks to see what was passed in in not a string', function () {
    expect(solution('Hector', listUno)).toBe(null);
    expect(solution('Hector')).toBe(null);
  });
  it('checks to see if was passed in is not a number', function () {
    expect(solution(4)).toBe(null);
  });
  it('checks to see if its the right answer', function () {
    expect(solution(listUno, listDos)).toEqual(answer);
    expect(solution(listUno, listDos)).not.toEqual(wrong);
  });
});
