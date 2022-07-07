function* genrator() {
  yield 1;
  yield 2;
  yield 3;
}

let c = genrator();
console.log(c.next());
console.log(c.next());
console.log(c.next());
console.log(c.next());
console.log(c.next());
