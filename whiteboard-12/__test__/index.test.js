'use strict';

const DblStkQ = require('../index');

let testDblStkQ = new DblStkQ;
let emptyDblStkQ = new DblStkQ;

testDblStkQ.enqueue(11);
testDblStkQ.enqueue(22);
testDblStkQ.enqueue(33);

describe('Double Stack Queue', () => {
  
  it('should add an item to the enqueuing stack', () => {
    expect(testDblStkQ.enqueue(44)).toEqual('added 44 to the DblStkQueue.');
  });
  it('should remove an item from the dequeuing stack', () => {
    expect(testDblStkQ.dequeue()).toEqual(11);
    expect(testDblStkQ.dequeue()).toEqual(22);
    expect(testDblStkQ.dequeue()).toEqual(33);
  });
  it('should return null if there are no items to dequeue', () => {
    expect(emptyDblStkQ.dequeue()).toEqual(null);
  });
});
