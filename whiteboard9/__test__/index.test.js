'use strict';

const solution = require('../index');
const SLL = require('../lib/sll');

describe('#Linked List ndth', () => {
  let sll = new SLL();
  //this will insert value
  sll.insertHead(11);
  sll.insertEnd(22);
  sll.insertEnd(33);
  sll.insertEnd(44);
  sll.insertEnd(55);
 
  let sll2 = sll.head.next;

  describe('#Solution', () => {
    it('It should accept two arguments and return the correct node', () => {
      expect(solution.find(3, sll)).toBe(sll2);
    });
    it('It should return null if SLL is not an object', () => {
      expect(solution.find(44, 'SLL')).toBeNull();
    });
    it('It should return null if offset is not a number', () => {
      expect(solution.find('!fun-!fun-', sll)).toBeNull();
    });
  });
}); 