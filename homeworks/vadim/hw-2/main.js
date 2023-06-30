// Завдання
// Реалізувати просту програму на Javascript, яка взаємодіятиме з 
// користувачем за допомогою модальних вікон браузера - alert, prompt, confirm. 

// Технічні вимоги:
// Отримати за допомогою модального вікна браузера дані користувача: ім'я та вік.
// Якщо вік менше 18 років - показати на екрані повідомлення: You are not allowed to visit this website.
// Якщо вік від 18 до 22 років (включно) – показати вікно з наступним повідомленням: Are you sure you want to continue? 
// і кнопками Ok, Cancel. Якщо користувач натиснув Ok, показати на екрані повідомлення:
// Welcome, + ім'я користувача. Якщо користувач натиснув Cancel, показати на екрані повідомлення: You are not allowed to visit this website.
// Якщо вік більше 22 років – показати на екрані повідомлення: Welcome, + ім'я користувача.
// Обов'язково необхідно використовувати синтаксис ES6 (ES2015) для створення змінних.
// Після введення даних додати перевірку їхньої коректності. Якщо користувач не ввів ім'я,
// або при введенні віку вказав не число - запитати ім'я та вік наново 
// (при цьому дефолтним значенням для кожної зі змінних має бути введена раніше інформація).


let userName;
let userAge;
do { (userName = prompt("Ваше Имя?", [userName])) }
while (userName == "" || userName == null);
do {
    userAge = prompt("Ваш возвраст?", [userAge]);
    result = parseInt(userAge);
}
while (isNaN(Number(result)));
if (+userAge < 18) {
    alert("You are not allowed to visit this website.");
} if (+userAge >= 18 && +userAge <= 22) {
    let confirmUser = confirm(`Are you sure you want to continue? ,${userName}`)
    if (confirmUser) {
        alert(`Welcom, ${userName}`)
    } else { alert("You are not allowed to visit this website.") }
} else (alert(`Welcom, + userName`))