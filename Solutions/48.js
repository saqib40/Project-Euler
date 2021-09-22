function sumSelfPowers(n) {
    let sum = 0n;
    for (let i = BigInt(1); i <= BigInt(n); i++) {
      sum += i**i;
    }
    return sum;
  }