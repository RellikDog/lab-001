'use strict';
const greet = require('./../greet');
const arithmetic = require('./../arithmetic');

describe('#greet.test.js', () => {
    test('when greet passed non-string return null', () => {
    //arrange
    let obj = {};
        //act
        // assert
        expect(greet.sayHello(obj)).toBeFalsy();
    });
    test('when passed a string print hello string', () => {
        expect(greet.sayHello('world')).toEqual('hello world');
    });
});

describe('#sum.test.js', () => {
    test('test sum with proper inputs', () => {
        expect(arithmetic.sum(2, 2)).toEqual(4);
    });
    test('test sum with improper inputs', () => {
        expect(arithmetic.sum(1, isNaN())).toBeFalsy();
    });
});
describe('#subtract.test.js', () => {
    test('test subtract with proper inputs', () => {
        expect(arithmetic.subtract(3, 2)).toEqual(1);
    });
    test('test subtract with improper inputs', () => {
        expect(arithmetic.subtract(1, isNaN())).toBeFalsy();
    });
});
describe('#multiply.test.js', () => {
    test('test multiply with proper inputs', () => {
        expect(arithmetic.multi(3, 3)).toEqual(9);
    });
    test('test multiply with improper inputs', () => {
        expect(arithmetic.multi(1,  isNaN())).toBeFalsy();
    });
});
describe('#divide.test.js', () => {
    test('test divide with proper inputs', () => {
        expect(arithmetic.divide(10, 2)).toEqual(5);
    });
    test('test if divide is passed 0', () => {
        expect(arithmetic.divide(4, 0)).toBeFalsy();
    });
    test('test multiply with improper inputs', () => {
        expect(arithmetic.multi(10,  isNaN())).toBeFalsy();
    });
});