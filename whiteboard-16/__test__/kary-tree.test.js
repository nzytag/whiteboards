'use strict';
'use strict';

const kTree = require('../lib/kary-tree');


describe('Kary tree module', () => {

  describe('constructor', () => {
    describe('Valid input', () => {
      test('should initialize root as a TreeNode instance with null value', () => {
        let KT = new kTree();
        expect(KT.root.val).toBeNull();
      });
    });
  });

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
});