'use strict';

exports.circleCheck = function (list) {
  if (typeof list !== 'object') return null;
  let slow = list;
  let fast = list;
  while(fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (fast === slow) return true;
  }
  return false;
};