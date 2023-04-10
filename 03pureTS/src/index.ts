class User {
    email: string;
    name: string;
    readonly city: string = "" //i wont get an error if I dont pass this into the constructor
    constructor(email: string, name: string) {
        this.email = email;
        this.name = name
    }
}

const william = new User ('wcl@gmail.com',"william")
william.city = "Jax" // <=== I shouldnt be able to do this. Thus, readonly. 
 