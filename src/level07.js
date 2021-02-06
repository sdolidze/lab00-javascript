// # Microtasks, Macrotasks

function A1() {
  console.log("A");
  setTimeout(() => console.log("B"));
  console.log("C");
}

function A2() {
  console.log("A");
  Promise.resolve(null).then(() => console.log("B"));
  console.log("C");
}

function A3() {
  console.log("A");
  Promise.resolve(null).then(() => console.log("B"));
  console.log("C");
  Promise.resolve(null).then(() => console.log("D"));
}

function A4() {
  console.log("A");
  setTimeout(() => console.log("B"));
  console.log("C");
  Promise.resolve(null).then(() => console.log("D"));
}

function A5() {
  console.log("A");
  setTimeout(() => console.log("B"));
  console.log("C");
  Promise.resolve(null).then(() => console.log("D"));
  Promise.resolve(null).then(() => console.log("E"));
}

function A6() {
  console.log("A");
  setTimeout(() => console.log("B"));
  console.log("C");
  Promise.resolve(null).then(() => {
    console.log("D");
    Promise.resolve(null).then(() => console.log("E"));
  });
}
