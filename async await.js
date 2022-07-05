async function soham() {
   console.log('testing...');
    const result = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await result.json();   
    console.log(data);
}

a = soham();
console.log(a);
console.log('kuch kar le bhai');


