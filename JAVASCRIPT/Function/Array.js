// const person = {
//   name: "Zoloo",
//   age: "Infinite",
//   firstName: "Zen",
// };
// const array = ["Hello", person];
// console.log(person.firstName);

const person = {
  classInfo: {
    classNumber: 401,
    teacherName: ["Dashka", "Duluu", "Boloroo"],
    imacNumber: "5D",
  },
  name: "Zoloo",
};

console.log(
  "Teacher Name - >",
  person.classInfo.teacherName[0],
  person.classInfo.teacherName[1],
  person.classInfo.teacherName[2]
);
console.log("My name ->", person.name);
console.log("Angiin dugaar ->", person.classInfo.classNumber);
console.log("Imac Number ->", person.classInfo.imacNumber);

// 1. Array -n 2dah elementiig hevelne uu

const array4 = [10, 20, 30, 40, 50];
console.log(array4[1]);

// 2. object dotor baigaa array-g hevelne uu

const person3 = { name: "Alice", friends: ["Bob", "Charlie"] };
console.log(person3.friends[0], person3.friends[1]);

// 3. New York iig songoj hevlene uu

const person2 = { name: "Alice", address: { city: "New York", zip: 10001 } };
console.log(person2.address.city);

// 4. 2D array -s 6 toog songoj hevelne uu

const array2D = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(array2D[1][2]);
