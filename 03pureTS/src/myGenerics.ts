const score: Array<number> = []
const names: Array<string> = []

function identityOne(val: boolean | number): boolean | number {
    return val
} // I can narrow this, but doesnt cut through the problem were facing, especially with string.

function identityTwo(val: any): any {
    return val //loses information in this way, we don't know what we are returning. plus, any is cringe!!
}

function identityThree<Type>(val: Type): Type {
    return val
} // this is still kind of like any. ready to accept numbers, string, w.e, but this value is logged.

identityThree(3) //hover this
identityThree('3')// and this

function identityFour<T>(val: T): T { //we can name this anything, including T
    return val
}

interface Bottle {
    brand: string,
    type: number
}

identityFour<Bottle>({...}) //this is the sytnax if i created my own.

function getSearchProducts<T>(products: T[]): T {
    // do some db ops
    const myIndex = 3
    return products[myIndex] //this is correct because the return is locked by the input. has to be an array
}

const getMoreSearchProducts = <T,>(products: T[]): T => {
    // do db ops
    const myIndex = 4
    return products[myIndex]
} // generic function but in an arrow function.

//you will commonly get a <T,> syntax because sometimes this tag can be confused for HTML/JSX. In professional codebases
//this is a common notation. It will not product an error.

interface Database {
    connection: string,
    username: string,
    password: string
}

function anotherFunction<T, U extends Database>(valOne: T, valTwo: U): object {
    return {
        valOne,
        valTwo
    }
}

// anotherFunction(3, {with all the params})

// USING CLASS TYPES IN GENERICS

interface Quiz{
    name: string,
    type: string,
}

interface Course{
    name: string,
    author: string,
    subject: string
}

// could be a class that handles common cases

class Sellable<T>{
    public cart: T[] = []
    addtoCart(product: T){
        this.cart.push(product)
    }
}