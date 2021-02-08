// # Currying

function A1() {
  const add = a => {
    return b => a + b;
  };

  const inc = add(1);
  const dec = add(-1);

  console.log(typeof add);
  console.log(typeof inc);

  console.log(add(4)(5));
  console.log(inc(1));
  console.log(dec(1));
}

function A2() {
  const add = a => b => a + b;

  const inc = add(1);
  const dec = add(-1);

  console.log(add(4)(5));
  console.log(inc(1));
  console.log(dec(1));
}

function A3() {
  const add = a => b => c => a + b + c;
  console.log(add(3)(5)(2));
}

function A4() {
  const wat = arg => fn => fn(arg);
  console.log(wat(5)(x => x + 1));
}
