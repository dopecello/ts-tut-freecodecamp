"use strict";
const score = [];
const names = [];
function identityOne(val) {
    return val;
} // I can narrow this, but doesnt cut through the problem were facing, especially with string.
function identityTwo(val) {
    return val; //loses information in this way, we don't know what we are returning. plus, any is cringe!!
}
function identityThree(val) {
    return val;
} // this is still kind of like any. ready to accept numbers, string, w.e, but this value is logged.
identityThree(3); //hover this
identityThree('3'); // and this
function identityFour(val) {
    return val;
}
identityFour(Object.assign({}, )); //this is the sytnax if i created my own.
function getSearchProducts(products) {
    // do some db ops
    const myIndex = 3;
    return products[myIndex]; //this is correct because the return is locked by the input. has to be an array
}
const getMoreSearchProducts = (products) => {
    // do db ops
    const myIndex = 4;
    return products[myIndex];
}; // generic function but in an arrow function.
function anotherFunction(valOne, valTwo) {
    return {
        valOne,
        valTwo
    };
}
// could be a class that handles common cases
class Sellable {
    constructor() {
        this.cart = [];
    }
    addtoCart(product) {
        this.cart.push(product);
    }
}
