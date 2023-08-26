/* 1. Використовуючи колекцію Set написати функцію, яка перевірить чи всі елементи в масиві, який передається 
як аргумент, є унікальними та поверне як результат true або false */

function areAllUnique(arr) {
  let newArray = Array.from(new Set(arr));
  return newArray.length === arr.length ? true : false;
}

console.log(areAllUnique([1, 4, 6, 7])); // виведе true
console.log(areAllUnique([1, 4, 6, 1, 7])); // виведе false

/* 2. Дано масив імен [ "Alex", "Bob", "Peter", "Annie"]. За допомогою колекції Map дати кожному з елементів 
масиву унікальний числовий ідентифікатор (починаючи з 1ці) та повернути створену колекцію Map. */

function addIds(names) {
  let newCollectionMap = new Map();
  names.forEach((name, index) => {
    newCollectionMap.set(name, index + 1);
  });

  return newCollectionMap;
}

console.log(addIds(["Alex", "Bob", "Peter", "Annie"])); // виведе Map(4) { 'Alex' => 1, 'Bob' => 2, 'Peter' => 3, 'Annie' => 4 }

/* 3. Дано обʼєкт obj з двома числовими властивостями та двома методами add та subtract
які відповідно додають або віднімають властивості. Необхідно написати функцію, яка прийме
як параметри сам обʼєкт та назву метода і перевірить чи наявний метод у цьому обʼєкту.
Якщо метод наявний - функція поверне результат його роботи, якщо ні - 
поверне текст "There no such function in object" */
const obj = {
  a: 5,
  b: 2,
  add: function () {
    return this.a + this.b;
  },
  subtract: function () {
    return this.a - this.b;
  },
};

function checkMethodAvailability(funcName, object) {
  return typeof object[funcName] === "function"
    ? object[funcName]()
    : "There no such function in object";
}

console.log(checkMethodAvailability("add", obj)); // виведе 7
console.log(checkMethodAvailability("subtract", obj)); // виведе 3
console.log(checkMethodAvailability("multiply", obj)); // виведе There no such function in object

/* 4. Дано обʼєкт obj1 з двома числовими властивостями та двома методами add та subtract
які відповідно додають або віднімають властивості. Необхідно написати функцію що створить новий обʼєкт, 
який успадкує прототип обʼєкту obj1, розширить його функціонал методами multiply та divide 
та поверне цей новий обʼект. */
const obj1 = {
  a: 5,
  b: 2,
  add: function () {
    return this.a + this.b;
  },
  subtract: function () {
    return this.a - this.b;
  },
};

function inheritanceWithExpandedMethods(obj1) {
  let obj2 = {
    multiply: function () {
      return this.a * this.b;
    },
    divide: function () {
      return this.a / this.b;
    },
  };

  obj1.__proto__ = obj2;
  return obj1;
}

console.log(inheritanceWithExpandedMethods(obj1).multiply()); // виведе 10
console.log(inheritanceWithExpandedMethods(obj1).divide()); // виведе 2.5
console.log(inheritanceWithExpandedMethods(obj1).add()); // виведе 7
console.log(inheritanceWithExpandedMethods(obj1).subtract()); // виведе 3
