'use strict';
const solution = module.exports ={};

solution.fiboIter = function(n) {
  if (typeof n !== "number") return null;
  var fibo = [0, 1];

  if (n <= 2) return 1;

  for (var i = 2; i <= n; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
  }

  return fibo[n];
}
solution.fiboIter;
