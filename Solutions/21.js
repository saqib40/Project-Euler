function properDivisors(n) {
    let result = [1];
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        result.push(i);
        if (i !== Math.sqrt(n)) {
        result.push(n/i);
      }
      }
    }
    return result;
  }
  
  function sumOfProperDivisors(n) {
    let sum = 0;
    for (let i = 0; i < properDivisors(n).length; i++) {
      sum += properDivisors(n)[i];
    }
    return sum;
  }
  
  function amicableNumbers(n) {
    let result = [];
    for (let i = 1; i <= n; i++) {
      let k = sumOfProperDivisors(i);
      if (sumOfProperDivisors(k) === i && k !== i) {
        result.push(i);
      }
    }
    return result;
  }
  
  function problem() {
    let sum = 0;
    for (let i = 0; i < amicableNumbers(10000).length; i++) {
      sum += amicableNumbers(10000)[i];
    }
    return sum;
  }