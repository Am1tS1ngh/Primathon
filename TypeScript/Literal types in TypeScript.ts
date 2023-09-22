// Union type with a literal type in each position
let favouriteColor: 'red' | 'blue' | 'green' | 'yellow';

favouriteColor = 'blue';
// favouriteColor = 'crimson'; 
// ERROR: Type '"crimson"' is not assignable to type '"red" | "blue" | "green" | "yellow"'.