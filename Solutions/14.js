//to find biggest number in an array
function bigOne(array) {
    let result = array[0];
    for (let i = 1; i < array.length; i++) {
      if (array[i] > result) {
        result = array[i];
      }
    }
    return result;
  }
  
  function collatzSequenceLength(n) {
      let resultingArray = [n];
      while(true) {
          if(n === 1) {
  return resultingArray.length;
          }
          else {
              if (n%2 === 0) {
  resultingArray.push(n/2);
  n = n/2;
              }
              else {
                  resultingArray.push(3*n + 1);
                  n = 3*n + 1;
              }
          }
      }
  }
  
  function problem() {
    let arrayOfLengths = [];
    for (let i = 2; i < 1000000; i++) {
      arrayOfLengths.push(collatzSequenceLength(i));
    }
    return arrayOfLengths.indexOf(bigOne(arrayOfLengths)) + 2;
  }
  
  problem(); //837799