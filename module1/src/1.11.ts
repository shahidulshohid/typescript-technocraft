{
//ternary operator || optional chaining || nullish coalescing operator

const age: number = 18;
// if(age >= 18){
//     console.log("adult")
// }
// else {
//     console.log("not adult")
// }

const isAdult = age >= 18 ? "adult" : "not adult"
// console.log({isAdult})

//nullish coalescing operator
//null or undefined ------> decision making

const authenticated = "";
const result1 = authenticated ?? "Guest";
const result2 = authenticated ? authenticated : "Guest"
console.log({result1}, {result2})

type User = {
    name: string;
    address: {
        city: string;
        road: string;
        presentAddress: string;
        permanentAddress?: string;
    }
}
const user: User = {
    name: "shahidul",
    address: {
        city: "Bogura",
        road: "kanojgary",
        presentAddress: "Bogura town",

    }
}
const permanentAddress = user?.address?.permanentAddress ?? "No permanent address";
console.log({permanentAddress})


}