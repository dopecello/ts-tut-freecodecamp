let score: number | string = 33

score = 44
score = "55"

type User = {
    name: string;
    id: number
}

type Admin = {
    username: string;  // pases username instead of name
    id: number
}

let william: User | Admin = {
    name: "william",
    id: 334
}

william = {username: "dopecello", id: 298374} // doesnt throw error when I add a username because of the union


function getDbId(id: number | string){
    //making some API calls
    console.log(`Db id is ${id}`);
} 
getDbId(3)
getDbId("3")

function getDbIdNarrow(id: number | string){
    id.toLowerCase() //throws error because I cant call this method on a number. will have to narrow
}

function getDbIdNarrowed(id: number | string){
  if(typeof id === "string") {
    id.toLowerCase()
  } else if (typeof id === "number") {
    id.toFixed()
  }
} // hover over id on both lines and see the difference. also gives me intellisense 

//ARRAY UNIONS

const data: number[] = [1, 2, 3]
const data2: string[] = ['1', '2', '3']
const data3: string[] | number[] = ['1', 2, '3'] // this is common mistake...

const correctData3: (string | number)[] = ['1', 2, '3'] //nice!


let seatAllotment: "aisle" | "middle" | "window"

seatAllotment = "aisle"
seatAllotment = "crew" //because it wasn't in the list of strings in the union