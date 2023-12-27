/* PRIMITIVE TYPES */

// let x - 5;
// let x;

// let x: number;

let y: string
let z: boolean

y =  'string';
// y = 124; // type 'number' is not assignable to type 'string'.
z = true
// z = 'true'; // Type 'string' is not assignable to type 'boolean'.

/* OTHER TYPES */

let a: Date; // date type
let b: string []; // array of strings
let c: number []; // array of numbers
let d: {id: number, name: string}; // object
let f: {author: string, book: {title: string, year: number}} // nested object

c = [1,2,3];
// c = [1,2,4] // Type 'string' is not assignable to type 'number'

d = {id: 1, name: 'John'}
// d = {id: 1, name: true} // Type 'boolean' is not assignable to type 'string'

b = 'Hello' as any; // type casting

