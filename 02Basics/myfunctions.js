"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
}
addTwo("5"); /* The first problem is that there is an 'any' inference */
function addToo(num) {
    num.toUpperCase();
    return num + 2;
}
addToo("5"); /* Now it throws an error */
function getUpper(val) {
    return val.toUpperCase();
}
getUpper("four");
function signUpUser(name, email, password, isPaid) { }
signUpUser(1, 2, 3, 4);
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
loginUser("h", "h@h.com"); // code is happy because I've made a literal type in the params
function addThree(num) {
    return "hello";
}
addThree(9);
function getvalue(myVal) {
    if (myVal > 5) {
        return true;
    }
    return "200 OK";
}
var getHello = function (s) {
    return "";
};
var heros = ['thor', 'spiderman', 'ironman'];
// const heros = [1, 2, 3]
heros.map(function (hero) {
    return "hero is ".concat(hero); /*TS can read the inference types of the array automatically  */
});
function consoleError(errmsg) {
    console.log(errmsg); /* the implicit return type is void, so it is good practice to show
                                that inference in the code, especially with a team */
}
function handleError(errmsg) {
    throw new Error(errmsg);
}
