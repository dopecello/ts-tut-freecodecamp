"use strict";
class User {
    constructor(email, name) {
        this.city = "";
        this.email = email;
        this.name = name;
    }
}
const william = new User('wcl@gmail.com', "william");
william.city = "Jax";
//MORE REAL_WORLD CASE TO WRITE THIS
class OtherUser {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this._courseCount = 1; //allows SubUser to inherit private classes from this class!
        this.city = "Jax";
    }
    deleteToken() {
        console.log("Token deleted");
    }
    get getAppleEmail() {
        return `apple${this.email}`; //this is what is known as a getter.
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("course count should be more than 1");
        }
        this._courseCount = courseNum;
    }
}
class SubUser extends OtherUser {
    constructor() {
        super(...arguments);
        // this class cannot inherit private access modifiers from OtherUser.
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 4;
    }
}
