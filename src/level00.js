// # var, let, const

function A1() {
  console.log(x);
  var x = 1;
}

function A2() {
  setTimeout(() => console.log(x));
  var x = 1;
}

function A3() {
  console.log(x);
  let x = 1;
}

function A4() {
  for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i));
  }
}

function A5() {
  for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i));
  }
}

// --------------------

function B1() {
  let x = 0;
  x++;
  console.log(x);
}

function B2() {
  const x = 0;
  x++;
  console.log(x);
}

function B3() {
  let xs = [0, 1, 2];
  xs[1] = -1;
  console.log(xs);
}

function B4() {
  const xs = [0, 1, 2];
  xs[1] = -1;
  console.log(xs);
}
