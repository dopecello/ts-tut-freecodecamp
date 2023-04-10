"use strict";
class User {
    constructor(email, name) {
        this.city = ""; //i wont get an error if I dont pass this into the constructor
        this.email = email;
        this.name = name;
    }
}
const william = new User('wcl@gmail.com', "william");
william.city = "Jax"; // <=== I shouldnt be able to do this. Thus, readonly. 
