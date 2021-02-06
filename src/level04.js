// # null, undefined, empty

function A1() {
  const person = {};
  console.log(person.name);
  console.log(Object.keys(person));
  console.log(JSON.stringify(person, null, 4));
}

function A2() {
  const person = { name: undefined };
  console.log(Object.keys(person));
  console.log(person.name);
  console.log(JSON.stringify(person, null, 4));
}

function A3() {
  person.name = { name: null };
  console.log(Object.keys(person));
  console.log(person.name);
  console.log(JSON.stringify(person, null, 4));
}

function B1() {
  console.log(null == undefined);
}

function B2() {
  console.log(typeof undefined);
  console.log(typeof null);
}

function C1() {
  const xs = new Array(4);
  console.log(xs.length);
  console.log(xs[0]);
}

function C2() {
  const xs = new Array(4);

  for (const x of xs) {
    console.log(x);
  }
}

function C3() {
  const xs = new Array(4);

  xs.forEach(x => {
    console.log(x);
  });
}

function C4() {
  const xs = new Array(4);

  const ys = xs.map(x => 9);
  console.log(ys);
}

function C4() {
  const xs = new Array(4);
  xs.fill(null);

  const ys = xs.map(x => 9);
  console.log(ys);
}
