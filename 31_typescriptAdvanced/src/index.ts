// interface User {
//   name: string;
//   age: number;
// }

// function sumOfAge(user1: User, user2: User) {
//   return user1.age + user2.age;
// }

// const age = sumOfAge({ name: "Xyrix", age: 20 }, { name: "Xyz", age: 15 });
// console.log(age);

/*
//    Pick

interface User {
  id: number;
  name: string;
  email: string;
  createdAt: Date;
}

type UserProfile = Pick<User, "name" | "email">;

const displayUser = (user: UserProfile) => {
  console.log(`Name: ${user.name}, Email: ${user.email}`);
};

*/

//   Partial
/*
interface User {
    id: number;
    name: string;
    email: string;
    createdAt: Date;
}

type UserProfile = Pick<User, "name" | "email">;
type UpdateUserProfile = Partial<UserProfile>

*/

/* 

//  readonly

// type User = {
//   readonly name: string;
//   readonly age: number;
// };
// const user: User = {
//   name: "John",
//   age: 21,
// };

// OR

// type User = {
//   name: string;
//   age: number;
// };

// const user: Readonly<User> = {
//   name: "John",
//   age: 21,
// };
// user.age = 13;

*/