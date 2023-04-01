// const person: {
//   name: string;
//   age: number;
// } = {
//   name: "Maximilian",
//   age: 30,
// };
var person = {
    name: "Maximilian",
    age: 30,
    hobbies: ["Sports", "Cooking"],
    role: [2, "author"],
};
// person.role.push("admin");  // push()는 Tuple에서 허용됨
// person.role[1] = 10;  // !!!ERROR!!!
// person.role = [];  // !!!ERROR!!! 배열 길이에 대한 제한
var favoriteActivities;
favoriteActivities = ["Sports"];
console.log("person.name : ".concat(person.name));
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log("hobby : ".concat(hobby.toUpperCase()));
    // console.log(hobby.map(()));  // !!!ERROR!!!
}
