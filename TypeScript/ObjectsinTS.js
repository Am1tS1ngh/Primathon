"use strict";
// Declare a variable called person with a specific object type annotation
let Person;
// Assign person to an object with all the necessary properties and value types
Person = {
    name: 'Danny',
    location: 'UK',
    isProgrammer: true,
};
//   person.isProgrammer = 'Yes'; // ERROR: should be a boolean
//   Person = {
//     name: 'John',
//     location: 'US',
//   }; 
// ERROR: missing the isProgrammer property
