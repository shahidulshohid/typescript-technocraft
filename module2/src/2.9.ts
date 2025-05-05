{
    // conditional type

    type a1 = number;
    type b1 = number;

    type x = a1 extends null ? true : false; // conditional type
    type y = a1 extends null ? true: b1 extends undefined ? true : any;
    
    type sheikh = {
        bike: string;
        car: string;
        ship: string;
        plane: string;
    }
    
    // keyof sheikh "bike" | "car" | "ship"
    // car ase kina / bike ase kina / ship ase kina tractor ase kina 
    // type checkVehicle<T> = T extends "bike" | "car" | "ship" ? true : false;
    type checkVehicle<T> = T extends keyof sheikh ? true : false;
    type hasBike = checkVehicle<"bike">


    //
}