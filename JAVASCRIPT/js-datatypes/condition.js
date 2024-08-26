// let plus = 1 + 1;
// let minus = 1 + 1;
// console.log(4 > 3);

// Task1;
// Check if given number is positive, negative, or zero .
// Өгөгдсөн тоо эерэг бол "positive" , сөрөг бол "negative" , 0 бол "zero" гэж хэвлэнэ үү . console.log("the number is positive")

let a = "1";
if (a > 0) {
  console.log("1.", "positive");
} else if (a < 0) {
  console.log("1.", "negative");
} else if (a === 0) {
  console.log("1.", "zero");
} else {
  console.log("1.", "too bish bna");
}

// Task2;
// 2.Check age for driving.
// Өгөгдсөн насыг шалгаад 18-аас дээш бол "You are old enough to drive", 18-аас доош бол 18 хүрэхэд дутуу байгаа жилтэй нь хамт "You are left with 3 years to drive" гэж хэвлэнэ үү .

// let b = 17;
// let c = 18 - b;
// if (b > 18) {
//   console.log("2.", "You are old enough to drive");
// } else if (b < 18) {
//   console.log("2.", `You are left with ${c} years to drive`);
// }

const age = 17;
if (age >= 18) {
  console.log("You are old enough to drive");
} else {
  const leftAge = 18 - age;

  console.log(`You are left with ${leftAge} years to drive`);
  console.log("You are left with", leftAge, "to drive");
  console.log("You are left with " + leftAge + " to drive");
  console.log(`You are left with ${18 - age} years to drive`);
}

// Task3;
// 3.Check if the given number is odd or even .
// // Өгөгдсөн тоог шалгаад тэгш тоо бол "even" , сондгой тоо бол "odd" гэж хэвлэнэ үү .

// let d = 17;
// if (d % 2 == 0) {
//   console.log("3.", "even");
// } else if (d % 2 == 1) {
//   console.log("3.", "odd");
// }

// const number = 121;
// if (number % 2 == 0) {
//   console.log("tegsh too");
// } else {
//   console.log("sondgoi too");
// }

// Task4;
// Check if a given number is divisible by 5 .
// Өгөгдсөн тоо нь 5-д хуваагддаг үгүйг шалгана уу.

let five = 15;
if (five % 5 == 0) {
  console.log("4.", "okay");
} else if (five % 5 != 0) {
  console.log("4.", "not okay");
}

// Task5;
// Check if a given number is within the range of 1 to 100 .
// Өгөгдсөн тоо 1-ээс 100-н хооронд байвал "include" , байхгүй бол "exclude" гэж хэвлэнэ үү .

// let e = "99";
// if (e >= 1 && e <= 100) {
//   console.log("5.", "include");
// } else {
//   console.log("5.", "exclude");
// }

const number = 200;
if (1 <= number) {
  if (number <= 100) {
    console.log("include");
  } else {
    console.log("exclude");
  }
} else {
  console.log("surug too");
}

// Task6;
// 6.Check if a password is strong (strong password is at least 8 characters long) .
// Нууц үгийг хүчтэй үгүйг шалгаад хүчтэй бол "strong", сул бол "weak" гэж хэвлэнэ үү. Багадаа 8 тэмдэгт агуулвал хүчтэй гэж тооцно .

let password = "1234567891"; // strength type tai
if (password.length != 0) {
  if (password.length >= 8) {
    console.log("6.", "strong");
  } else {
    console.log("6.", "weak");
  }
}

//Task7;
// 7.Categorize age group (children, youth, adults, seniors) .
// Өгөгдсөн нас нь 14-өөс доош бол "Children", 14-24 бол "Youth", 24-64 бол "Adults", 64-өөс дээш бол "Seniors" гэж хэвлэнэ үү .

// let age = "63";
// if (age > 0 && age < 14) {
//   console.log("7.", "Children");
// } else if (age >= 14 && age < 24) {
//   console.log("7.", "Youth");
// } else if (age >= 24 && age < 64) {
//   console.log("7.", "Adults");
// } else if (age >= 64) {
//   console.log("7.", "Seniors");
// }

//Task8;
// 8.Check triangle validity .
// Өгөгдсөн гурвалжны гурван талыг зөв эсэхийг шалгана уу .
// Жишээ нь:
//      a=5 b=6 c=7 / is valid
//      a=4 b=8 c=19 / is invalid

let x = 17;
let y = 5;
let z = 19;
if (x + y >= z && x + z >= y && y + z >= x) {
  console.log("8.", "valid");
} else {
  console.log("8.", "invalid");
}

// let name = prompt("End neree bichne uu");
// alert("Ene bol alert");
// let isConfirmer = confirm("ene bol confirm");
// console.log(name);

if ((nas = 25)) {
  if ((huis = "er")) {
    console.log("eregtei 25 nastai hun bna");
  }
}
console.log(25 != 25 && "1" === 1); // false
console.log(25 == 25 || "1" === 1); //true

// const agee = prompt("Nasaa oruulna uu?");
// if (agee == 25 || agee == 26) {
//   console.log("ider nas");
// } else {
//   console.log("uur nas");
// }

// Task9
// 9.Find the largest of two number .
// 2 тооноос ихийг нь олж хэвлэнэ үү .

const one = 14;
const two = 15;
if (one > two) {
  console.log("9.", one);
} else {
  console.log("9.", two);
}

//Task10
// 10.Check if a given character is a vowel or a consonant .
// Өгөгдсөн үсгийг шалгаад эгшиг бол "vowel" , гийгүүлэгч бол "consonant" гэж хэвлэнэ үү .

const cha = "0";
if (cha === "a" || cha === "e" || cha === "o" || cha === "i" || cha === "u") {
  console.log("vowel");
} else {
  console.log("consonant");
}

//Task11
// 11.Check if year is an Olympic year.
// Өгөгдсөн жил нь Олимпийн жил мөн бишийг шалгаад хэвлэнэ үү .

const year = "1939";
if ("1936" <= year && year <= "2024") {
  if (year % 4 === 0) {
    console.log("11.", "Olympic year");
  } else if (year % 4 != 0) {
    console.log("11.", "not Olympic year");
  }
} else {
  console.log("11.", "no Olympia");
}

//Task12
// 12.Амралтын өдөр эсвэл ажлын өдөр эсэхийг шалгаарай.
// Өгөгдсөн өдөр ажлын өдөр бол "work day" , амралтын өдөр бол "weekend" гэж хэвлэнэ үү .
// for example :
//      day = Thursday / work day
//      day = Saturday / weekend

const day = "sunday";
if (
  day == "monday" ||
  day == "tuesday" ||
  day == "wednesday" ||
  day == "thursday" ||
  day == "friday"
) {
  console.log("12.", "workday");
} else if (day == "saturday" || day == "sunday") {
  console.log("12.", "weekend");
}

//Task13
// 13.Check if the given number is a prime number or not .
// Өгөгдсөн тоог анхны тоо мөн бишийг шалгана уу . (1 болон өөртөө хуваагддаг тоог анхны тоо гэнэ)
// example :
// number = 2 // true
// number = 15 // false

const num = 2;
// const prime =
if (num % 2 !== 0 && num % 3 !== 0) {
  console.log("13.", "prime number");
} else {
  console.log("13.", "not prime number");
}
