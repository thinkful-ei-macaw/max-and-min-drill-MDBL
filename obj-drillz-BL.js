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

let person1 = {
  name: 'Brandon',
  jobTitle: 'Web Developer'
};

let person2 = {
  name: 'Elizabeth',
  jobTitle: 'Server'
};

let person3 = {
  name: 'Kevin',
  jobTitle: 'Bartender'
};

let arrObj = [person1, person2, person3];

for(let i = 0; i < arrObj.length; i++){
  console.log(arrObj[i]);
}

person3.boss = 'Bar Manager';
person2.boss = 'Fred';

arrObj.forEach(arrObj => {
  if(arrObj.boss){
    console.log(`${arrObj.name} the ${arrObj.jobTitle} reports to ${arrObj.boss}`);
  } else {
    console.log(`${arrObj.name} the ${arrObj.jobTitle} doesn't have a boss.`);
  }
});

function createCharacter(name, nickname, race, origin, attack, defense) {
  let character = {
    name: `${name}`,
    nickname: `${nickname}`,
    race: `${race}`,
    origin: `${origin},
    attack: `${attack}`,
    defense: `${defense}`
  }
}