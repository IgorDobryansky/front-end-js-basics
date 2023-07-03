// Завдання
// Реалізувати функцію, яка отримуватиме масив елементів і виводити їх на сторінку у вигляді списку.

// Технічні вимоги:
// Створити функцію, яка прийматиме на вхід масив і опціональний другий аргумент parent - DOM-елемент,
// до якого буде прикріплений список (по дефолту має бути document.body.
// кожен із елементів масиву вивести на сторінку у вигляді пункту списку;

// Приклади масивів, які можна виводити на екран:

const arr = ["hello", "world", "Kiev", "Kharkiv", "Odessa", "Lviv"];
// ["1", "2", "3", "sea", "user", 23];

// Можна взяти будь-який інший масив.
// Додайте обробку вкладених масивів. Якщо всередині масиву одним із елементів буде ще один масив,
// виводити його як вкладений список. Приклад такого масиву:

const nestedArr = [
  "Kharkiv",
  "Kiev",
  [
    "Borispol",
    "Irpin",
    [
      "Odessa",
      "Lviv",
      ["Odessa", "Lviv", "Dnieper"],
      "Dnieper",
      ["Odessa", "Lviv", "Dnieper"],
    ],
  ],
  ["Odessa", "Lviv", "Dnieper"],
];
// Підказка: використовуйте map для обходу масиву та рекурсію, щоб обробити вкладені масиви.
// Очистити сторінку через 3 секунди. Показувати таймер зворотного відліку (лише секунди) перед очищенням сторінки.

// function showElemntsListCity(arr,parent=document.body){
//     let ul = document.createElement('ul');
// arr.forEach((elem)=>{
//     let li = document.createElement('li')
//     li.append(elem)
//     ul.append(li)
// });
// parent.prepend(ul)
// };
// showElemntsListCity(["hello", "world", "Kiev", "Kharkiv", "Odessa", "Lviv"]);

function showElemntsListCity(arr, parent = document.body) {
  let ul = document.createElement("ul");
  arr.forEach((str) => {
    if (Array.isArray(str)) {
      showElemntsListCity(str, ul);
    } else {
      let li = document.createElement("li");
      li.textContent = str;
      ul.append(li);
    }
  });
  parent.prepend(ul);
}
showElemntsListCity(nestedArr);
