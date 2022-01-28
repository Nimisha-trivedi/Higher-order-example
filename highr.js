// function myfunc(str) {
//   let result = [];
//   let myArray = str.split("");
//   myArray.map((indx) => {
//     if (indx % 2 == 0) {
//       result = indx.upper();
//     } else {
//       result = indx.lower();
//     }
//   });
//   return "".join(result);
// }
// const str = "how are you";

// console.log(myfunc(str));

// const myfunc = (sum, str) => {
//   let result = [];
//   const sum=
//   str.map((indx) => {
//     if (indx % 2 == 0) {
//       result = indx.upper();
//     } else {
//       result = indx.lower();
//     }
//   });
//   return sum();
// };

// const str = "hello";
// console.log(myfunc(str));

// const getcaps = (str) => {
//   let myArray = str.split("");
//   myArray.map((y, indx) => {
//     if (indx % 2 == 0) {
//       y.toUpperCase();
//     } else {
//       y.toLowerCase();
//     }
//   });
//   myArray.join("");
//   console.log(myArray);
// };
// const getOdd = (getcaps) => {
//   return getcaps;
// };

// let str = "hello";
// console.log(getOdd(getcaps(str)));

const getEven = (str) => {
  let arr = str.split("");
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      arr[i] = arr[i].toUpperCase();
    } else {
      arr[i] = arr[i].toLowerCase();
    }
  }
  return arr.join("");
};

const getCaps = (getEven) => {
  let reslt = getEven;
  return reslt;
};

let str = "hello";
console.log(getCaps(getEven(str)));
