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

class OtherUser {

    private _courseCount = 1

    readonly city: string = "Jax"
    constructor(
        public email: string,
        public name: string
    ) {
    }

    private deleteToken(){
        console.log("Token deleted");
    }
    
    get getAppleEmail(): string{
        return `apple${this.email}` //this is what is known as a getter.
    }

    get courseCount(): number {
        return this._courseCount
    }

    set courseCount(courseNum)/*: void */ { // will throw error if i set return type to void beacuse A 'set' accessor cannot have a return type annotation.  
        if (courseNum <= 1) {
            throw new Error("course count should be more than 1")
        }
        this._courseCount = courseNum
    }
} //produces same code in the dist folder essentially. syntax sugar. cleaner to me than using 'this'
