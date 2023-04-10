function addTwo(num) {
    return num + 2
}

addTwo("5")  /* The first problem is that there is an 'any' inference */

function addToo(num: number) {
    num.toUpperCase()
    return num + 2
}

addToo("5")  /* Now it throws an error */

function getUpper(val: string) {
    return val.toUpperCase()
}
getUpper("four")


function signUpUser(name: string, email: string, password: string, isPaid: boolean) { }
signUpUser(1, 2, 3, 4)

let loginUser = (name: string, email: string, isPaid: boolean = false) => { }
loginUser("h", "h@h.com") // code is happy because I've made a literal type in the params


function addThree(num: number): number { /* with the type inference AFTER the parenthesis, it guarantees that this function returns a number */
    return "hello"
}
addThree(9)

function getvalue(myVal: number): boolean | string {
    if (myVal > 5) {
        return true
    }
    return "200 OK"
}

const getHello = (s: string): string => {
    return ""
}

const heros = ['thor', 'spiderman', 'ironman']
// const heros = [1, 2, 3]


heros.map((hero): string => {
    return `hero is ${hero}` /*TS can read the inference types of the array automatically  */
})

function consoleError(errmsg: string): void {
    console.log(errmsg);     /* the implicit return type is void, so it is good practice to show 
                                that inference in the code, especially with a team */
}

function handleError(errmsg: string): never {
    throw new Error(errmsg)
}
 // this 'never' type is great for error messages because this function will never ever return a value that will be observed. In a return type, this means that the function throws an exception or terminates the execution of the program.

export { }