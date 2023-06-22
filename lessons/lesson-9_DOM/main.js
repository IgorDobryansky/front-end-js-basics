import "./style.css";

const app = document.getElementById("app");

// app.style.backgroundColor = "magenta";

// const firstChild = app.children[0];
// const secondChild = app.children[1];
// const thirdChild = app.children[2];

// console.log(secondChild.previousElementSibling);
// console.log(app.firstElementChild);
// console.log(firstChild.children);
// const secondChildThirdSibling = app.querySelector(".parent-1 .first-sibling");
// console.log(secondChildThirdSibling);
// const grandParents = Array.from(document.getElementsByClassName("parent"));
// console.log(grandParents);
// grandParents.map((element) => {
//   element.style.backgroundColor = "black";
// });
// const allDivElements = document.getElementsByTagName("div");
// console.log(allDivElements);

// attributes
// const input = document.querySelector("input");
// input.addEventListener("input", (e) => {
//   console.log(e.target.value);
// });

// input.id = "input";
// input.className = "input";
// input.type = "date";

// const img = document.querySelector("img");
// img.src = "olololo";
// img.dataset.ololo = "kekeke";
// img.setAttribute("data-ololo", "pepepe");
// console.log(img);
// const div = document.createElement("div")
// console.log(div);
// console.log(input);
// console.log(input.getAttribute("type"));
// const label = document.querySelector("label")
// console.log(img.attributes);

const nameInput = document.createElement("input");
nameInput.className = "name-input";
nameInput.id = "name-input";
nameInput.type = "text";
nameInput.placeholder = "Enter your name";

const passwordInput = document.createElement("input");
passwordInput.className = "password-input";
passwordInput.id = "password-input";
passwordInput.type = "password";
passwordInput.placeholder = "Enter your password";

// app.appendChild(nameInput);
// app.append("123");
// app.append(passwordInput);
app.insertAdjacentElement("afterbegin", nameInput);
app.insertAdjacentElement("beforeend", passwordInput);
app.insertAdjacentText("beforebegin", "ololo");
app.insertAdjacentHTML(
  "afterbegin",
  '<a href="http://google.com" target="_blank">ololo</a>'
);

const citys = ["Киев", "Стамбул", "Варшава", "Рига", "Амстердам"];
const list = document.createElement("ol");
app.append(list);
nameInput.remove();
passwordInput.remove();

citys.map((city) => {
  const listItem = document.createElement("li");
  listItem.textContent = city;
  list.append(listItem);
});
