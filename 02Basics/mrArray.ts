const superHeros = []

superHeros.push("spiderman") //this throws a 'never' type!!


const correctSuperHero: string[] = []
const heroPower: Array<number> = [] //this is also correct


correctSuperHero.push("spiderman") //correct syntax, same with numbers

type User = {
    name: string
    isActive: boolean
}

const allUsers: User[] = []

allUsers.push({name: "", isActive: true})

const MLModels: number[][] = [
    [255, 255, 255],
    [2134, 234, 234234]
] //syntax for and array of number arrays

export { }