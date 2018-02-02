'use strict';

const dedupe = require('../index.js');
const SLL = require('../lib/sll.js');

let tstLst1 = new SLL;
let tstLst2 = new SLL;
let nullList = new SLL;

let resultUno = { 'head': { 'next': { 'next': { 'next': { 'next': null, 'value': 432 }, 'value': 345 }, 'value': 999 }, 'value': 666 } };
let resultDos = { 'head': { 'next': { 'next': { 'next': { 'next': null, 'value': 432 }, 'value': 666 }, 'value': 999 }, 'value': 666 } };
666;

tstLst1.insertEnd(666);
tstLst1.insertEnd(999);
tstLst1.insertEnd(345);
tstLst1.insertEnd(345);
tstLst1.insertEnd(432);

tstLst2.insertEnd(666);
tstLst2.insertEnd(999);
tstLst2.insertEnd(666);
tstLst2.insertEnd(666);
tstLst2.insertEnd(432);

describe('RemoveDupes', () => {
  it('should return the list without any CONSECUTIVE duplicates', () => {
    expect(dedupe(tstLst1.head)).toEqual(resultUno);
  });
  it('should return null if the input list has no values', () => {
    expect(dedupe(nullList)).toEqual(null);
  });
  it('should return the list without CONSECUTIVE duplicates', () => {
    expect(dedupe(tstLst2.head)).toEqual(resultDos);
  });
});