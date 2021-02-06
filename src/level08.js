// # Set, Map, Object

function A1() {
  const set = new Set([1, 2, 1, 2, 1, 2]);

  set.add(5);
  set.add(6);
  set.delete(5);

  console.log(set.has(6));
  console.log(set.size);

  for (const item of set) {
    console.log(item);
  }

  console.log(JSON.stringify(set));
}

function A2() {
  const set = new Set();

  set.add(3).add(2).add(1);

  // Insertion order is preserved during iteration
  const array = Array.from(set);
  console.log(array);
}

function A3() {
  const map = new Map([
    ["John", 21],
    ["Jane", 25],
    ["Louie", 29],
  ]);

  map.set("Angela", 34);
  map.set("Marco", 40);

  // Insertion order is preserved during iteration
  for (const [key, value] of map) {
    console.log(key, "=>", value);
  }

  console.log(JSON.stringify(map));
}

function A4() {
  const obj = {
    John: 21,
    Jane: 25,
    Louie: 29,
  };

  obj["Angela"] = 34;
  obj["Marco"] = 40;

  for (const [key, value] of Object.entries(obj)) {
    console.log(key, "=>", value);
  }

  console.log(JSON.stringify(obj));
}

function A5() {
  // REFERENCE: https://2ality.com/2015/10/property-traversal-order-es6.html

  const obj = {};

  obj["Beta"] = "Beta";
  obj["1"] = 1;
  obj["0.5"] = 0.5;
  obj["0"] = 0;
  obj["Alpha"] = "Alpha";

  console.log(Object.keys(obj));
}
