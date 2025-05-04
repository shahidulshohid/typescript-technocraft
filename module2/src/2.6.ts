{
  // constrained generics
  const addCourseToStudent = <
    T extends { name: string; email: string; id: number }
  >(
    student: T
  ) => {
    const course = "Next level web development";
    return {
      ...student,
      course,
    };
  };
  const student3 = addCourseToStudent({
    id: 111,
    name:"mr.z",
    email: "mr.z@gmail.com",
    emni: "emni",
  });
  const student1 = addCourseToStudent<{
    id: number;
    name: string;
    email: string;
    devType: string;
  }>({
    id: 222,
    name: "ashik",
    email: "ashik@gmail.com",
    devType: "NLWD",
  });
  const student2 = addCourseToStudent({
    id: 333,
    name: "y",
    email: "y@gmail.com",
    hasWatch: "apple watch",
  });

  //
}
