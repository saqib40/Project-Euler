//using pen and paper
function result() {
    function sum(n, k) {
   let x = k*n/2;
    let y = n+1;
    return Math.round(x*y);
  }
    return sum(333, 3) + sum(199, 5) - sum(66, 15);
  }
  result();