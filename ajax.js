console.log('Hello World');

document.getElementById('btn1').addEventListener('click', buttonhandler);

function buttonhandler() {
    console.log('Button clicked');
    const req = new XMLHttpRequest();
    
    req.open('GET','soham.txt',true);

    req.onload = function() {
        console.log(this.responseText);
    }
    req.send();
}