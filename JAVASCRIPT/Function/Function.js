//2 toonii nillberig console.log dr heveldeg function bicheerei.

// function sumTwoNumber(number1, number2) {
//   console.log(number1 + number2);
// }
// sumTwoNumber(11, 5);

// function sumTwoNumber(number1, number2) {
//   return number1 + number2;
// }
// const sum = sumTwoNumber(1, 3);
// console.log(sum);

// 1. Check if Zero: Write a function isZero that takes a number and returns true if the number is zero, and false otherwise.
// 1.  0 - тэй тэнцүү бол true, үгүй бол false гэж хэвэлдэг isZero гэдэг функц бичнэ үү.

// function isZero(number) {
//   if (number === 0) {
//     return "true";
//   } else {
//     return "false";
//   }
// }
// console.log(isZero(11));

function isZero(number) {
  return number === 0;
}
console.log(isZero(5));

// 2. Square a Number: Write a function square that takes a number and returns its square.
// 2. Тооны квадрат: Тоо өгч квадратыг нь буцаадаг square гэдэг функц бичнэ үү.

// function square(number) {
//   return number * number;
// }
// const too = prompt("toogoo oruulna uu?");
// console.log(square(too));

// 3. Calculate the Area of a Rectangle: Write a function rectangleArea that takes the width and height of a rectangle and returns its area.
// 3. Тэгш өнцөгтийн талбайг тооцоолох: Тэгш өнцөгтийн өргөн ба өндрийг өгч талбайг нь буцаадаг rectangleArea гэдэг функц бичнэ үү.

// function rectangleArea(width, height) {
//   return width * height;
// }
// const width = prompt("Urgunuu ugnu uu?");
// const height = prompt("Unduruu ugnu uu?");
// // // const area = number(prompt("Urgun ugnuu?"));

// console.log(rectangleArea(width, height));

// 4. Find the Largest Number: Write a function findLargest that takes three numbers as arguments and returns the largest number.
// 4. Хамгийн их тоог ол: Гурван тоо өгч хамгийн их тоог буцаадаг findLarge гэдэг функц бичнэ үү.

function findlarge(a, b, c) {
  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  } else {
    return c;
  }
}
console.log(findlarge(7, 8, 9));

// 5. Convert Temperature: Write a function celsiusToFahrenheit that takes a temperature in Celsius and returns the temperature in Fahrenheit
// 5. Температур хөрвүүлэх: Цельсийн температур өгч Фаренгейтийн температурыг буцаадаг celsiusToFahrenheit гэдэг функц бичнэ үү.

// function celsiusToFahrenheit(Celsius) {
//   return (Celsius * 9) / 5 + 32;
// }
// const temperature = prompt("Temperature ee hiine uu?");
// console.log(celsiusToFahrenheit(temperature));

// 6. Simple Calculator: Write a function calculator that takes three arguments: two numbers and a string representing an operation ('add', 'subtract', 'multiply', 'divide'). The function should perform the corresponding operation and return the result.
// 6. Энгийн тооны машин: Хоёр тоо болон ямар үйлдэл хийх утга ('add', 'subtract', 'multiply', 'divide') гэсэн гурван аргумент авах функц бичнэ үү. Энэ Функц нь харгалзах үйлдлийг гүйцэтгэж, үр дүнг буцаадаг байна.

function calculator(a, b, operation) {
  if (operation === "add") {
    return a + b;
  } else if (operation === "subtract") {
    return a - b;
  } else if (operation === "multiply") {
    return a * b;
  } else if (operation === "divide") {
    return a / b;
  }
}
// const a = prompt("Ehnii toogoo oruulna");

// const b = prompt("2dahi toogoo oruulna");

// console.log(calculator(Number(a), Number(b), "multiply"));
