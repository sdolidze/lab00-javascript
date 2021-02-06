// # reduce

function A1() {
  const sum = xs => {
    let acc = 0;

    for (const x of xs) {
      acc = acc + x;
    }

    return acc;
  };
  console.log(sum([1, 2, 3, 4]));

  const sum2 = xs => xs.reduce((acc, x) => acc + x, 0);
  console.log(sum2([1, 2, 3, 4]));
}

function A2() {
  const product = xs => {
    let acc = 1;

    for (const x of xs) {
      acc = acc * x;
    }

    return acc;
  };
  console.log(product([1, 2, 3, 4]));

  const product2 = xs => xs.reduce((acc, x) => acc * x, 1);
  console.log(product2([1, 2, 3, 4]));
}

function A3() {
  const any = xs => {
    let acc = false;

    for (const x of xs) {
      acc = acc || x;
    }

    return acc;
  };
  console.log(any([true, false, true]));

  const any2 = xs => xs.reduce((acc, x) => acc || x, false);
  console.log(any2([true, false, true]));
}

function A4() {
  const all = xs => {
    let acc = true;

    for (const x of xs) {
      acc = acc && x;
    }

    return acc;
  };
  console.log(all([true, true, false]));

  const all2 = xs => xs.reduce((acc, x) => acc && x, true);
  console.log(all2([true, true, false]));
}

function A5() {
  const indexById = items => {
    const acc = {};

    for (const item of items) {
      acc[item.id] = item;
    }

    return acc;
  };

  const idx = indexById([
    { id: "john", name: "John" },
    { id: "jane", name: "Jane" },
    { id: "luke", name: "Luke" },
  ]);
  console.log(idx);

  const indexById2 = items =>
    items.reduce((acc, item) => {
      acc[item.id] = item;
      return acc;
    }, {});

  const idx2 = indexById2([
    { id: "john", name: "John" },
    { id: "jane", name: "Jane" },
    { id: "luke", name: "Luke" },
  ]);
  console.log(idx2);
}

function A6() {
  const reducer = (state, action) => {
    switch (action.type) {
      case "INC":
        return state + 1;
      case "DEC":
        return state - 1;
    }
  };

  const applyReducer = (initialState, actions) => {
    let acc = initialState;

    for (const action of actions) {
      acc = reducer(acc, action);
    }

    return acc;
  };

  const res = applyReducer(2, [
    { type: "INC" },
    { type: "DEC" },
    { type: "INC" },
    { type: "DEC" },
    { type: "INC" },
  ]);
  console.log(res);

  const applyReducer2 = (initialState, actions) =>
    actions.reduce(reducer, initialState);
  const res2 = applyReducer2(2, [
    { type: "INC" },
    { type: "DEC" },
    { type: "INC" },
    { type: "DEC" },
    { type: "INC" },
  ]);
  console.log(res2);
}
