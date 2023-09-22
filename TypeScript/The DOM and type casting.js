"use strict";
const link = document.querySelector('a');
// console.log(link.href); // ERROR: Object is possibly 'null'.
//  TypeScript can't be sure the anchor tag exists, as it can't access the DOM
// Here we are telling TypeScript that we are certain that this anchor tag exists
const Link = document.querySelector('a');
console.log(Link.href); // www.freeCodeCamp.org
const form = document.getElementById('signup-form');
// console.log(form.method);
// ERROR: Object is possibly 'null'.
// ERROR: Property 'method' does not exist on type 'HTMLElement'.
const Form = document.getElementById('signup-form');
console.log(Form.method); // post
