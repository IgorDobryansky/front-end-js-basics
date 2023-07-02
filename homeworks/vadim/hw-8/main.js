// Завдання
// Код для завдання вже в папці.

// Знайти всі параграфи на сторінці та встановити колір фону #ff0000

// Знайти елемент із id="optionsList".
// Вивести у консоль. Знайти батьківський елемент та вивести в консоль.
// Знайти дочірні ноди, якщо вони є, і вивести в консоль назви та тип нод.

// Встановіть в якості контента елемента з id testParagraph наступний параграф - This is a paragraph

// Отримати елементи, вкладені в елемент із класом main-header і вивести їх у консоль. Кожному з елементів присвоїти новий клас nav-item.
// Знайти всі елементи із класом section-title. Видалити цей клас у цих елементів.

const paragraph = document.querySelectorAll("p");
console.log(paragraph);
const arrayOfParagraph = Array.from(paragraph);
console.log(arrayOfParagraph);
const newArray = arrayOfParagraph.map((paragraph) => {
  paragraph.style.backgroundColor = "#ff0000";
});
console.log(newArray);
const element = document.querySelector("#optionsList");
console.log(element);
console.log(element.parentNode);
console.log(element.childNodes);
element.childNodes.forEach((node) => console.log(node.nodeType));

const elementId = document.getElementById("testParagraph");
elementId.innerHTML = "This is a paragraph";
console.log(elementId);
const mainHeaderChildren = document.querySelector(".main-header").children;
[...mainHeaderChildren].forEach((child) => {
  child.classList.add("nav-item");
  console.log(child);
});
const sectionTitleElements = document.querySelectorAll(".section-title");
[...sectionTitleElements].forEach((element) => {
  element.classList.remove("section-title");
  console.log(element);
});
