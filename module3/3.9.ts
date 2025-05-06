{
    // abstraction: 1.interface, 2.abstract

    // idea 
    interface Vehicle1 {
        startEngine(): void;
        stopEngine(): void;
        move(): void;
    }

    // real implementation
    class Car1 implements Vehicle1 {
        startEngine():void {
            console.log(`I am starting the car engine`)
        }
        stopEngine(): void {
            console.log(`I am stopping the car engine`)
        }

        move(): void {
            console.log(`I am moving the car`)
        }
        test(): void {
            console.log(`I am testing the car`)
        }
    }

    // const toyotaCar = new Car1()
    // toyotaCar.startEngine()
    // toyotaCar.stopEngine()
    // toyotaCar.move()
    // toyotaCar.test()

    //abstraction 
    // idea 
   abstract class car2 {
        abstract startEngine() : void 
        abstract stopEngine(): void 
        abstract move(): void 
        test(){
            console.log(`I am testing the car`)
        }
    }

    class ToyotaCar extends car2 {
        startEngine(): void {
            console.log(`I am starting the toyota car engine`)
        }
        stopEngine(): void {
            console.log(`I am stopping the toyota car engine`)
        }
        move(): void {
            console.log(`I am moving the toyota car`)
        }
    }

    // const hondaCar = new car2()
    // hondaCar.startEngine()

    //

}