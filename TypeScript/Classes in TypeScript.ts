class Persn {
    name: string;
    isCool: boolean;
    pets: number;
  
    constructor(n: string, c: boolean, p: number) {
      this.name = n;
      this.isCool = c;
      this.pets = p;
    }
  
    sayHello() {
      return `Hi, my name is ${this.name} and I have ${this.pets} pets`;
    }
  }
  
  const persn1 = new Persn('Danny', false, 1);
//   const persn2 = new Persn('Sarah', 'yes', 6); // ERROR: Argument of type 'string' is not assignable to parameter of type 'boolean'.
  
  console.log(persn1.sayHello()); // Hi, my name is Danny and I have 1 pets