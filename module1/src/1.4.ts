// basic data type 
// string 
let firstName: string = "shahidul";

// number 
let roll: number = 123;

//boolean 
let isAdmin: boolean = true;

// undefined
let x: undefined = undefined;

//null
let y:null = null;

//any we should avoid using any
let d: number 
d = 123;

//Array
let friends : string[] = ["rachel, monica"]
friends.push('shahidul')// ok
friends.push(123)// error

let eligibleRollList : number[] = [1, 2, 3]
eligibleRollList.push(123)// ok
eligibleRollList.push('shahidul')// error

//tuple --> array --> order --> type of values
let coordinates : [number, number] = [1, 2]

let ageName : [number, string, boolean] = [3, "shahidul", true]