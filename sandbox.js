// // let age = 25;
// // let year = 2022;

// // //log things to console
// // console.log(age, year);

// // age = 30;

// // console.log(age);

// // const point = 100;
// // console.log(point);

// // var score = 75;
// // console.log(score);

// //strings
// console.log('hello, world');

// let email = 'mario@thenetninja.co.uk';
// console.log(email);

// //string concat
// let firstName = 'Brandon';
// let lastName = 'Sanderson';

// let fullName = firstName + ' ' + lastName;
// console.log(fullName);

// //getting characters
// console.log(fullName[0]);

// //string length
// console.log(fullName.length);

// //string methods
// console.log(fullName.toUpperCase());

// //common string methods
// //let result = email.lastIndexOf('n');

// //let result = email.slice(2, 14);

// //let result = email.substring(4,10);

// //let result =  email.replace('m', 'w');

// console.log(result);

let radius = 10;
const PI = 3.14;

console.log(radius,PI);

//math operators +, -, *, /, **( to the power of), %

console.log(10/2);
console.log( radius % 3);

console.log(PI * radius**2);

//order of operations: B(brackets) I(indicies) D(divison) M(multiplication) A S

let likes = 10;
// likes = likes + 1;
// likes += 1;
// likes++
// likes --

likes %= 3;

const title = "Best reads of 2019";
const author = "Mario";

let result =`The blog called ${title} by ${author} has ${likes} likes`

console.log(result);

//creating html template
let html = `
        <h2>${title}</h2>
        <p>By ${author}</p>
        <span>This blog has ${likes} likes</span>
`;

console.log(html);
