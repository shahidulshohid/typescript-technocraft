{
  // typeof --> type guard
  type AlphaNumeric = string | number;
  const add = (param1: AlphaNumeric, param2: AlphaNumeric): AlphaNumeric => {
    if (typeof param1 === "number" && typeof param2 === "number") {
      return param1 + param2;
    } else {
      return param1.toString() + param2.toString();
    }
  };

  const result1 = add(300, 200);
  console.log(result1);

  // in guard
  type NormalUser = {
    name: string;
  };
  type AdminUser = {
    name: string;
    roll: string;
  };
  const getUser = (user: NormalUser | AdminUser) => {
    if ("roll" in user) {
      console.log(`My name is ${user.name} my role is ${user.roll}`);
    } else {
      console.log(`My name is ${user.name}`);
    }
  };

  const normalUser: NormalUser = {
    name: "mr.normalUser bhi",
  };
  const adminUser: AdminUser = {
    name: "mr.adminUser bhi",
    roll : "admin",
  };
  getUser(normalUser)
  getUser(adminUser)

  //
}
