const user: (string | number)[] = [1, 'wcl'] //doesnt matter the order

let tupUser: [string, number, boolean]; //this is how I get the types in a precise order
tupUser = ['wcl', 131, true] //if i didnt this in another order I would get an error

let rgb: [number, number, number] = [255, 255, 112, 0.5] //the opacity gives an error becuase its not in the tuple array

type User = [number, string]

const newUser: User = [112, 'william@gmail.com']

newUser[1] = 'wcl@gmail.com' //this will override the 1 index of newUser

newUser.push(true) //can't pass this , but it used to be the case that you could 
//link to issue is here https://github.com/microsoft/TypeScript/issues/6325

export {}