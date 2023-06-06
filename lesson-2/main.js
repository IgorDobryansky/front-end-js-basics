// let num = +prompt("Enter a number");

// if (num % 2 === 0) alert("Парное число");
// else alert("Не парное");

// for (let i = 0; i <= num; i++) {
//   if (i % 2 === 0) {
//     // console.log("Парное число");
//     alert(`${i} Парное число`);
//   } else {
//     // console.log("Не парное число");
//     alert(`${i} Не парное число`);
//   }
// }

// Loops:  for(...), while(...), do {...} while(...)

// for - когда мы знаем количество итераций!!!
// while - когда мы не знаем количество итераций!!!

// do {
//   num = +prompt("Enter a number");
//   console.log(num);
// } while (num % 2 != 0);

// while (num % 2 != 0) {
//   num = +prompt("Enter a number");
//   console.log(num);
// }

// const arr = [1, 2, 3, 4, 5];

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }
// console.log("================");
// arr.forEach((num) => {
//   console.log(num);
// });

// console.log("================");
// for (const iterator of arr) {
//   console.log(iterator);
// }

// const obj = {
//   firstName: "Juliya",
//   lastName: "Kostyuk",
//   age: 18,
//   getFullName(){
//     return this.firstName + " " + this.lastName
//   },
//   skills:{
//     js: true,
//     html:true
//   }
// };

// console.log("================");
// for (const key in obj) {
//   console.log(obj[key]);
// }

// Напишите программу, которая запрашивает у
// пользователя пароль и проверяет, соответствует
// ли он заданным требованиям
// (например, длина не менее 8 символов,
// наличие как минимум одной заглавной буквы,
// одной строчной буквы и одной цифры).

// const lettersArray = [
//   "a",
//   "b",
//   "c",
//   "d",
//   "e",
//   "f",
//   "g",
//   "h",
//   "i",
//   "j",
//   "k",
//   "l",
//   "m",
//   "n",
//   "o",
//   "p",
//   "q",
//   "r",
//   "s",
//   "t",
//   "u",
//   "v",
//   "w",
//   "x",
//   "y",
//   "z"
// ];
// const numberArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// let isLettersIncludes = false;
// let isCapitalLettersIncludes = false;
// let isNumberIncludes = false;

// const str = "Aqweqweq1ww";
// let userPassword = prompt("Enter your password");

// function validatePassword() {
//   lettersArray.forEach((letter) => {
//     if (userPassword.includes(letter)) {
//       isLettersIncludes = true;
//       return;
//     }
//   });

//   lettersArray.forEach((letter) => {
//     if (userPassword.includes(letter.toUpperCase())) {
//       isCapitalLettersIncludes = true;
//       return;
//     }
//   });

//   numberArray.forEach((number) => {
//     if (userPassword.includes(number)) {
//       isNumberIncludes = true;
//       return;
//     }
//   });

//   console.log("содержит буквы нижнего регистра", isLettersIncludes);
//   console.log("содержит буквы верхнего регистра", isCapitalLettersIncludes);
//   console.log("содержит цифры", isNumberIncludes);
// }
// validatePassword();

// while (
//   !userPassword.length ||
//   userPassword.length < 8 ||
//   !isLettersIncludes ||
//   !isCapitalLettersIncludes ||
//   !isNumberIncludes
// ) {
//   isLettersIncludes = false;
//   isCapitalLettersIncludes = false;
//   isNumberIncludes = false;
//   userPassword = prompt("Enter your password");
//   validatePassword();
// }

// const regularExpression = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}/g;

// let userPassword = prompt("Enter your password");
// const str = "qweqwe1QWE"
// console.log(str.match(regularExpression))

// while (!userPassword.match(regularExpression)) {
//   userPassword = prompt("Enter your password");
//   console.log(userPassword);
// }
// console.log(userPassword);

// console.log("next code");

// Logical operators:  ||  ,  &&  ,  !  ,  ??  ,  !!  ,  ? - ternar operator

// ifElse || console.log("working");

// const ifElse = false;

const str = ""; // Boolean - false
console.log(!!str); // ! - invert

// ??

// const obj = ""
// console.log("obj", obj);
// const something = { ...obj, number: 2 } ?? null;

// console.log("something", something);

// const value = null;
// let kekeke;
// const emptyValue = "";
// const someValue = "ololo";
// const something = kekeke ?? "some value";
// console.log(something);

// ? -   condition ? true : false

// const value = 11 > 13 ? "some value" : 11 < 13 ? "some new value" : "nothing";

// console.log(value);
// let newValue

// if (11 < 13) {                  // condition ?
//   newValue = "some new value";  // true
// } else {                        // :
//   newValue = "nothing";         // false
// }
// console.log(newValue);

// let month = +prompt("Введіть номер місяця (від 1 до 12)");

// if ((month >= 1 && month <= 2) || month === 12) {
//   alert("Зима");
// } else if (month >= 3 && month <= 5) {
//   alert("Весна");
// } else if (month >= 6 && month <= 8) {
//   alert("Літо");
// } else if (month >= 9 && month <= 11) {
//   alert("Осінь");
// } else {
//   alert("такого місяця не існує");
// }
// const month = 12;

// console.log(
//   (month >= 1 && month <= 2) || month === 12 ? "winter" : "not winter month"
// );


