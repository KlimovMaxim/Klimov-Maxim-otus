function sum(a) {
  let currentSum = a;

  function f(b) {
    if (b == undefined) {
      currentSum = currentSum;
    }
    else { currentSum += b; }
    return f;
  }

  f.toString = function () {
    return currentSum;
  };

  return f;
}