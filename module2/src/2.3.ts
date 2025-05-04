{
  // generic type

//   type Generic = Array<boolean>;
    type Generic<T> = Array<T>

  // const rollNumbers : number[] = [1, 2, 3, 4, 5]
  //  const rollNumbers : Array<number> = [1, 2, 3, 4, 5]
  //  const rollNumbers : Generic = [1, 2, 3, 4, 5]
   const rollNumbers : Generic<number> = [1, 2, 3, 4, 5]

  //  cosnt mentors : string[] = ["shahidul", "alamin", "amirul"]
  //  const mentors : Array<string> = ["shahidul", "alamin", "amirul"]
  //  const mentors : Generic = ["shahidul", "alamin", "amirul"]
   const mentors : Generic<string> = ["shahidul", "alamin", "amirul"]

  //  const  booleanArray : boolean[] = [true, false, true]
  //  const booleanArray : Array<boolean> = [true, false, true]
//    const booleanArray: Generic = [true, false, true];
   const booleanArray: Generic<boolean> = [true, false, true];

   const user : Generic<{name: string, age: number}> = [
    {
        name: "shahidul",
        age: 30,
    },
    {
        name: "alamin",
        age: 50,
    },
   ]

  //Generic tuple
  type GenericTuple<x, y> = [x, y]
  const manus : GenericTuple<string, string> = ['shahidul', "alamin"]
//   const userWithId : GenericTuple<string, number>= ["shahidul" , 123]
  const userWithId : GenericTuple<number, {name: string, email: string}> = [234, {name: "shahidul", email: "shahidul@gmail.com"}]
}
