//Summation of primes using sieve of erathosthenes
function sPrime(n) {
    let primes = new Array(n+1).fill(1);
    let sum = 0;
    for (let i = 2; i<n; i++) {
      if (primes[i] === 1) {
        sum += i;
        for (let m = 2; i*m < n; m++) {
          primes[i*m] = 0;
        }
      }
    }
    return sum;
  }