/* eslint-disable no-console */
'use strict';

// eslint-disable-next-line no-unused-vars
let loaf = {
  flour: 300,
  water: 240,
  hydration: function() {
    return (this.water / this.flour * 100);
  }
};

console.log(loaf.hydration());

let myOddObj = {
  foo: true,
  bar: 120,
  fum: 'yum',
  quux: 'wtf?',
  spam: 'yams'
};

for(let key in myOddObj){
  console.log(`Property: ${key} Value: ${myOddObj[key]}`);
}

let food = {
  meals: ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper']
};

console.log(food.meals[3]);