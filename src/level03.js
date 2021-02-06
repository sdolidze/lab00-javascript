// # Promise, async/await

function A1() {
  const promise = Promise.resolve(5);

  promise.then(
    res => console.log("success", res),
    err => console.log("failure", err),
  );
}

function A2() {
  const promise = Promise.reject(-5);

  promise.then(
    res => console.log("success", res),
    err => console.log("failure", err),
  );
}

function A3() {
  const promise = Promise.reject(-5);

  promise
    .then(res => console.log("success", res))
    .catch(err => console.log("failure", err));
}

function A4() {
  Promise.resolve(5)
    .then(x => x + 5)
    .then(x => console.log(x));
}

function A5() {
  Promise.resolve(5)
    .then(x => Promise.resolve(x + 5))
    .then(x => console.log(x));
}

function A6() {
  const promise = new Promise((resolve, reject) => {
    throw new Error("whops");
  });

  promise.then(
    res => console.log("success", res),
    err => console.log("failure", err),
  );
}

function A7() {
  const promise = new Promise((resolve, reject) => {
    resolve(10);
  });

  promise.then(
    res => console.log("success", res),
    err => console.log("failure", err),
  );
}

function A8() {
  const promise = new Promise((resolve, reject) => {
    reject(-10);
  });

  promise.then(
    res => console.log("success", res),
    err => console.log("failure", err),
  );
}

function A9() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve(3), 3000);
  });

  promise.then(
    res => console.log("success", res),
    err => console.log("failure", err),
  );
}

// --------------------

async function B1() {
  const x = 5;
  const y = await Promise.resolve(7);

  console.log(x + y);
}

async function B2() {
  const x = 5;
  const y = await Promise.reject(7);

  console.log(x + y);
}

async function B3() {
  try {
    const x = 5;
    const y = await Promise.reject(7);
    console.log(x + y);
  } catch (err) {
    console.log("Oops");
  }
}

async function B4() {
  const resolveIn = (milliseconds, value) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(value), milliseconds);
    });
  };

  const a = await resolveIn(1000, 1);
  const b = await resolveIn(1500, 2);
  const c = await resolveIn(2000, 3);

  console.log(a + b + c);
}

async function B5() {
  const resolveIn = (milliseconds, value) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(value), milliseconds);
    });
  };

  const [a, b, c] = await Promise.all([
    resolveIn(1000, 1),
    resolveIn(1500, 2),
    resolveIn(2000, 3),
  ]);

  console.log(a + b + c);
}

async function B6() {
  const usingPromise = () => {
    return Promise.resolve(5)
      .then(x => x + 1)
      .then(y => Promise.resolve(y * 10))
      .then(z => console.log(z))
      .catch(err => console.log(err));
  };

  const usingAsyncAwait = async () => {
    try {
      const x = await Promise.resolve(5);
      const y = x + 1;
      const z = await Promise.resolve(y * 10);
      console.log(z);
    } catch (err) {
      console.log(err);
    }
  };

  await usingPromise();
  await usingAsyncAwait();
}
