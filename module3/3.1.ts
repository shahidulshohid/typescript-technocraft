{
    // oop ---> class
    // class Animal {
    //     name: string;
    //     species: string;
    //     sound: string;
    //     constructor(name: string, species: string, sound: string) {
    //         this. name = name;
    //         this. species = species;
    //         this. sound = sound;
    //     }
    //     makeSound(){
    //         console.log(`The ${this.name} says ${this.sound}`)
    //     }
    // }
    // const dog = new Animal("German shepard bhi", "Dog", "Ghew Ghew")
    // const cat = new Animal("Persian cat", "Cat", "Mew Mew")
    // dog.makeSound()

    // write these codes more easy and simple and also clean by parameters properties 
    class Animal {
        constructor(public name: string, public species: string, public sound: string) {}
        makeSound(){
            console.log(`The ${this.name} says ${this.sound}`)
        }
    }
    const dog = new Animal("German shepard bhi", "Dog", "Ghew Ghew")
    dog.makeSound()

    


    //
}