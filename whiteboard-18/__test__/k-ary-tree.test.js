'use strict';

const kTree = require('../lib/k-ary-tree');

describe('Kary tree module', () => {
  describe('breadthFirst function', () => {

    describe('Valid input', () => {
      test('should go through every node', () => {
        let KT = new kTree();
        KT.insert(1);
        KT.insert(2, 1);
        KT.insert(3, 1);
        KT.insert(4, 1);
        KT.insert(5, 4);
        KT.insert(6, 2);

        let valArr = [];
        KT.breadthFirst(node => {
          valArr.push(node.val);
        });

        expect(valArr).toEqual([1, 2, 3, 4, 6, 5]);
      });
    });
  });

  describe('insert function', () => {

    describe('Valid input', () => {
      test('should insert in a correct location', () => {
        let KT = new kTree();
        KT.insert(1);
        KT.insert(2, 1);

        expect(KT.root.children[0].val).toEqual(2);
      });
    });
  });
});