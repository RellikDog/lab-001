'use strict';

const greet = module.exports = {};

greet.sayHello = (name) => {
    if(typeof name === 'string') {
        return `hello ${name}`;
    }else {
        return null;
    }
};
