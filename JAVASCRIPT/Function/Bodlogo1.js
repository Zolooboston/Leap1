// 1.Sum Positive Even Number

// const array = [2, -3, 5, 6, -8, 10];
// let sum = 0;
// for (let i = 0; i < array.length; i++) {
//   if (array[i] > 0 && array[i] % 2 == 0) {
//     sum += array[i];
//   }
// }
// console.log(sum);

// const array = [2, -3, 5, 6, -8, 10];
// let sum = 0;
// for (let i = 0; i < array.length; i++) {
//   debugger;
//   if (array[i] > 0) {
//     if (array[i] % 2 == 0) {
//       sum = sum + array[i];
//       console.log(array[i]);
//     }
//   }
// }
// console.log(sum);

//Second Largest Number
// const array = [1, 100, 10, 1000];
// let max = array[0];
// for (let i = 0; i < array.length; i++) {
//   if (array[i] > max) {
//     max = array[i];
//   }
// }
// console.log(max);

// const array = [100, 300, 800, 1000, 1500];
// let largest = 0;
// let secondLargest = 0;
// for (let i = 0; i < array.length; i++) {
//   debugger;
//   if (array[i] > largest) {
//     largest = array[i];
//     for (let s = 0; s < array.length; s++) {
//       if (largest > array[s] && secondLargest < array[s]) {
//         secondLargest = array[s];
//       }
//     }
//   }
// }
// console.log(largest);
// console.log(secondLargest);

// const array = [10, 20, 30, 40, 50];
// let sum = 0;
// let count = 0;
// for (let i = 0; i < array.length; i++) {
//   sum += array[i];
//   count++;
// }
// let average = sum / count;
// console.log("Average:", average);

// Find max and min
// const array = [100, 3, 5, 22, 89, 46, 17, 31];
// let max = 0;
// let min = array[0];
// for (let i = 0; i < array.length; i++) {
//   debugger;
//   if (array[i] > max) {
//     max = array[i];
//   } else if (array[i] < min) {
//     min = array[i];
//   }
// }
// console.log(`max: ${max}, min: ${min}`);

// Comparisons
// const array= [100,200,300,400];

// N number sum - N buh toonii niilber
// let number = 100;
// let sum = 0;
// for (let i = 1; i <= number; i++) {
//   sum += i;
// }
// console.log(`N number sum: ${sum}`);

// let number = 3;
// let result = 0;
// for (let i = 0; i < Infinity; i++) {
//   result = number ** i;
//   if (result > 1000) {
//     console.log(`${number}iin ${i} zeregn 1000aas ih bnaa: ${result}`);
//     break;
//   }
// }

//Sort an array
// const array = [5, 4, 3, 2, 1];
// for (let i = 1; i <= 5; i++) {
//   console.log(i);
// }
// for (let i = 5; i >= 1; i--) {
//   console.log(i);
// }

// const array = [5, 4, 3, 2, 1];
// for (let i = array[4]; i <= array.length; i--) {
//   if (i > 0) {
//     console.log(i);
//   }
// }

// {
//   const array1 = [1, 2, 3, 4];
//   // console.log(array1.length);
//   const array2 = [4, 5, 6, 7];
//   const mergedArray = [];
//   mergedArray.length = array1.length + array2.length;
//   // console.log(mergedArray);
//   for (i = 0; i < mergedArray.length; i++) {
//     mergedArray[i] = array1[i];
//     if (i >= array1.length) {
//       //i>array1.length-1
//       mergedArray[i] = array2[i - array1.length];
//     }
//   }
//   console.log(mergedArray);
// }

// {
//   let array = [5, 4, 3, 2, 1];
//   let reversedArray = [];
//   let index = 0;

//   for (let i = array.length - 1; i >= 0; i--) {
//     reversedArray[index] = array[i];
//     index++;
//   }
//   console.log(reversedArray);
// }

// let array=[2,10,1,4,6,8];
// for(let i=1; i<array.length; i++) {
//   for ()
// }

// {
//   const array1 = [1, 2, 3, 4];
//   // console.log(array1.length);
//   const array2 = [4, 5, 6, 7];
//   const mergedArray = [];
//   mergedArray.length = array1.length + array2.length;
//   // console.log(mergedArray);
//   for (i = 0; i < array1.length; i++) {
//     mergedArray[i] = array1[i];
//   }
//   for (j = 0; j < array2.length; j++) {
//     mergedArray[j + array1.length] = array2[j];
//   }
//   console.log(mergedArray);
// }

// const array=[10, 20, 30, 40, 50]; 30
// {
//   const orolt = [10, 20, 30, 40, 50];
//   const num = [30];
//   const garalt = [];
//   for (i = 0; i < orolt.length - 1; i++) {
//     garalt[i] = orolt[i];
//   }
//   console.log(garalt);
// }

// const orolt = [10, 20, 30, 40, 50];
// const num = [30];
// const garalt = [];
// garalt.length = orolt.length + num.length;
// for (i = 0; i < garalt.length; i++) {
//   garalt[i] = orolt[i];
//   if (i >= orolt.length) {
//     garalt[i] = num[i - orolt.length];
//   }
// }
// console.log(garalt);
// {
//   const nums = [2, 7, 11, 15];
//   const target = 9;

//   //divide and conquer
//   //upstream thinking
//   //brute force

//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (target === nums[i] + nums[j]) {
//         console.log(nums[i], nums[j], "deer oldloo");
//         console.log(i, j, " -giin niilber.");
//       }
//     }
//   }
// }

let numbersArray = [1, 13, 22, 123, 49];
let sum = 0;
for (i = 0; i < numbersArray.length; i++) {
  sum += numbersArray[i];
}
console.log(sum);
