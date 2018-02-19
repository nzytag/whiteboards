'use strict';

const kTree = require('../lib/k-ary-tree');
const Sll = require('../lib/sll');
const karyTreeToSll = require('../lib/solution');


describe('Solution module', () => {

  describe('karyTreeToSll function', () => {

    describe('Valid input', () => {
      test('should return a correct answer', () => {
        let KT = new kTree();
        KT.insert('a');
        KT.insert('b', 'a');
        KT.insert('c', 'b');
        KT.insert('d', 'c');
        KT.insert('e', 'd');
        KT.insert('f','e');
        const res = karyTreeToSll(KT);

        expect(res.head.value).toBe('a');
        expect(res.head.next.value).toBe('b');
        expect(res.head.next.next.value).toBe('c');
        expect(res.head.next.next.next.value).toBe('d');
        expect(res.head.next.next.next.next.value).toBe('e');
        expect(res.head.next.next.next.next.next.value).toBe('f');
      });

      test('should return a instance of Sll', () => {
        let KT = new kTree();
        KT.insert('a');
        KT.insert('b', 'a');
        KT.insert('c', 'b');
        KT.insert('d', 'c');
        KT.insert('e', 'd');
        KT.insert('f', 'c');
        const res = karyTreeToSll(KT);

        expect(res instanceof Sll).toBe(true);

      });
    });

    describe('Invalid input', () => {

      test('should throw an error if input type is wrong', () => {
        expect(() => karyTreeToSll('')).toThrow('Input needs to be tree instance');
      });

      test('should return null if root is null', () => {
        let KT = new kTree();
        expect(karyTreeToSll(KT)).toBeNull();
      });
    });
  });
});