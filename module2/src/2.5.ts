{
    // function with generics

    // const createArray = (params: string) : string[] => {
    //     return [params]
    // }
    // const createArrayWithGenerics = <T>(params: T ) : T[] => {
    //     return [params]
    // }

    // const res1 = createArray("Bangladesh")
    // const res2 = createArrayWithGenerics<boolean>(true)
    // type User = {id: number, name: string}
    // const resGenericObject = createArrayWithGenerics<User>({id: 333, name: "shahidul"})

    const createArrayWithGenericsTuple = <T, Q>(params1: T, params2: Q ) : [T, Q] => {
        return [params1, params2]
    }

    const res10 = createArrayWithGenericsTuple<string, number>("Bangladesh", 2332)
    const res11 = createArrayWithGenericsTuple<string, {name:string}>("Bangladesh", {name: "asia"})

    const addCourseToStudent = <T>(student: T) => {
        const course = "Next level web development"
        return {
            ...student,
            course,
        }
    }
    const student1 = addCourseToStudent({name: "ashik", email: "ashik@gmail.com", devType: "NLWD"})
    const student2 = addCourseToStudent({name: "y", email: "y@gmail.com", hasWatch: "apple watch"})



    //
}