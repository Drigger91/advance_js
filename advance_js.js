//scope 
//basic scopes are - block, function and global but slighlty advanced is nested function's scope

function outer() {
    let a = 10;
    function inner() {
        let b = 20;
        function super_inner() {
            let c = 40;
            console.log(a , b, c);
        }
        super_inner();
    }
    inner();
}
outer();

// closures
//combination of a function bundled together with it's surrounding state
//easy defination is when we return a function in a function then two cases can happen
// first we assign it to a variable and second we do not.
//when we don't every time a new block of memory is assigned whenever it is called 
//but when we do it binds the state to a specific associate memory and hold on to data with in executions

function closure_outer() {
    let count = 0;
    function closure_inner() {
        count++;
        console.log(count);
    }
    closure_inner();
}
closure_outer();
closure_outer();
//output is 1 1
function closure_outer_1() {
    let count = 0;
    return function closure_inner() {
        count += 1;
        console.log(count);
    }
}
let fn = closure_outer_1();
fn();
fn();
//output is 1 2


//currying
//function with n arguments can be transformed to n functions with 1 arguments

let sum = (a,b,c) => {
    return a + b + c;
}

function curry(fn) {
    return function(a) {
        return function(b) {
            return function(c) {
                return fn(a,b,c);
            }
        }
    }
}
// console.log(sum(2,3,5)); //10
console.log(curry(sum)(2)(3)(5)); //10

//this keyword
//this in js have 4 type of bindings


//1. Implicit

const person = {
    name : "Piyush",
    print_name : function() {
        console.log("Name : " + this.name);
    } 
}
person.print_name(); //Name : Piyush
//this refers to the person variable/object here

//2 Explicit binding
function sayName() {
    console.log("Explicitly name: " + this.name);
}
sayName.call(person); //Explicitly name: Piyush
let a = {};
sayName.call(a); //Explicitly name: undefined
//here this will refer to the parameter in function call


// 3. new binding

function Person(name) {
    this.name = name;
}
Person.prototype.print_name = function() {
    console.log("HAHA : " + this.name);
}
const p1 = new Person("Piyush");
console.log("P1 : " + p1.name); //P1 : Piyush
p1.print_name(); //HAHA : Piyush


//Default binding

globalThis.name = "Default";
function global_name() {
    console.log("Default : " + this.name); //Default : Default
}

global_name.call();
