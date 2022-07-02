localStorage.setItem('name', 'John');
let n = localStorage.getItem('name');   
console.log(n);
// localStorage.clear();
// localStorage.removeItem('name');

let a = [1,2,3,4,5];
localStorage.setItem('array', JSON.stringify(a));