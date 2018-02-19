'use strict';

const karyT = require('./lib/k-ary-tree');
const maxChild = require('./lib/solution');


let karyTree = new karyT();
karyTree.insert(10);
karyTree.insert(20, 10);
karyTree.insert(30, 10);
karyTree.insert(40, 10);
karyTree.insert(50, 30);
karyTree.insert(60, 50);


