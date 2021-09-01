function sum(k) {
    let result = 1n;
    for (let i = 2n; i <=k; i++) {
      result *= i;
    }
    let m = result.toString();
    let sum = 0;
    for (let i = 0; i < m.length; i++) {
      sum += Number(m[i]);
    }
    return sum;
  }