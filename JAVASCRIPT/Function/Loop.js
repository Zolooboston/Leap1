// let sum = 0;

// for (let index = 0; index <= 5; index++) {
//   debugger;
//   sum += index; //sum=sum+index
//   break;
// }

// // console.log(sum);

// // 0 1 2 3 4 5
// // for (let i = 1; i <= 5; i++) {
// //   debugger;
// //   if (i % 2 == 1) {
// //     console.log(i);
// //   }
// // }

// const array = ["BMW", "Benz", "Volvo", "Ford", "Hello"];
// const str = "Hello";

// // console.log(array.length);
// for (let i = 0; i <= array.length - 1; i++) {
//   debugger;
//   console.log(array[i]);
// }

// 1. Console numbers from 1 to 10 .
// 1 -> 10 хүртэлх тоог хэвлэнэ үү .
// for example :  1, 2, 3, 4, 5, 6, 7, 8, 9, 10

for (let number = 1; number <= 10; number++) {
  //   debugger;
  console.log(number);
  //   break;
}

// 2. Console numbers from 10 to 1 .
// 10 -> 1 хүртэлх тоог хэвлэнэ үү
// for example :  10, 9, 8, 7, 6 ... 1

for (let index = 10; index >= 1; index--) {
  //   debugger;
  console.log(index);
}

// 3. Sum of Numbers. Write a for loop that calculates the sum of numbers from 1 to 10.
// 1-10 хүртэлх тооний нийлбэрийг олно уу.

let sum = 0;
for (let index = 1; index <= 10; index++) {
  // debugger;
  sum += index;
}
console.log(sum);

// 4. Console sum of even numbers 1 to 20 .
// 1 -> 20 хоорондох тэгш тоонуудын нийлбэрийг хэвлэнэ үү .

let evenSum = 0;
for (let index = 1; index <= 20; index++) {
  if (index % 2 == 0) evenSum += index;
  //   debugger;
}
console.log("Even Sum", evenSum);

// 5. Console a square of stars (*) .
// (*) Од ашиглан дөрвөлжинг хэвлэнэ үү .
// for example :
// *****
// *****
// *****
// *****

// Creating variable
let line = "";
//Function for printing square star pattern
function square(n) {
  // First loop for row
  for (let i = 1; i <= n; i++) {
    line += "* ";
  }
  // Second loop for column
  for (let j = 1; j <= n; j++) {
    console.log(line);
  }
}
let size = 5;
// Calling function for printing pattern
square(size);
console.log("----------------");

for (let s = 1; s <= 5; s++) {
  console.log("* * * * *");
}
console.log("----------------");

let size1 = 3;
for (let i = 0; i < size; i++) {
  debugger;
  let row = ""; // outer loop
  for (let j = 0; j < size; j++) {
    row += "* ";
  }
  console.log(row);
}
console.log("===============");
// 6.
// (*) Од ашиглан доорх дүрсийг хэвлэнэ үү .
// for example :
// *
// **
// ***
// ****
// *****

let star = "* ";
let stars = "* ";
for (let i = 0; i <= 4; i++) {
  console.log(stars);
  stars = star + stars;
}
console.log("----------------");

for (let i = 1; i <= 5; i++) {
  let stars = "";
  for (let j = 1; j <= i; j++) {
    stars += "* ";
  }
  console.log(stars);
}
console.log("=============");
// 7.Calculate given number to power .
// Өгөгдсөн тоог тухайн зэрэгт дэвшүүлнэ үү .
// input : number = 6  degree=10
// for example : 60466176

let number = 6;
let degree = 10;
let result = 1;
for (let x = 1; x <= degree; x++) {
  result *= number;
}
console.log(result);

// 8.Calculate average of numbers from 12 to 36 .
// 12 -> 36 хүртэлх тоонуудын дунджийг ол .
// for example : 24

let averageSum = 0;
let count = 0;
for (let i = 12; i <= 36; i++) {
  averageSum += i;
  count++;
}
let average = averageSum / count;

console.log("The sum of numbers from 12 to 36 is:", averageSum);
console.log("The count of numbers from 12 to 36 is:", count);
console.log("The average of numbers from 12 to 36 is:", average);

// 9.Sum of odd and even numbers from 11 to 50 .
// 11 -> 50 хүртэлх тоонуудын тэгш болон сондгой тоонуудын нийлбэрийг ол .
// for example : sumOdd = 600, sumEven = 620

let sumOdd = 0;
let sumEven = 0;

for (let i = 11; i <= 50; i++) {
  if (i % 2 === 0) {
    sumEven += i;
  } else {
    sumOdd += i;
  }
}
console.log("Sum of odd numbers from 11 to 50:", sumOdd);
console.log("Sum of even numbers from 11 to 50:", sumEven);

// 10.Iterate through all numbers from 1 to 45. Print the following: For multiples of 3 print “Fizz” , For multiples of 5 print “Buzz” , For multiples of 3 and 5 print “FizzBuzz”
// 1 - 45 хүртэлх тоонуудын давталт гүйлгэж 3д хуваагдаж байвал “Fizz” , 5д хуваагдаж байвал “Buzz” , 3 болон 5д хуваагдаж байвал “FizzBuzz” гэж хэвлэнэ үү .
// for example : number = 6 // Fizz , number = 8 // empty , number = 15 // FizzBuzz

for (let i = 1; i <= 45; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(i, "Fizzbuzz");
  } else if (i % 3 === 0) {
    console.log(i, "Fizz");
  } else if (i % 5 === 0) {
    console.log(i, "Buzz");
  } else {
    console.log(i);
  }
}

// 11.Check the fifth power of given number is greater than 10000 .
// Тооны таван зэрэг нь 10000-аас дээш эсэхийг шалгана уу .
// for example :
//      5 * 5 * 5 * 5 * 5 = 3125 // it is less than 10000
//      8 * 8 * 8 * 8 * 8 = 32768 // it is greater than 10000

let num = 5;
let result2 = 1;

for (let i = 0; i < num; i++) {
  result2 *= num;
}
if (result2 > 10000) {
  console.log(`${num} ^ ${num} = ${result2} // it is greater than 10000`);
} else {
  console.log(`${num} ^ ${num} = ${result2} // it is less than 10000`);
}
// function powerOfFifth (num) {
//    let result2=1;
//   for ()
// }

// 12. Given an array of objects representing people with their ages, write a for loop to calculate the total age.
// Өгөгдсөн утгаас насны нийлбэрийг олно уу.

// const people = [
//     { name: 'Alice', age: 25 },
//     { name: 'Bob', age: 30 },
//     { name: 'Charlie', age: 35 },
//     { name: 'David', age: 40 }
//   ];

// 13. Find Person by Name. Given an array of objects representing people, write a for loop to find a person by name.
// Хүмүүсийг төлөөлж буй объектуудын array өгөгдсөн бол хүнийг нэрээр нь олохын тулд for давталт бичнэ үү.
// const people = [
//     { name: 'Alice', age: 25 },
//     { name: 'Bob', age: 30 },
//     { name: 'Charlie', age: 35 },
//     { name: 'David', age: 40 }
//   ];

// 14. Calculate Average Price. Given an array of objects representing items, write a for loop to calculate the average price of the items.
// дундаж үнийг тооцоолно уу.
// const items = [
//     { name: 'Book', price: 15 },
//     { name: 'Pen', price: 2 },
//     { name: 'Notebook', price: 5 },
//     { name: 'Bag', price: 30 }
//   ];

//Sum Positive Even Number
const array = [2, -3, 5, 6, -8, 10];
