"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "William",
    email: "william@gmail.com",
    isActive: true
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
var newUser = { name: "William", isPaid: false, email: "william@gmail.com" };
createUser(newUser); // here, I'm allowed to pass an email as an additional param without declaring it within the createUser() function. This is a weird behavior.
function createCourse() {
    return { name: "react", price: 3.99 };
}
function createOtherUser(user) {
    return { name: "", email: "", isActive: true };
}
var myUser = {
    _id: "1234",
    name: "w",
    email: "william@gmail.com",
    isActive: false
};
createOtherUser({ _id: "1234", name: "", email: "", isActive: true }); //accepts no credit card info
