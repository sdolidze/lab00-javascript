// # Destructuring

function A1() {
  const numbers = [1, 2, 3, 4];

  const [a, ...rest] = numbers;
  console.log(a, rest);
}

function A2() {
  const numbers = [1, 2, 3, 4];

  // Order or destructuring matters
  // Having less variables than items in the array is ok
  const [a, b] = numbers;
  console.log(a, b);
}

function A3() {
  const numbers = [1, 2, 3, 4];

  const [, a, , b] = numbers;
  console.log(a, b);
}

function A4() {
  const xs = [1, 2, 3];
  const ys = [4, 5, 6];

  const zs = [...xs, ...ys];
  console.log(zs);
}

function A5() {
  const xs = [1, 2, 3];
  const ys = [4, 5, 6];

  const zs = [0.5, ...xs, 3.5, ...ys, 6.5];
  console.log(zs);
}

// --------------------

function B1() {
  const { name, ...rest } = {
    name: "John",
    age: 21,
    role: "Admin",
  };

  console.log(name, rest);
}

function B2() {
  // Order of destructuring does not matter
  const { age, name: firstName } = {
    name: "John",
    age: 21,
    role: "Admin",
  };

  console.log(firstName, age);
}

function B3() {
  const { age = 21 } = { age: undefined };

  console.log(age);
}

function B4() {
  const { age = 21 } = { age: null };

  console.log(age);
}

function B5() {
  const { age = 21 } = { age: 25 };

  console.log(age);
}

function B6() {
  const name = "John";
  const age = 21;

  const john = { name, age };
  console.log(john);
}

function B6() {
  const name = "John";
  const age = 21;

  const john = {
    ...null,
    ...undefined,
    ...{},
    name,
    age,
  };
  console.log(john);
}
