'use strict';

const doThing = require('../solution');
require('jest');

const TreeNode = require('../lib/treeNode');
const BinaryTree = require('../lib/binaryTree');

let one = new TreeNode(1);
let two = new TreeNode(2);
let three = new TreeNode(3);
let four = new TreeNode(4);

let test1 = new TreeNode(1);
let test2 = new TreeNode(2);
let test3 = new TreeNode(3);
let test4 = new TreeNode(4);

let best1 = new TreeNode(1);
let best2 = new TreeNode(2);
let best3 = new TreeNode(3);
let best4 = new TreeNode(4);


let binaryTree = new BinaryTree();
let testTree1 = new BinaryTree();
let testTree2 = new BinaryTree();

binaryTree.root = one;

one.left = two;
one.right = three;
two.left = four;


//mock data
testTree1.root = test1;//root
test1.left = test2;
test1.right = test3;
test2.left = test4;


//mock2 data
testTree2.root = best1;//root

best1.left = best2;
best1.right = best3;
best2.right = best4;


describe('#solution module', function() {

  it('checks if there are trees to compare', function() {
    expect(doThing.isEqual()).toBe(null);
  });
  it('checks if numbers are passed', function() {
    expect(doThing.isEqual('string', 3)).toBe(null);
    expect(doThing.isEqual('string', binaryTree)).toBe(null);
  });
  it('checks if returns true or false ', function() {
    expect(doThing.isEqual(binaryTree, testTree1)).toBe(true);
    expect(doThing.isEqual(binaryTree, testTree2)).toBe(false);
  });
});