import "./style.css";

const body = document.querySelector("body");

// const button = document.createElement("button");
// const app = document.querySelector("#app")
// button.textContent = "Button";
// app.append(button);

// app.addEventListener("mouseover", (event)=>{
// event.stopPropagation()
// console.log(event.currentTarget);
//   event.target.classList.add("pink")
// })

// app.addEventListener("mouseout", (event)=>{
// event.stopPropagation()
// console.log(event.currentTarget);
//   event.target.classList.remove("pink")
// })

// button.addEventListener("mouseover", (event) => {
// event.stopPropagation()
// console.log(event.currentTarget);
// });

// document.body.addEventListener("contextmenu", (event) => {
//     event.preventDefault()

//   console.log(event.currentTarget);
//   console.log(event.button);
//   if(event.button === 1)console.log("mouse button index",event.button);

//   console.log(event.target);
//   console.log("clientX", event.clientX);
//   console.log("clientY", event.clientY);
//   console.log("pageX", event.pageX);
//   console.log("pageY", event.pageY);
// });

// click
// mouseover/mouseout
// mousedown/mouseup
// mousemove
// dbclick
// contextmenu
//

const table = document.createElement("table");

body.append(table);

let currentTd;

table.addEventListener("click", (event) => {
  const td = event.target.closest("td");
  console.log(td);
  console.log(event.target);

  if (!td) return;
  if (!table.contains(td)) return;
  if (currentTd) {
    currentTd.classList.remove("active");
  }
  currentTd = td;
  currentTd.classList.add("active");
});

for (let i = 1; i <= 5; i++) {
  const tr = document.createElement("tr");
  table.append(tr);
  for (let j = 1; j <= 15; j++) {
    const td = document.createElement("td");
    const span = document.createElement("span");
    span.textContent = i + j;
    td.textContent = i * j;
    tr.append(td);
    td.append(span);
  }
}
