'use strict';


function max(numbers){
  let i = 0;
  let currentMax = numbers[0];
  while(i < numbers.length){
    if(numbers[i] > currentMax){
      currentMax = numbers[i];
    }
    i++;
  }
  return currentMax;
}
  
// eslint-disable-next-line no-console
console.log(max([0, 1, 2, 3, 4, 55, 10, 8]));