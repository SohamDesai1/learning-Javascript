console.log('Classes');

class Student {
    constructor(name,age,grade){
        this.name = name;
        this.age = age;
        this.grade = grade;
    }
    getInfo(){
        return `${this.name} is ${this.age} years old and has a grade of ${this.grade}`;
    }
}
let student1 = new Student("John",20,80);
console.log(student1.getInfo());

class CommiteeMember extends Student {
    constructor(name,age,grade,committee){
        super(name,age,grade);
        this.committee = committee;
    }
    getInfo(){
        return `${this.name} is ${this.age} years old and has a grade of ${this.grade} and is a ${this.committee}`;
    }
}

let member1 = new CommiteeMember("John",20,80,"Committee Member");
console.log(member1.getInfo());