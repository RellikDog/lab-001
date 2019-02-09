'use strict';

const arithmetic = module.exports = {};

arithmetic.sum = (arr) => {
    if((typeof arr === 'object') && (arr[0])){
        let newArr = arr.reduce((acc, cur) => {
            if(typeof cur === 'number'){
                return acc += cur;
            }else {
                return acc;
            }
        }, 0);
        return newArr;
    }else {
        return null;
    }
};

arithmetic.subtract = (a, b) => {
    if((typeof a === 'number') && (typeof b === 'number')){
        return a - b;
    }else {
        return null;
    }
};

arithmetic.multi = (arr) => {
    if((typeof arr === 'object') && (arr[0])){
        let newArr = arr.reduce((acc, cur) => {
            if(typeof cur === 'number'){
                return acc = acc * cur;
            }else {
                return acc;
            }
        }, 1);
        return newArr;
    }else {
        return null;
    }
};

arithmetic.divide = (a, b) => {
    if((typeof a === 'number') && (typeof b === 'number')){
        if((a !== 0) && (b !== 0)){
            return a / b;
        }else{
            return 'Cannot divide by zero';
        }
    }else {
        return null;
    }
};
//
// if((typeof a === 'number') && (typeof b === 'number')){
//     return a * b;
// }else {
//     return null;
// }