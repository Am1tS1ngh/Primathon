"use strict";
class Prson {
    constructor(n, c, e, p) {
        this.name = n;
        this.isCool = c;
        this.email = e;
        this.pets = p;
    }
    sayMyName() {
        console.log(`Your not Heisenberg, you're ${this.name}`);
    }
}
const prson1 = new Prson('Danny', false, 'dan@e.com', 1);
console.log(person1.name); // Fine
person1.name = 'James'; // Error: read only
//   console.log(person1.isCool); // Error: private property - only accessible within Person class
//   console.log(person1.email); // Error: protected property - only accessible within Person class and its subclasses
//   console.log(person1.pets); // Public property - so no problem
