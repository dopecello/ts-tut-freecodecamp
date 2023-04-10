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
william.city = "Jax"  


//MORE REAL_WORLD CASE TO WRITE THIS

class OtherUser {

    protected _courseCount = 1 //allows SubUser to inherit private classes from this class!

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

    set courseCount(courseNum) {   
        if (courseNum <= 1) {
            throw new Error("course count should be more than 1")
        }
        this._courseCount = courseNum
    }
} 

class SubUser extends OtherUser {
    // this class cannot inherit private access modifiers from OtherUser.
    isFamily: boolean = true
    changeCourseCount(){
        this._courseCount = 4
    }
}