{
    // nullable types / unknown types

    const searchName = (value:string | null) => {
        if(value) {
            console.log("searching")
        }
        else {
            console.log("There is nothing to search")
        }
    }
    // searchName(null)
    
    //unknown typeof
    const getSpeedInMetersPerSecond = (value:unknown) => {
        if(typeof value === 'number') {
            const convertedSpeed = (value * 1000) / 3600;
            console.log(`The speed is ${convertedSpeed} ms^-1`)// after sending number this run
        }

        else if(typeof value === "string") {
            const [result, unit] = value.split(" ")
            const convertedSpeed = (parseFloat(result) * 1000) / 3600;
            console.log(`The speed is ${convertedSpeed} ms^-1`)// after sending string this run
        }
        else {
            console.log("Wrong Input")
        }
        
    }
    getSpeedInMetersPerSecond(null)

    // never type 
    const throwError = (mgs: string):never =>{
        throw new Error(mgs)
    }
    throwError("Moshkil se error hogaya")


    //
}