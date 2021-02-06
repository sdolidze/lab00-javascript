// # Closure vs Class

function A1() {
  function makeCounter(initialValue) {
    let value = initialValue;

    return {
      inc: () => value++,
      dec: () => value--,
      getValue: () => value,
    };
  }

  const counter = makeCounter(3);
  counter.inc();
  counter.dec();
  counter.inc();
  console.log(counter.getValue());
}

function A2() {
  class Counter {
    constructor(initialValue) {
      this.value = initialValue;
    }

    inc() {
      this.value++;
    }

    dec() {
      this.value--;
    }

    getValue() {
      return this.value;
    }
  }

  const counter = new Counter(3);
  counter.inc();
  counter.dec();
  counter.inc();
  console.log(counter.getValue());
}
