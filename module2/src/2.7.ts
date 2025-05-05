{
    //generic constrain keyof operator
    type Vehicle = {
        bike: string;
        car: string;
        ship: string;
    }

    type Owner = "bike" | "car" | "ship" //manually
    type Owner2 = keyof Vehicle


    
    const getPropertyValue = <x, y extends keyof x >(obj: x, key: y) => {
        return obj[key]
    }
    
    const user = {
        name: "shahidul",
        age: 333,
        address: "Bogura"
    }
    const car = {
        model: "shahidul",
        year: 2022,
    }

    const result1 = getPropertyValue(car, "model") 

    // user['age']

    //
}