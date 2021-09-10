//to find factors of n
function factors(n) {
    let result = [];
    for (let i = 1; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        result.push(i);
      if (i !== Math.sqrt(n)) {
        result.push(n/i);
      }
      }
    }
    return result;
  }
  
  //to find nth triangular number
  function tNumber(n) {
    let result = 0;
    for (let i = 1; i <= n; i++) {
      result += i;
    }
    return result;
  }
  
  function problem() {
    for (let i = 1; ; i++) {
      if (factors(tNumber(i)).length > 500) {
        return tNumber(i);
      }
      else {
        continue;
      }
    }
  }
  
  problem(); //76576500