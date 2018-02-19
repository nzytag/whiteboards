'use strict';

const kTree = require('../lib/kary-tree');
const sum = require('../lib/solution');


describe('Solution module', () => {
  describe('sum function', () => {
    describe('Correct Result', () => {
      test('should return a correct answer', () => {
        let KT = new kTree();
        KT.insert(10);
        KT.insert(20, 10);
        KT.insert(30, 20);
        KT.insert(40, 30);
        KT.insert(50, 40);
        expect(sum(KT)).toBe(150);
      });
    });
    describe('Invalid input', () => {
      test('should return null if root is null', () => {
        let KT = new kTree();
        expect(sum(KT)).toBeNull();
      });
    });
  });
});