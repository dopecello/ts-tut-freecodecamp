"use strict";
class User {
    constructor(email, name) {
        this.city = "";
        this.email = email;
        this.name = name;
    }
}
const william = new User('wcl@gmail.com', "william");
william.city = "Jax"; // <=== I shouldnt be able to do this. Thus, readonly. 
//MORE REAL_WORLD CASE TO WRITE THIS
class OtherUser {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this._courseCount = 1;
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
} //produces same code in the dist folder essentially. syntax sugar. cleaner to me than using 'this'
