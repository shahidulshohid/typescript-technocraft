{
    // utility types
    
    type Person = {
        name: string;
        age: number;
        email?: string;
        contactNo: string;
    }
    
    //Pick
    type NameAge = Pick<Person, "name" | "age">

    //Omit
    type ContactInfo = Omit<Person, "name" | "age">

    // Required 
    type PersonRequired = Required<Person>

    //Partial 
    type PersonPartial = Partial<Person>

    //Readonly
    type PersonReadonly = Readonly<Person>
    const person1 : PersonReadonly = {
        name: "shahidl",
        age:30,
        contactNo: "017"
    }
    person1.name = 'alamin'

    // //Record 
    // type MyObj = {
    //     a: string;
    //     b: string;
    // }
    const EmptyObj : Record<string, unknown> = {}

    type MyObj = Record<string, number>
    const obj1 : MyObj = {
        a: "aa",
        b: "bb",
        c: 'cc',
        d: "dd",
        e: 9
    }

    //
}