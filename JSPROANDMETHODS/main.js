// Math Properties
console.log(Math.PI); // 3.14159...
console.log(Math.SQRT2); 

// Math Methods

// Trigonametric Functions
let x=45;
console.log(Math.cos(x));
console.log(Math.cosh(x));
console.log(Math.sin(x));
console.log(Math.sinh(x));
console.log(Math.tanh(x));
console.log(Math.tan(x));
// Cube root
console.log(Math.cbrt(625));
// Ceil Number
console.log(Math.ceil(1.1));
console.log(Math.ceil(1.5));
console.log(Math.ceil(1.8));
// Floor Number
console.log(Math.floor(1.1));
console.log(Math.floor(1.5));
console.log(Math.floor(1.9));
// round Numbers
console.log(Math.round(1.1));
console.log(Math.round(1.5));
console.log(Math.round(1.9));
// Random Number Generate
console.log(Math.random());
console.log(Math.random() * (100- 1) + 1);

// Math method using call array
let a=[45,37,18,95,54]
console.log(Math.max(a));
// using spread operator
let b=[45,37,18,95,54]
console.log(Math.max(...b));
console.log(Math.min(...b));
