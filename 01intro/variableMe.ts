let greetings: string = "Hello William";

greetings.toUpperCase()
console.log(greetings);


//PRIMITIVE TYPES// 

// number
let userId: number = 224466.3 /* even with decimals liek .3 this works */

// boolean
let isLoggedIn: boolean = false

// This way of inferencing types is not a great practice because it is too obvious and redundant.
isLoggedIn /* if you hover over this, if will have the inference automatically */

// any
let hero;
function getHero(){
    return "thor" /* I can return anything here... and that is a problem */
}
hero = getHero()
//TS documentation states that you can use the 'any' type whenever you dont want a particular value to cause typechecking errors. You can do anything syntactically legal with this type
//we can throw a noImplicitAny compiler flag to make sure that all the 'any' types get thrown as errors.



export {}