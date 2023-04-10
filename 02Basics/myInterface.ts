interface User {
    readonly dbId: number
    email: string,
    userId: number
    googleId?: string
    startTrial: () => string
    getCoupon(couponName: string, value: number): number
}

interface User { //can redeclare same name 0_0 ... cant do this with a 'type' declaration.
    githubToken: string
}

interface Admin extends User {
    role: "admin" | "ta" | "learner" //just like classes, I get all the User params by using 'extends'
}

//interfaces is a basic overview of required params. Kinda like a 'class' but very superficial.

const william: Admin = {
    dbId: 232, email: "wcl@gmail.com", userId: 3232, githubToken: "github", role: "ta",
    startTrial: () => {
        return "trial started" //if i returned a number or something it would throw an error 
    },
    getCoupon: (name: 'will', value: 0) => {  //without the param it will yell at me
        return 56
    }
} //the method HAS to be inluded if part of the interface

william.email = 'sdf@gmail.com'


export { }