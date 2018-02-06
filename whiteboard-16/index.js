'use strict';

const karyTree = require('./lib/kary-tree');
const sumOfChildren = require('./lib/solution');


let karyTree = new karyTree();
karyTree.insert(10);
karyTree.insert(20, 10);
karyTree.insert(30, 20);
karyTree.insert(40, 30);

