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

// let radius = 10;
// const PI = 3.14;

// console.log(radius,PI);

// //math operators +, -, *, /, **( to the power of), %

// console.log(10/2);
// console.log( radius % 3);

// console.log(PI * radius**2);

// //order of operations: B(brackets) I(indicies) D(divison) M(multiplication) A S

// let likes = 10;
// // likes = likes + 1;
// // likes += 1;
// // likes++
// // likes --

// likes %= 3;

// const title = "Best reads of 2019";
// const author = "Mario";

// let result =`The blog called ${title} by ${author} has ${likes} likes`

// console.log(result);

// //creating html template
// let html = `
//         <h2>${title}</h2>
//         <p>By ${author}</p>
//         <span>This blog has ${likes} likes</span>
// `;

// console.log(html);

// let ninjas = ['shaun', 'rye', 'chun-11'];

// let results = ninjas.push('ken');
// result = ninjas.pop();
// console.log(ninjas);
// console.log(results);
// console.log(results);

// let age = null;

// console.log(age, age+3, `The age is ${age}`);


// console.log(true, false, "true", "false");

// //methods can return boolean
// let email = 'luigi@thenetninja.co.uk';
// let names = ['mario', 'luigi', 'toad'];

//let result = email.includes('@');
// let result = names.includes('toad');

// console.log(result);
//let age = 25;

// console.log(age == 25);
// console.log(age == 30);
// console.log(age > 20);
// console.log(age === '25');

// let names = 'shaun';

// console.log(names == 'shaun');
// console.log(names == 'Shaun');
// console.log(names < 'cystal');
// console.log(names > 'Shaun');

// let age = 25;

// console.log(age === 25);
// console.log(age === '25');
// console.log(age !== '25');
// console.log(age !== '25');

// let score = '100';

// console.log(Number(score) + 1)

// let result = Number('hello');

// console.log(result);

//let result = String(50);

//console.log(result, typeof result, '   something');

// for loop
// for(let i = 0; i < 5; i++)
// {
//     console.log('in loop: ', i);
// }

// console.log('loop finished');

// const names = ['shaun', 'mario', 'luigi'];

// for(let i = 0; i < names.length; i++)
// {
//     console.log(names[i]);
// }

//function declaration
// function greet()
// {
//     console.log('hello there');
// }

// //function expression
// const speak = function()
// {
//     console.log('good day!');
// };

// speak();

// const speak = function(name)
// {
//     console.log(`good day ${name}`);
// };

// const calcArea = function(radius)
// {
//     return 3.14 * radius**2;
// };

// console.log(calcArea(5));

// const calcVol = function(area)
// {

// };

// calcVol(area);

//arrow function

// const calcArea = (radius) => 3.14 * radius**2;

// console.log('area is: ', calcArea(5));

// const greet = () => 'hello world';

// const bill = (production, tax) => 
// {
//     let total = 0;
//     for(let i =0; i < production.length; i++)
//     {
//         total += production[i] + production[i] * tax;
//     }

//     return total;
// };

// console.log(bill([10,15,30], 0.2));
// {
// const name = 'shaun';

// //function
//     const greet = () => 'hello';

//     const resultOne = greet();
//     console.log(resultOne)

// //methods

// let resultTwo = name.toUpperCase();
// console.log(resultTwo);
// }

//callbacks and foreach

// const myFunc = (callBackFunc) =>
// {
//     //do something
//     let value = 50;
//     callBackFunc(value);
// };

// myFunc(value =>
// {
//     //do something
//     console.log(value);
// });

// let people = ['mario', 'luigi', 'rye', 'shaun', 'chin-li'];

// const logPerson = (person, index) =>
// {
//     console.log(`${index} - Hello ${person}`);
// };

// // people.forEach((index, person) => 
// // {
// //     console.log(index, person);
// // });

// console.log(people);
// people.forEach(logPerson);

//get reference to the 'ul'
// let people = ['mario', 'luigi', 'rye', 'shaun', 'chin-li'];

// const ul = document.querySelector('.people');

// let html = ``;

// people.forEach(person =>
// {
//     //create html template
//     html += `<li style="color: purple">${person}</li>`;
// });

// console.log(html);

// ul.innerHTML = html;

let user = 
{
    name: 'crystal',
    age: 30,
    email: 'crystal@thenetninja.co.uk',
    location: 'berlin',
    blogs: 
    [
        {
        title: 'Why mac & cheese rules',
        likes: 30
        },
        {
            title: '10 things to make with marmite',
            likes: 30
        }
    ],
    login: () => console.log('the user logged in'),
    logout: () => console.log('User has logged out'),
    logBlogs: function()
    {
        this.blogs.forEach(element => {
            console.log(element.title, element.likes);
        });
    }
};

user.logBlogs();
