// Есть ферма животных, у всех животных есть имена и возраст.
//  Животные бывают разных типов: Кошки, Собаки, Коровы.
//  У каждого животного могут быть дети. Если животное является родителем этих детей,
//   в свою очередь глубина семейного древа может достигать N либо 0.
// Опишите структуры данных для фермы животных и напишите функцию,
// которая делает подсчёт всех возрастов животных и выводит общий возраст для всей фермы.

export const farm = [
  {
    name: "Cat",
    age: 13,
    children: [
      {
        name: "cat-1",
        age: 5,
        children: [
          {
            name: "cat-1-1",
            age: 1,
            children: [
              {
                name: "cat-1-1",
                age: 1,
                children: [{ name: "cat-1-1", age: 1, children: [] }]
              }
            ]
          },
          { name: "cat-1-2", age: 2, children: [] },
          { name: "cat-1-3", age: 3, children: [] }
        ]
      },
      {
        name: "cat-2",
        age: 7,
        children: [
          { name: "cat-2-1", age: 4, children: [] },
          { name: "cat-2-2", age: 5, children: [] }
        ]
      }
    ]
  },
  {
    name: "Dog",
    age: 19,
    children: [
      {
        name: "dog-1",
        age: 5,
        children: [
          {
            name: "dog-1-1",
            age: 1,
            children: [{ name: "cat-1-1", age: 1, children: [] }]
          }
        ]
      },
      {
        name: "dog-2",
        age: 4,
        children: []
      }
    ]
  },
  {
    name: "Cow",
    age: 7,
    children: [
      {
        name: "cow-1",
        age: 4,
        children: [{ name: "cow-1-1", age: 1, children: [] }]
      },
      {
        name: "cow-2",
        age: 4,
        children: []
      },
      {
        name: "cow-3",
        age: 5,
        children: []
      },
      {
        name: "cow-4",
        age: 6,
        children: []
      }
    ]
  }
];

// Родительский класс для всех животных
class Animal {
  constructor(name, age, childs = null) {
    this.name = name;
    this.age = age;
    this.childs = childs;
  }
}

// Класс Cat - потомок класса Animal
// Имеет те же поля, что и Animal
class Cat extends Animal {
  constructor(name, age, childs = null) {
    super(name, age, childs);
  }
}

// Класс Dog - потомок класса Animal
// Имеет те же поля, что и Animal
class Dog extends Animal {
  constructor(name, age, childs = null) {
    super(name, age, childs);
  }
}

// Класс Cow - потомок класса Animal
// Имеет те же поля, что и Animal
class Cow extends Animal {
  constructor(name, age, childs = null) {
    super(name, age, childs);
  }
}

// Рекурсивная функция для подсчета age
// Обходит все дочерние элементы
export function getAnimalsAge(animals) {
  let output = 0;

  if (!!animals.length) {
    // Использование функции reduce для получения общего age
    // https://learn.javascript.ru/array-iteration
    output += animals.reduce((acc, current) => {
      // Сумма age всех childs
      let count = 0;
      // Если childs пустой или его нет, тогда нет смысла пробегать по ним
      if (current.children && current.children.length > 0) {
        // Применение рекурсии
        count += getAnimalsAge(current.children);
      }

      // Возвращаем сумму аккумулятора, текущего животного, сумму age всех childs
      return acc + current.age + count;
    }, 0);
  }

  return output;
}

// Функция для получения определённого количества животных
function generateAnimals(type, count) {
  let output = [];

  for (let i = 0; i <= count; i++) {
    let parameter = {
      name: `${type} ${i}`,
      age: i,
      childs: []
    };

    let item = null;

    switch (type) {
      case "Cat":
        item = new Cat(parameter.name, parameter.age);
        break;
      case "Dog":
        item = new Dog(parameter.name, parameter.age);
        break;
      case "Cow":
        item = new Cow(parameter.name, parameter.age);
        break;
    }

    if (item) {
      output.push(item);
    }
  }

  return output;
}

// Добавление childs ко всем переданным животным
function addChildsTo(animals, count, type) {
  animals.forEach((animal) => {
    if (!animal.childs) {
      animal.childs = [];
    }
    // Обратите внимание, что массив - ссылка, поэтому изменяя здесь его поля
    // мы меняем их глобально
    animal.childs = generateAnimals(type, count);
  });
}

let cats = generateAnimals("Cat", 5);
addChildsTo(cats, 10, "Cat");

let dogs = generateAnimals("Dog", 3);
addChildsTo(dogs, 3, "Dog");

let cows = generateAnimals("Cow", 7);
addChildsTo(cows, 1, "Dog");

// Использование оператора Spread (ES6)
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Spread_syntax
export let animals = [...cats, ...dogs, ...cows];

// console.log(getAnimalsAge(animals)); // 411
