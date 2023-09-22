const Circle = (diam: number): string => {
    return 'The circumference is ' + Math.PI * diam;
  };
  
  console.log(circle(10)); // The circumference is 31.41592653589793


/* 
// Using explicit typing 
const circle: Function = (diam: number): string => {
  return 'The circumference is ' + Math.PI * diam;
};

// Inferred typing - TypeScript sees that circle is a function that always returns a string, so no need to explicitly state it
const circle = (diam: number) => {
  return 'The circumference is ' + Math.PI * diam;
};
*/