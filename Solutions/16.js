function powerDigitSum(n) {
    let a = BigInt(2**n).toString();
    let sum = 0;
    for (let i = 0; i < a.length; i++) {
      sum += Number(a[i]);
    }
    return sum;
  }
  
  powerDigitSum(1000); //1366