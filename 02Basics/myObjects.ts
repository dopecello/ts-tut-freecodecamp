const User = {
    name: "William",
    email: "william@gmail.com",
    isActive: true
}

function createUser({name: string, isPaid: boolean}) {}

let newUser = {name: "William", isPaid: false, email: "william@gmail.com"}

createUser(newUser) // here, I'm allowed to pass an email as an additional param without declaring it within the createUser() function. This is a weird behavior.

function createCourse(): {name: string, price: number}{
    return {name: "react", price: 3.99}
}



//TYPE ALIASES

type User = {
    readonly _id: string; //readonly makes this param non-editable
    name: string;
    email: string;
    isActive: boolean;
    creditCardDetails?: number //not everyone might have this! we pass a ? to satisfy this
}

function createOtherUser(user: User){
    return {name: "", email: "", isActive: true}
}

let myUser: User = {
    _id: "1234",
    name: "w",
    email: "william@gmail.com",
    isActive: false
}

createOtherUser({_id: "1234", name: "", email: "", isActive: true}) //accepts no credit card info


type cardNumber = {
    cardNum: string
}

type cardDate = {
    cardDate: string
}

type cardDetails = cardNumber & cardDate & {  //defining a type based off previous two type
    cvv: number //adding something not found in the other two types
}
 
//



export {}