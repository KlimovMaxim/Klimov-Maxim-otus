function sum(a) {

  let currentSum = a;

  function f(b) {
    if (b !== null){
    currentSum += b;}
    return f;
  }

  f.toString = function() {
    return currentSum;
  };
  
  return f;
}