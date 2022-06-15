// console.log('Hello from object creation!')

/*
    JavaScript Objects and Prototypes
*/

let person = {
    name: 'Tom',
    age: 23,
    favColor: 'green'
};

console.log(person);
// bracket notation
console.log(person['name']);
// dot notation
console.log(person.favColor);

let person2 = {
    name: 'Samantha',
    age: 24,
    languages: ['JavaScript', 'Python'],
    teams: {
        mlb: 'Nationals',
        nfl: 'Commanders'
    }
}

console.log(person2);

console.log(person2.languages);
person2.languages.forEach(l => console.log(l.toLowerCase()));

// 'this' is set to object that called it
let person3 = {
    name: 'Jenkins',
    sayHello: function(){console.log(`Hello my name is ${this.name}!`)}
}

console.log(person3);
console.log(person3.sayHello);

person3.sayHello();

// console.clear()


// JavaScript Object Instantiation -> classes

// let animal = {};
// animal.name = 'Buddy';
// animal.energy = 10;

// animal.eat = function(amount){
//     this.energy += amount;
//     console.log(`${this.name} is eating. Energy is now ${this.energy}.`)
// }

// animal.sleep = function(amount){
//     this.energy += amount;
//     console.log(`${this.name} is sleeping. Energy is now ${this.energy}`)
// }

// animal.play = function(amount){
//     this.energy -= amount;
//     console.log(`${this.name} is playing. Energy is now ${this.energy}`)
// }
// console.log(animal);

// animal.eat(10);
// animal.play(15);
// animal.play(20);
// console.log(animal);

////////////////////////////
// Function Instantiation //
////////////////////////////

// function Animal(name, energy=10){
//     let animal = {};
//     animal.name = name;
//     animal.energy = energy;

//     animal.eat = function(amount){
//         this.energy += amount;
//         console.log(`${this.name} is eating. Energy is now ${this.energy}.`)
//     }

//     animal.sleep = function(amount){
//         this.energy += amount;
//         console.log(`${this.name} is sleeping. Energy is now ${this.energy}`)
//     }

//     animal.play = function(amount){
//         this.energy -= amount;
//         console.log(`${this.name} is playing. Energy is now ${this.energy}`)
//     }
//     return animal
// }
// let buddy = Animal('Buddy', 10);
// buddy.eat(10);
// buddy.play(5);

// let leo = Animal('Leo', 20);
// leo.eat(5);
// leo.play(15);

// console.log(leo.eat === buddy.eat);


////////////////////////////////////////////////
// Function Instantiation with Shared Methods //
////////////////////////////////////////////////

// const animalMethods = {
//     eat: function(amount){
//         this.energy += amount;
//         console.log(`${this.name} is eating. Energy is now ${this.energy}.`)
//     },
//     sleep: function(amount){
//         this.energy += amount;
//         console.log(`${this.name} is sleeping. Energy is now ${this.energy}`)
//     },
//     play: function(amount){
//         this.energy -= amount;
//         console.log(`${this.name} is playing. Energy is now ${this.energy}`)
//     }
// }

// function Animal(name, energy=10){
//     let animal = {};
//     animal.name = name;
//     animal.energy = energy;

//     animal.eat = animalMethods.eat
//     animal.sleep = animalMethods.sleep
//     animal.play = animalMethods.play

//     return animal
// }

// let buddy = Animal('Buddy', 10);
// buddy.eat(10);
// buddy.play(5);

// let leo = Animal('Leo', 20);
// leo.eat(5);
// leo.play(15);

// console.log(leo.eat === buddy.eat);

console.log('====================');


// Object.create()

// The Object.create() method creates a new object, using an existing object as the prototype of the newly created object.

let parent = {
    firstName: 'Margaret',
    lastName: "O'Reilly",
    heritage: 'Irish'
}
console.log(parent);
console.log(parent.firstName);
console.log(parent.lastName);
console.log(parent.heritage);

let child = Object.create(parent);
child.firstName = 'Seamus';

console.log(child);
console.log(child.firstName);
console.log(child.lastName);
console.log(child.heritage);

let parentObj = {
    name: 'Hubert',
    getInfo: function(){console.log(`Hello ${this.name}`)} // the 'this' will call the childObj.name
}

let childObj = Object.create(parentObj);

childObj.name = 'William';

console.log(childObj);
childObj.getInfo();


////////////////////////////////////////////////////////////////////
// Function Instantiation with Shared Methods and Object.create() //
////////////////////////////////////////////////////////////////////

// const animalMethods = {
//     eat: function(amount){
//         this.energy += amount;
//         console.log(`${this.name} is eating. Energy is now ${this.energy}.`)
//     },
//     sleep: function(amount){
//         this.energy += amount;
//         console.log(`${this.name} is sleeping. Energy is now ${this.energy}`)
//     },
//     play: function(amount){
//         this.energy -= amount;
//         console.log(`${this.name} is playing. Energy is now ${this.energy}`)
//     }
// }

// function Animal(name, energy=10){
//     let animal = Object.create(animalMethods);
//     animal.name = name;
//     animal.energy = energy;

//     return animal
// }

// let buddy = Animal('Buddy', 10);
// buddy.eat(10);
// buddy.play(5);
// console.log(buddy);

// let leo = Animal('Leo', 20);
// leo.eat(5);
// leo.play(15);
// console.log(leo);


// Function Prototype
//     Function is just an Object

function doNothing(){};
console.log(doNothing.prototype);
console.log(typeof doNothing.prototype);


//////////////////////////////
// Prototypal Instantiation //
//////////////////////////////

// console.log('====================');

// function Animal(name, energy=10){ // the three dots underneath 'Animal' signify it's a constructor function
//     let animal = Object.create(Animal.prototype);
//     animal.name = name;
//     animal.energy = energy;

//     return animal
// }

// Animal.prototype.eat = function(amount){
//     this.energy += amount;
//     console.log(`${this.name} is eating. Energy is now ${this.energy}.`)
// }

// Animal.prototype.sleep = function(amount){
//     this.energy += amount;
//     console.log(`${this.name} is sleeping. Energy is now ${this.energy}`)
// }

// Animal.prototype.play = function(amount){
//     this.energy -= amount;
//     console.log(`${this.name} is playing. Energy is now ${this.energy}`)
// }

// let buddy = Animal('Buddy', 10);
// buddy.eat(10);
// buddy.play(5);
// console.log(buddy);

// let leo = Animal('Leo', 20);
// leo.eat(5);
// leo.play(15);
// console.log(leo);


////////////////////////////////////
// Pseudo-Classical Instantiation //
////////////////////////////////////
/*
NEW OPERATOR

The new operator lets developers create an instance of a user-defined object
type or of one of the built-in object types that has a constructor function.
*/

// console.log('====================');

// function Animal(name, energy=10){ // <-- CONSTRUCTOR FUNCTION
//     // let animal = Object.create(Animal.prototype);
//     this.name = name;
//     this.energy = energy;
//     // return this
// }

// Animal.prototype.eat = function(amount){
//     this.energy += amount;
//     console.log(`${this.name} is eating. Energy is now ${this.energy}.`)
// }

// Animal.prototype.sleep = function(amount){
//     this.energy += amount;
//     console.log(`${this.name} is sleeping. Energy is now ${this.energy}`)
// }

// Animal.prototype.play = function(amount){
//     this.energy -= amount;
//     console.log(`${this.name} is playing. Energy is now ${this.energy}`)
// }

// // 'new' Keyword -- "syntactical sugar"
// let buddy = new Animal('Buddy', 10);
// buddy.eat(10);
// buddy.play(5);
// console.log(buddy);

// let leo = new Animal('Leo', 20);
// leo.eat(5);
// leo.play(15);
// console.log(leo);


//////////////////////////
// ECMA Script 6 - 2015 // 
//     class keyword    //
//////////////////////////

console.log('====================');

// 'class' -- "syntactical sugar"
class Animal{
    constructor(name, energy=10){ // <-- CONSTRUCTOR is equivalent to Python's '__init__'
        this.name = name;
        this.energy = energy;
    }   
    eat(amount){
        this.energy += amount;
        console.log(`${this.name} is eating. Energy is now ${this.energy}.`)
    }
    sleep(amount){
        this.energy += amount;
        console.log(`${this.name} is sleeping. Energy is now ${this.energy}`)
    }
    play(amount){
        this.energy -= amount;
        console.log(`${this.name} is playing. Energy is now ${this.energy}`)
    }
}

let buddy = new Animal('Buddy', 10);
buddy.eat(10);
buddy.play(5);
console.log(buddy);

let leo = new Animal('Leo', 20);
leo.eat(5);
leo.play(15);
console.log(leo);
