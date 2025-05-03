{
  //spread operator
  //rest operator
  //destructuring

  //lear spread operation
  const bros1: string[] = ["Shahidul", "Alamin", "Amirul"];
  const bros2: string[] = ["Tonmoy", "Nahid", "Rahat"];
  bros1.push(...bros2);
  console.log(bros1);
  
  const mentors1 = {
    typeScript : "Mezba",
    redux : "Mir",
    dbms : "Mizan",
  }
  
  const mentors2 = {
    prisma : "Firoz",
    next : "Tonmoy",
    cloud : "Nahid",
  }
  
  const mentorList = {
    ...mentors1,
    ...mentors2,
  }

  const greedFriends = (...rest : string[]) => {
    return rest.forEach((element: string) => console.log(`Hello ${element}`))
  }
  greedFriends("abul", "kabul", "Habul", "ubul", "labul")

}
