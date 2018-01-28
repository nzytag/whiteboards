'use strict';

const solution = require('../lib/index');
const SLL = require('../lib/node');
require('jest');

describe('Solution Module', function () {
  describe('#Two Largest', function () {
    let sll = new SLL();
    // sll.insertHead(0);
    sll.insertEnd(1);
    sll.insertEnd(2);
    sll.insertEnd(3);
    sll.insertEnd(4);
    sll.insertEnd(5);
    let sllTest = sll.head.next.next;
    it('should take in a created SLL and return the correct value from the end', function () {
      expect(solution.nthNode(sll, 2)).toEqual(sllTest);
    });

    it('should take in a created SLL and return the correct value from the end', function () {
      expect(solution.nthNode('sll', 2)).toEqual(null);
    });

    it('should take in a created SLL and return the correct value from the end', function () {
      expect(solution.nthNode(sll, '2')).toEqual(null);
    });

    it('should take in a created SLL and return the correct value from the end', function () {
      expect(solution.nthNode(sll, 8)).toEqual('nth value from end is greater than length of list');
    });


  });
});