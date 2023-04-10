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
class Other {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this.city = "Jax";
    }
} //produces same code in the dist folder essentially. syntax sugar. cleaner to me than using 'this'
