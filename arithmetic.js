'use strict';

const arithmetic = module.exports = {};

arithmetic.sum = (a, b) => {
    if((typeof a === 'number') && (typeof b === 'number')){
        return a + b;
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

arithmetic.multi = (a, b) => {
    if((typeof a === 'number') && (typeof b === 'number')){
        return a * b;
    }else {
        return null;
    }
};

arithmetic.divide = (a, b) => {
    if((typeof a === 'number') && (typeof b === 'number') && (a !== 0) && (b !== 0)){
        return a / b;
    }else {
        return null;
    }
};