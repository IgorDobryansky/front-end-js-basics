// Завдання
// Реалізувати функцію створення об'єкта "юзер".

// Технічні вимоги:
// Написати функцію createNewUser(), яка буде створювати та повертати об'єкт newUser.
// При виклику функція повинна запитати ім'я та прізвище.
// Використовуючи дані, введені юзером, створити об'єкт newUser з властивостями firstName та lastName.
// Додати в об'єкт newUser метод getLogin(), який повертатиме першу літеру імені юзера,
// з'єднану з прізвищем, все в нижньому регістрі (наприклад, Ivan Kravchenko → ikravchenko).
// Створити юзера за допомогою функції createNewUser(). Викликати у цього юзера функцію getLogin().
// Вивести у консоль результат виконання функції.
// Необов'язкове завдання підвищеної складності
// Зробити так, щоб властивості firstName та lastName не можна було змінювати напряму.
// Створити функції-сеттери setFirstName() та setLastName(), які дозволять змінити дані властивості.
function createNewUser() {
  let firstName = prompt("Enter your name");
  let lastName = prompt("Enter your last name");
  return {
    _firstName: firstName,
    _lastName: lastName,
    getLogin() {
      return (this._firstName[0] + this._lastName).toLowerCase();
    },
    setFirstName(value) {
      this._firstName = value;
    },
    setLastName(value) {
      this._lastName = value;
    },
    getFirstName() {
      return this._firstName;
    },
    getLastName() {
      return this._lastName;
    },
  };
}
const yuliia = createNewUser();
console.log(yuliia.getLogin());
const vadim = createNewUser();
console.log(vadim.getLogin());
