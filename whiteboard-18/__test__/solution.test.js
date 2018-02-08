'use strict';

const kTree = require('../lib/k-ary-tree');
const maxChild = require('../lib/solution');


describe('Solution', () => {
  describe('Valid input', () => {
    test('should return a correct answer', () => {
      let KT = new kTree();
      KT.insert(10);
      KT.insert(20, 10);
      KT.insert(30, 10);
      KT.insert(40, 10);
      KT.insert(50, 40);
      KT.insert(60, 20);

      expect(maxChild(KT).val).toBe(10);
    });
  });
  describe('Check for valid data', () => {
    test('should throw an error if input type is wrong', () => {
      expect(() => maxChild('')).toThrow('Input needs to be tree instance');
    }); 

    test('should return null if root is null', () => {
      let KT = new kTree();
      expect(maxChild(KT)).toBeNull();
    });
  });
});