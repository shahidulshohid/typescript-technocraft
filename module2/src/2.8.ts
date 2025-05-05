{
    //promise
    // simulate 
    const createPromise = () => {
        return new Promise<boolean>((resolve, reject) => {
            const data:boolean = true;
            if(data){
                resolve(data)
            }
            else{
                reject("Failed to load data")
            }
        })
    }

    // calling create promise function
    const showData = async ():Promise<boolean> => {
        const data:boolean = await createPromise();
        return data
        // console.log(data)
    }
    showData()
    //
}