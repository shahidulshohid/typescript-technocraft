{
    // inheritance --> oop
    // common class 
    class Person {
        name: string;
        age: number;
        address: string;
        constructor(name: string, age: number, address: string) {
            this.name = name;
            this.age = age;
            this.address = address;
        }
        getSleep(numOfHours: number){
            console.log(`${this.name} will sleep for ${numOfHours} hours`)
        }
    }
    // student
    class Student extends Person {
        constructor(name: string, age: number, address: string) {
            super(name, age, address);
        }
    }
    const student1 = new Student("shahidul", 30, "Bogura")
    student1.getSleep(6)
    
    //teacher
    class Teacher extends Person {
        designation: string;
        constructor(name: string, age: number, address: string, designation: string) {
            super(name, age, address)
            this.designation = designation;
        }
        takeClass(numOfClass: number){
            console.log(`${this.name} will take ${numOfClass}`)
        }
    }
    const teacher1 = new Teacher("teacher shahidul", 40, "Bogura", "professor")
    teacher1.takeClass(3)

    //
}