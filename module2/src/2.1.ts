{
// type assertion
let anything: any;
anything = "Next level web development";
anything = 22;
// (anything as number).

const kgToGm = (value: string | number) : string | number | undefined => {
    if(typeof value === "string") {
        const convertedValue = parseFloat(value) * 1000;
        console.log(`The converted value is : ${convertedValue}`)
    }
    if(typeof value === "number") {
        return value * 1000;
    }
}
const result1 = kgToGm(1000) as number;
const result2 = kgToGm("1000") as string;

type ErrorMessage = {
    message : string;
}
try {
    
} catch (error) {
    console.log((error as ErrorMessage).message)
}

//  
}