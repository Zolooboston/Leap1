// const array = [1, 2, 3];
// const number = 4;
// // 1234
// array[array.length] = number;
// console.log(array);

//function nii array-g avdag, array ruu nemeh utgiig avdag tged shine array-g bucaadag
{
  function pushArray(array, element) {
    const newArray = array;
    newArray[newArray.length] = element;
    return newArray;
  }
  console.log(pushArray([1, 2, 3], 6));
}

//[1,2,3], [1,2]

// const arr = [1, 2, 3];
// arr.length = 2;
// console.log(arr);

{
  function popArray(array) {
    array.length = array.length - 1;
    return array;
  }
  console.log(popArray([1, 2, 3, 4]));
}

// [1,2,3]; [2,3]

{
  const array = [1, 2, 3, 4];
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i + 1];
  }
  array.length = array.length - 1;
  console.log(array);
}

{
  function shiftArray(array) {
    for (let i = 0; i < array.length; i++) {
      array[i] = array[i + 1];
    }
    array.length = array.length - 1;
    return array;
  }
  console.log(shiftArray([1, 2, 3, 4, 5]));
}

//[1,2,3], 6    [6,1,2,3]

// {
//   function shiftArrayArray(array, element) {
//     const newArray = array;
//     newArray[0] = element;
//     newArray.length = newArray.length + 1;
//     return newArray;
//   }
//   console.log(shiftArray([1, 2, 3], 6));
// }

{
  const array = [2, 1, 4];
  const element = 5;
  let newArray = [];

  for (let i = 0; i < array.length; i++) {
    newArray[i + 1] = array[i];
  }
  newArray[0] = element;
  console.log(newArray);
}

{
  function unshiftArray(array, element) {
    let newArray = [];
    newArray[0] = element;
    for (let i = 0; i < array.length; i++) {
      newArray[i + 1] = array[i];
    }
    return newArray;
  }
  console.log(unshiftArray([1, 2, 3, 4], 15));
}

//[2,1,4,5] - [4,2,8,10]
{
  const array = [2, 1, 3, 4, 5];
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i] * 2;
  }
  console.log(array);
}
{
  function multiplyArray(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
      newArray[i] = array[i] * 2;
    }
    return newArray;
  }
  console.log(multiplyArray([1, 2, 3, 4, 5]));
}

// const array = [2, 1, 4, 5]; // [4,5]
// let newArray = [];
// for (let i = 0; i < array.length; i++) {
//   if (array[i] > 3) {
//     console.log(array[i]);
//     return newArray;
//   }
// }

// {
//   function threeArray(array) {
//     let newArray = [];
//     for (let i = 0; i < array.length; i++) {
//       newArray[i] = array[i] > 3;
//     }
//     return newArray;
//   }
//   console.log(threeArray([2, 1, 4, 5]));
// }

{
  const arr = [2, 1, 4, 5]; // [4,5]
  function filter(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
      if (array[i] > 3) {
        pushArray(newArray, array[i]);
      }
    }
    return newArray;
  }
  console.log(filter(arr));
}

{
  const array = [1, 2, 3, 4];
  array.push(8);
  console.log(array);

  const array1 = [1, 2, 3, 4];
  array1.shift();
  console.log(array1);
}

{
  function popArray1(arr, number) {
    for (let i = 0; i < number; i++) {
      arr.pop();
    }
    return arr;
  }
  console.log(popArray1([1, 2, 3, 4, 5, 6, 7], 4));
}

//input [1,2,3,4,5], 2
//output [4,5,1,2,3]

{
  let array = [1, 2, 3, 4, 5, 6];
  n = 3;
  for (let i = 0; i < n; i++) {
    let x = array[array.length - 1];
    array.pop();
    array.unshift(x);
  }
  console.log(array);
}

{
  function unshiftArray(array, number) {
    for (let i = 0; i < number; i++) {
      let x = array[array.length - 1];
      array.pop();
      array.unshift(x);
    }
    return array;
  }
  console.log(unshiftArray([1, 2, 3, 4, 5, 6, 7], 3));
  console.log("-----------------------");
}

{
  const array = [1, 2, 3, 4, 5, 6, 7];
  const n = 3;
  for (let i = 0; i < n; i++) {
    let x = array[0];
    array.shift();
    array.push(x);
  }
  console.log(array);
  console.log("************************");
}

{
  function pushArray(array, number) {
    for (i = 0; i < number; i++) {
      x = array[0];
      array.shift();
      array.push(x);
    }
    return array;
  }
  console.log(pushArray([1, 2, 3, 4, 5, 6], 3));
}
// let array2 = [1, 1, 1, 2, 2, 3, 3, 4];

// function removesame(array) {
//   return [...new Set(array)];
// }
// console.log(removesame(array2));
