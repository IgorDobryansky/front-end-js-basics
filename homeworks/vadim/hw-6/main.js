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
    let lastName = prompt("Enter yor last name");
    let birthDay = prompt("Write your birthday dd.mm.yy:");
    return {
      _firstName: firstName,
      _lastName: lastName,
      _birthDay: new Date(
        birthDay.slice(6, 10),
        birthDay.slice(3, 5) - 1,
        birthDay.slice(0, 2),
      ),
  
      getLogin() {
        return this._firstName[0] + this._lastName.toLowerCase();
      },
      getAge() {
        return (
          Math.floor(
            (new Date().getTime() - new Date(this._birthDay)) /
              (24 * 3600 * 365,5 * 1000)
          ) + " years"
        );
      },
      getPassword() {
        return (
          this._firstName[0].toUpperCase() +
          this._lastName.toLowerCase() +
          this._birthDay.getFullYear()
        );
      },
      setLastName(value) {
        this._lastName = value;
      },
  
      setfirstName(value) {
        this._firstName = value;
      },
    };
  }
  let newUser = createNewUser();
  console.log(newUser.getLogin());
  newUser.setLastName("Vadim");
  console.log(newUser.getLogin());
  console.log(newUser.getAge());
  console.log(newUser.getPassword());
