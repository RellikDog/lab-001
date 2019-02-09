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
        let arr = [1, [], 2, 'four', 3, true];
        expect(arithmetic.sum(arr)).toEqual(6);
    });
    test('test sum with improper inputs', () => {
        expect(arithmetic.sum(6)).toBeFalsy();
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
        let arr = [2, true, 'iloveyou', 4, 3];
        expect(arithmetic.multi(arr)).toEqual(24);
    });
    test('test multiply with improper inputs', () => {
        let arr2 = {};
        expect(arithmetic.multi(arr2)).toBeFalsy();
    });
});
describe('#divide.test.js', () => {
    test('test divide with proper inputs', () => {
        expect(arithmetic.divide(10, 2)).toEqual(5);
    });
    test('test if divide is passed 0', () => {
        expect(arithmetic.divide(4, 0)).toEqual('Cannot divide by zero');
    });
    test('test multiply with improper inputs', () => {
        expect(arithmetic.multi(10,  isNaN())).toBeFalsy();
    });
});