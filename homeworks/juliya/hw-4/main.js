// Завдання
// Реалізувати функцію, яка виконуватиме математичні операції з введеними користувачем числами.

// Технічні вимоги:
// Отримати за допомогою модального вікна браузера два числа.
// Отримати за допомогою модального вікна браузера математичну операцію, яку потрібно виконати.
// Сюди може бути введено +, -, *, /.
// Створити функцію, в яку передати два значення та операцію.
// Вивести у консоль результат виконання функції.
// Необов'язкове завдання підвищеної складності
// Після введення даних додати перевірку їхньої коректності. Якщо користувач не ввів числа,
// або при вводі вказав не числа, - запитати обидва числа знову (при цьому значенням за
// замовчуванням для кожної зі змінних має бути введена інформація раніше).

function calculate() {
  let firstNumber;
  let secondNumber;
  let operator;
  let result;
  while (
    isNaN(firstNumber) ||
    !firstNumber ||
    isNaN(secondNumber) ||
    !secondNumber ||
    !operator ||
    !["+", "-", "*", "/"].includes(operator)
  ) {
    if (isNaN(firstNumber) || !firstNumber)
      firstNumber = +prompt("Please enter the first number:");
    if (!operator || !["+", "-", "*", "/"].includes(operator))
      operator = prompt("Please enter the operator (+, -, *, /):");
    if (isNaN(secondNumber) || !secondNumber)
      secondNumber = +prompt("Please enter the second number:");
  }
  switch (operator) {
    case "+":
      result = firstNumber + secondNumber;
      break;
    case "-":
      result = firstNumber - secondNumber;
      break;
    case "*":
      result = firstNumber * secondNumber;
      break;
    case "/":
      result = firstNumber / secondNumber;
      break;
    default:
      return;
  }
  console.log(`Result: ${result.toFixed(4)}`);
}
calculate();
console.log();
console.log();
