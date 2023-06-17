import { farm } from "./ageCount";
import { getAnimalsAge } from "./ageCount";
import { animals } from "./ageCount";
// console.log(animals);
// console.log(farm);
// console.log(getAnimalsAge(farm));

let totalAge = 0;
const animalsAge = (arr) => {
  if (!arr.length) return 0;
  arr.map((animal) => {
    if (animal.childs !== null && !!animal.children.length)
      animalsAge(animal.children);
    if (!!animal.age) totalAge += animal.age;
  });
  return totalAge;
};

const total = animalsAge(farm);
// console.log("total animals age", total);

// const arr = [45, 2, 3, 4, 11, 7];
// const sum = arr.reduce((acc, number) => acc + number, 0);
// console.log(sum);

// arr.reduce((result, animal)=>{
//     if(!!animal.childs.length)
//     return result + animal.age
// })
