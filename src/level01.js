// # Classes, prototypical inheritance

function A1() {
  const john = {
    name: "John",
    age: 21,
  };

  // Alpha
  const jane = Object.create(john);
  console.log(Object.keys(jane));
  console.log(jane.name, jane.age);

  // Beta
  jane.name = "Jane";
  console.log(jane.name, jane.age);

  // Gamma
  john.age = 25;
  console.log(jane.name, jane.age);

  // Delta
  jane.age = 27;
  console.log(Object.keys(jane));
  console.log(jane.name, jane.age);
}

function A2() {
  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }

    getName() {
      return this.name;
    }

    getAge() {
      return this.age;
    }
  }

  // Alpha
  const john = new Person("John", 21);
  console.log(john.getName());

  // Beta
  const getNameOfJohn = john.getName;
  console.log(getNameOfJohn());

  // Gamma
  const { getName } = john;
  console.log(getName());

  // Delta
  const bindedGetName = getName.bind(john);
  console.log(bindedGetName());
}

function A3() {
  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }

    getName = () => {
      return this.name;
    };

    getAge = () => {
      return this.age;
    };
  }

  // Alpha
  const john = new Person("John", 21);
  console.log(john.getName());

  // Beta
  const getNameOfJohn = john.getName;
  console.log(getNameOfJohn());

  // Gamma
  const { getName } = john;
  console.log(getName());
}
