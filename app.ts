// const person: {
//   name: string;
//   age: number;
// } = {
//   name: "Maximilian",
//   age: 30,
// };

const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: "Maximilian",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: [2, "author"],
};

// person.role.push("admin");  // push()는 Tuple에서 허용됨
// person.role[1] = 10;  // !!!ERROR!!!
// person.role = [];  // !!!ERROR!!! 배열 길이에 대한 제한

let favoriteActivities: string[];
favoriteActivities = ["Sports"];
console.log(`person.name : ${person.name}`);

for (const hobby of person.hobbies) {
  console.log(`hobby : ${hobby.toUpperCase()}`);
  // console.log(hobby.map(()));  // !!!ERROR!!!
}
