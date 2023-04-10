class User {
    public email: string; //using public will make it so that I can access this outside the class.
    private name: string; //using private ensures that this param can only be accessed within the class.
    readonly city: string = ""
    constructor(email: string, name: string) {
        this.email = email;
        this.name = name
    }
}

const william = new User('wcl@gmail.com', "william")
william.city = "Jax" // <=== I shouldnt be able to do this. Thus, readonly. 


//MORE REAL_WORLD CASE TO WRITE THIS

class Other {
    readonly city: string = "Jax"
    constructor(
        public email: string,
        public name: string
    ) {

    }
} //produces same code in the dist folder essentially. syntax sugar. cleaner to me than using 'this'
