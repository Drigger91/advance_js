class User {
    constructor(username, age) {
        this.username = username;
        this.age = age;
        this.getDetails = () => {
            return `Name : ${this.username} AGE : ${this.age}`;
        }
    }
}
function Car(model, name, company) {
    this.model = model;
    this.name = name;
    this.company = company;
    this.getDetails = () => {
        return `Model : ${this.model} Company : ${this.company} Name : ${this.name}`;
    }
}
const user1 = new User("Piyush", 0);
console.log(user1.getDetails());
const car = new Car("Ax7", "Xuv", "Mahindra")
console.log(car.getDetails());
//console.log(this)
//console.log(globalThis);

class myArray extends Array {
    constructor(length) {super (length);}
}

// let arr = new myArray(3);
// arr = [1,2,3];
// console.log(arr);
// arr = arr.map((num) => num*10);
// console.log(arr);

// const str = "sda      ";
// Object.prototype.toTrueString = function() {
//     return this.toString().trim()
// }
// console.log(str.toTrueString());
// const arr = [1,23];
// console.log(arr.toTrueString(), typeof arr.toTrueString() === 'string');

const Teacher = {
    canBringPhone : true,
    name : 'Teacher',
    getName : function() {
        return this.canBringPhone + " " + this.name;
    }
}
console.log(Teacher.getName());

const Student = {
    name : "Student",
};
Object.setPrototypeOf(Student, Teacher);
console.log(Student.getName());