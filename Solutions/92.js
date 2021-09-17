// to get sum of squares of digits of a number
function specialSum(n) {
    let a = String(n);
    let sum = 0;
    for (let i = 0; i < a.length; i++) {
      sum += a[i]**2;
    }
    return sum;
  }
  
  // to get a square number chain
  function chain(n) {
    let result = [n];
    while (true) {
      if (n === 89 || n === 1) {
        break;
      }
      else {
        result.push(specialSum(n));
      n = specialSum(n);
      }
    }
    return result;
  }
  
  function problem(a) {
    let count = 0;
    for (let i = 2; i < a; i++) {
      if (chain(i)[chain(i).length-1] === 89) {
        count++
      }
    }
    return count;
  }
  
  problem(10000000); //8581146