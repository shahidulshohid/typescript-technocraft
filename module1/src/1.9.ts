{

    // type alias 

    type Student = {
        name: string,
        age: number,
        gender: string,
        contactNo?: string,
        address?: string,
    }
    const student1 : Student = {
        name: "shahidul",
        age: 30,
        gender: "male",
        contactNo: "01700000000",
        address: "Uganda"
    }

    const student2 : Student = {
        name: "alamin",
        age: 35,
        gender: "male",
        address: "dhaka",
    }

    type User = string;
    const user : User = "shahidul";
    type IsAdmin = boolean;
    const isAdmin : IsAdmin = true;
    
    type Add = (num1 : number, num2 : number) => number
    const add : Add = (num1, num2) => num1 + num2


}