let vehicle ={
    make: "Honda",
    model: "Civic",
    year: "2000",
    color: "red",
    description: function(){
        return `${this.make} ${this.model} ${this.year}`;
    } 
}

function car(name,speed) {
    this.name = name;
    this.speed = speed;
    this.drive = function(){
        return `${this.name} is driving at ${this.speed}`;
    }
}
// console.log(vehicle.description());
let car1 = new car("BMW",100);
console.log(car1);