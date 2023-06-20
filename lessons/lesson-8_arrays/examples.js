// slice
// return NEW ARRAY
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newArr = arr.slice(0, -5)

// console.log(arr);
// console.log(newArr);

// splice
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const arr = Array(100).fill(1)

// console.log(arr);
// const start = performance.now();
// console.log(start);
// const newArr = [...arr]
// const end = performance.now();
// console.log(end);
// console.log(end - start);
// arr[0] = 22;
// console.log(arr);
// console.log(newArr);

// const newArr = arr.splice(3, 3, 33);
// const newArr2 = [...arr.slice(0, 3), 33, ...arr.slice(6)];

// console.log(arr);
// console.log(newArr);
// console.log(newArr2);

// forEach

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let newArr = [];
// arr.forEach((number) => {
//   newArr = [...newArr, number];
// });
// arr[0] = 22;
// console.log(arr);
// console.log(newArr);

// sort

// const arr = [1, 22, 11, 47, 89, 73, 243];
// const sortedArr = arr.sort((a, b) => {
//   if (b - a < 0) return 1;
//   if (b - a > 1) return -1;
//   return 0;
// });

// console.log(sortedArr);

// const strArr = ["aqwe", "yfdgfd", "ZXCZ`Xc", "dghdfgD", "erth"];
// console.log(strArr);
// const newStrArr = strArr.sort((a, b) => {
//   return a.localeCompare(b);
// });

// console.log(newStrArr);

// filter

// const arr = [12, 45, 33, 76, 92, 40,11];
// console.log(arr);

// const newArr = arr.filter((number) => number > 1000);
// if(!!newArr.length) console.log("ololo");
// console.log(newArr);

// reverse

// const arr = [12, 45, 33, 76, 92, 40,11];
// console.log(arr);
// const newArr = arr.reverse()
// console.log(newArr);

// findIndex

// const arr = [45, 33, 12, 76, 92, 12, 40, 11];
// const index = arr.findIndex((number) => number === 12);
// console.log(index);

// find

// const arr = [45, 33, 12, 76, 92, 12, 40, 11];
// const arr = [
//   { name: "kekeke", age: 42, id: 1234 },
//   { name: "ololo", age: 22, id: 2276 },
//   { name: "fefefe", age: 13, id: 9813 }
// ];

// const newPerson = arr.find((person) => person.id === 2273);
// console.log(newPerson);

// reduce

// const arr = [45, 33, 12, 76, 92, 12, 40, 11];
// const sum = arr.reduce((previously, current) => {
//   return previously + current;
// });

// console.log(sum);
// const arr = [45, 33, 12, 76, 92, 12, 40, 11];
// const sum = arr.reduceRight((previously, current) => {
//     console.log(current);
//   return previously + current;
// }, 0);

// console.log(sum);

// includes

// const arr = [45, 33, 12, 76, 92, 12, 40, 11];
// const arr = [
//   { name: "kekeke", age: 42, id: 1234 },
//   { name: "ololo", age: 22, id: null },
//   { name: "fefefe", age: 13, id: 9813 }
// ];

// const isInclude = [...arr].map((person) => person.id).includes(null);
// console.log(isInclude);

// const str = "ololo"
// const isInclude = str.includes("l")
// console.log(isInclude);

// Array.isArray

// const arr = [45, 33, 12, 76, 92, 12, 40, 11];
// const isArray = Array.isArray   !!!!!
// const number = 123123
// console.log(isArray(arr));
// console.log(isArray(number));

// concat

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const newArr = arr1.concat(arr2);
// const newArr = [...arr1, ...arr2];
// arr1[0] = 2
// console.log(newArr);
// const str1 = "ololo"
// const str2 = "kekeke"
// const newStr = str1 + " " + str2
// console.log(newStr);

// delete

// const obj = {
//   ololo: 123,
//   kekeke: 321
// };
// console.log(obj);

// delete obj.ololo;
// console.log(obj);

// const arr1 = [1, 2, 3];
// console.log(arr1);

// delete arr1[0]

// console.log(arr1);

// join
// const errorsArr = [404, "Page not found"];
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const errorMessage = errorsArr.join(". ");
// console.log(errorMessage);
// console.log("ololo kekeke".split(" "));

// indexOf

// const arr = [45, 33, 12, 76, 92, 12, 40, 11];
// const index = arr.indexOf(12)
// console.log(index);

// from

// const str = "ololo, kekeke!";
// const letterArr = Array.from(str);
// console.log(letterArr);

// fill
// const arr = [45, 33, 12, 76, 92, 12, 40, 11];
// arr.fill(1, 2, 6);
// console.log(arr);

// every

// const arr = [45, 33, 12, 76, 92, 12, 40, 11, 10];
// const isEvery = arr.every((number) => number >= 10);
// console.log(isEvery);

// some

// const arr = [45, 33, 12, 76, 90, 12, 40, 11, 10];
// const isSome = arr.some((number) => number >= 90);
// console.log(isSome);

