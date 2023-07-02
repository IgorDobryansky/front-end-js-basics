// Завдання
// Доповнити функцію createNewUser() методами підрахунку віку користувача та його паролем.

// Технічні вимоги:
// Візьміть виконане домашнє завдання номер 5 (створена вами функція createNewUser()) і доповніть її наступним функціоналом:
// При виклику функція повинна запитати дату народження (текст у форматі dd.mm.yyyy) і зберегти її в полі birthday.
// Створити метод getAge() який повертатиме скільки користувачеві років.
// Створити метод getPassword(), який повертатиме першу літеру імені користувача у верхньому регістрі,
// з'єднану з прізвищем (у нижньому регістрі) та роком народження. (наприклад, Ivan Kravchenko 13.03.1992 → Ikravchenko1992.
// Вивести в консоль результат роботи функції createNewUser(), а також функцій getAge() та getPassword() створеного об'єкта.
function createNewUser() {
  let firstName = prompt("Enter your name");
  let lastName = prompt("Enter your last name");
  let birthday = prompt("Enter your date of birth use format dd.mm.yyyy");
  return {
    _firstName: firstName,
    _lastName: lastName,
    _birthday: birthday,
    getAge() {
      const today = new Date();
      const birthDate = new Date(this.birthday);
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();
      if (
        monthDiff < 0 ||
        (monthDiff === 0 && today.getDate() < birthDate.getDate())
      ) {
        age--;
      }

      return age;
    },
    getLogin() {
      return (
        this._firstName[0] +
        this._lastName +
        this._birthday.slice(-4)
      ).toLowerCase();
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
console.log("Вік користувача:", user.getAge());
console.log("Пароль користувача:", user.getPassword());
