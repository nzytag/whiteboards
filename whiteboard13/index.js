'use strict';
function Node(data) {
  this.data = data;
  this.next = null;
}

function dedupe(head) {
  if (!head) return null;
  if (!head.next) return head;

  let curr = head;
  let prev = new Node();

  while (curr) {
    if (prev.data === curr.data)
      prev.next = curr.next;
    else
      prev = curr;

    curr = curr.next;
  }

  return head;
}