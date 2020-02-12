/* eslint-disable no-console */
// Create an object with five properties: foo, bar, fum, quux, and spam. Give each property a unique value of your choosing.
// Loop over the object using for ... in
// Use console.log to show each property name and its associated value.
'use strict';

const object = { foo : 1, bar: 3, fum: 5, quux: 7, spam: 9 };
for (const property in object) {
  console.log(`${property}: ${object[property]}`);
};


