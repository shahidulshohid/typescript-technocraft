{
// interface
type User1 = {
    name: string;
    age: number;
}

interface User2 {
    name: string;
    age: number;
}

type UserWithRoll1 = User1 & {
    roll: string;
}

interface UserWithRoll2 extends User2 {
    roll: string;
}

const user : UserWithRoll1 = {
    name: "shahidul",
    age: 30,
    roll: "123",
}

type RollNumber = number;

// js ---> object, array ---> object, function ---> object
type Roll1 = number[];

interface Roll2 {
    [index: number] : number;
}

const roll1 : Roll2 = [1, 2, 3]

type Add1 = (num1 : number, num2  : number) => number
interface Add2 {
    (num1 : number, num2  : number) : number
}

const add : Add2 = (num1, num2) => num1 + num2



//

}