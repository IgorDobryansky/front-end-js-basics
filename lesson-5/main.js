// Objects
// console.log(this);
// const person = {
//   firstName: "Juliya"
// };
// console.log(person);

// person.lastName = "Kostiuk";
// console.log(person);

// person.getFullName = function () {
//   return this.firstName + " " + this.lastName;
// };

// console.log(person.getFullName());

// person.adress = {
//   country: "Ukraine",
//   city: "Kyiv",
//   street: "Khreshchatik"
// };
// console.log(person);

// person.skills = ["HTML", "CSS", "JS"];
// console.log(person);

// console.log(person.lastName);

// const person2 = {
//   _firstName: "Vadim",
//   setFirstName(value) {
//     this._firstName = value;
//   },
//   getFirstName() {
//     return this._firstName;
//   }
// };

// console.log("person2.getFirstName :>> ", person2.getFirstName());

// person2.setFirstName("Vadimka");

// console.log("person2.getFirstName :>> ", person2.getFirstName());

// function Person({ firstName, lastName, age, heigth }) {
//   if (firstName) this.firstName = firstName;
//   if (lastName) this.lastName = lastName;
//   if (age) this.age = age;
//   if (heigth) this.heigth = heigth;
//   this.getFullName = function () {
//     return this.firstName && this.lastName
//       ? this.firstName + " " + this.lastName
//       : "ololo";
//   };
// }

// const newPerson = new Person({
//   firstName: "Vadim",
//   lastName: "Saenko",
//   age: 25,
//   heigth: 172
// });

// console.log("newPerson :>> ", newPerson);

// console.log("newPerson.getFullName() :>> ", newPerson.getFullName());

// function ololo(q, w, e, r) {
//   return {
//     firstName: q,
//     lastName: w,
//     age: e,
//     heigth: r,
//     getFullName() {
//       return this.firstName + " " + this.lastName;
//     }
//   };
// }

// const newPerson2 = ololo("Vadim", "Saenko", 25, 172);
// console.log("newPerson2 :>> ", newPerson2);
// console.log("newPerson2.getFullName() :>> ", newPerson2.getFullName());

// class Person3 {
//   constructor({ firstName, lastName, age, heigth }) {
//     if (firstName) this.firstName = firstName;
//     if (lastName) this.lastName = lastName;
//     if (age) this.age = age;
//     if (heigth) this.heigth = heigth;
//   }
//   getFullName = function () {
//     return this.firstName && this.lastName
//       ? this.firstName + " " + this.lastName
//       : "ololo";
//   };
// }

// class Person4 extends Person3 {
//   constructor({ firstName, lastName, age, heigth }) {
//     super({ firstName, lastName, age, heigth });
//   }
//   getFirstLetterFullName() {
//     return this.firstName[0] + " " + this.lastName[0] + " " + this.age;
//   }
// }

// const newPerson4 = new Person4({
//   firstName: "Vadim",
//   lastName: "Saenko",
//   age: 35,
//   heigth: 186
// });

// const newPerson3 = new Person3({
//   firstName: "Vadim",
//   lastName: "Saenko",
//   age: 25,
//   heigth: 172
// });

// console.log("newPerson3 :>> ", newPerson3);
// console.log("newPerson3.getFullName() :>> ", newPerson3.getFullName());

// console.log('newPerson4 :>> ', newPerson4);

// https://jsonplaceholder.typicode.com/users

// const ololo = fetch("https://jsonplaceholder.typicode.com/users")
//   .then((res) => res.json())
//   .then((data) => console.log(data));

// const arr = [];
// console.log(Array.isArray(arr));
// function ololo() {
//   if (!Array.isArray(arr) || arr.length === 0) {
//     console.log("return");
//     return;
//   }
//   console.log(arr[0]);
// }
// ololo()

const firstNameInput = document.getElementById("firstName");
const lastNameInput = document.getElementById("lastName");
const form = document.querySelector("form");
const submitButton = document.querySelector("button");

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  getFormData();
});

function getFormData() {
  if (!firstNameInput.value || !lastNameInput.value) return;
  const formData = new FormData(form);
  console.log(formData);
  const formDataObj = Object.fromEntries(formData);
  console.log(formDataObj);
}

const obj = {
  firstName: "123",
  age: 17,
  heigth: 177,
  adress: {
    country: "Ukraine",
    city: "kyiv",
    apartaments: {
      houseNumber: 33,
      roomNumber: 11
    }
  },
  skills: {
    css: true,
    html: true,
    js: true,
    ruby: false
  }
};

console.log("heigth" in obj);
console.log(Object.keys(obj));

function cloneObject(obj) {
  const newObj = {};
  for (const key in obj) {
    if (typeof key === "object") {
      cloneObject(key);
      continue;
    }
    newObj[key] = obj[key];
  }
  return newObj;
}

// const newObj = cloneObject(obj);
const newObj = { ...obj, hasDog: true };
// const newObj = obj;
// const newObj = Object.assign({}, obj)

obj.firstName = "qwe";
newObj.firstName = "asd";
// delete obj.firstName
console.log(obj);
console.log(newObj);
