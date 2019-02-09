'use strict';
const faker = require('faker');
const greet = require('./greet');
const arithmetic = require('./arithmetic');

console.log(greet.sayHello(faker.internet.userName()));
let a = faker.random.number();
let b = faker.random.number();
let c = faker.random.number();
console.log(`The sum of ${a}, ${b}, and ${c} is ${arithmetic.sum([a,b,c])}`);
console.log(`${a} minus ${b} is equal to ${arithmetic.subtract(a, b)}`);
console.log(`${a} times ${b} times ${c} is equal to ${arithmetic.multi([a, b, c])}`);
console.log(`${a} divided by ${c} equals ${arithmetic.divide(a,c)}`);