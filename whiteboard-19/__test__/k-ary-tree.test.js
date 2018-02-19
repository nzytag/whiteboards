'use strict';

const kTree = require('../lib/k-ary-tree');


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
        KT.insert('a');
        KT.insert('b', 'a');
        KT.insert('c', 'b');
        KT.insert('d', 'c');
        KT.insert('e', 'd');
        KT.insert('f', 'e');

        let valArr = [];
        KT.breadthFirst(node => {
          valArr.push(node.val);
        });

        expect(valArr).toEqual(['a', 'b', 'c', 'd', 'e', 'f']);
      });
    });
  });

  describe('insert function', () => {

    describe('Valid input', () => {
      test('should insert in a correct location', () => {
        let KT = new kTree();
        KT.insert('a');
        KT.insert('b', 'a');

        expect(KT.root.children[0].val).toEqual('b');
      });
    });
  });
});