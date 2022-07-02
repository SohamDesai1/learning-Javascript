console.log('Starting events.js');

document.getElementById('heading').addEventListener('click', function(a) {
  console.log('s1 clicked');
val = a.target;
val = a.target.id;
val = a.offsetX;
val = a.offsetY;
val = a.clientX;
console.log(val);
});

function func1() {
  console.log('Action triggered');
}

// document.getElementById('btn').addEventListener('click', func1);
// document.getElementById('btn').addEventListener('dbclick', func1);
// document.getElementById('btn').addEventListener('mouseenter', func1);