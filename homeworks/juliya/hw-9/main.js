// Завдання
// Реалізувати функцію, яка отримуватиме масив елементів і виводити їх на сторінку у вигляді списку.

// Технічні вимоги:
// Створити функцію, яка прийматиме на вхід масив і опціональний другий аргумент parent - DOM-елемент,
// до якого буде прикріплений список (по дефолту має бути document.body.
// кожен із елементів масиву вивести на сторінку у вигляді пункту списку;

// Приклади масивів, які можна виводити на екран:

// ["hello", "world", "Kiev", "Kharkiv", "Odessa", "Lviv"];
// ["1", "2", "3", "sea", "user", 23];

// Можна взяти будь-який інший масив.
// Додайте обробку вкладених масивів. Якщо всередині масиву одним із елементів буде ще один масив,
// виводити його як вкладений список. Приклад такого масиву:

// ["Kharkiv", "Kiev", ["Borispol", "Irpin"], "Odessa", "Lviv", "Dnieper"];
// Підказка: використовуйте map для обходу масиву та рекурсію, щоб обробити вкладені масиви.
// Очистити сторінку через 3 секунди. Показувати таймер зворотного відліку (лише секунди) перед очищенням сторінки.

let arrayOne = [
  "Kharkiv",
  "Kyiv",
  ["Borispol", "Irpin", ["Odesa", "Lviv", "Dnipro"]],
  "Odesa",
  "Lviv",
  [
    "Kharkiv",
    "Kyiv",
    ["Borispol", "Irpin", ["Odesa", "Lviv", "Dnipro"]],
    "Odesa",
    "Lviv",
    [],
    "Dnipro",
    "1",
  ],
  "Dnipro",
];
function listArray(arr, parent = document.body) {
  if (!Array.isArray(arr) || !arr.length) {
    return;
  }
  let list = document.createElement("ul");

  arr.map((item) => {
    if (Array.isArray(item)) {
      listArray(item, list);
    } else if (!!item) {
      let listItem = document.createElement("li");
      listItem.textContent = item;
      list.appendChild(listItem);
    }
  });
  parent.appendChild(list);
}
listArray(arrayOne);
const timerElement = document.createElement("div");
document.body.append(timerElement);
timerElement.style.position = "absolute";
timerElement.style.top = "50%";
timerElement.style.left = "50%";
timerElement.style.fontSize = "200px";
timerElement.style.transform = "translate(-50%, -50%)";
timerElement.style.color = "red";

timerElement.textContent = 5;
let interval;
function clearPage() {
  document.body.removeEventListener("click", createInterval);
  document.body.innerHTML = "";
  clearInterval(interval);
}
function showCounter() {
  console.log(321);
  timerElement.textContent--;
  if (+timerElement.textContent <= 0) {
    clearPage();
    console.log(123);
  }
}
function createInterval() {
  if (!!interval) return;
  interval = setInterval(showCounter, 1000);
}
document.body.addEventListener("click", createInterval);
