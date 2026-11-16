//*For each question, use console.log to 'print' your answer to the console. Print "full sentences" to give context to your answer.
//*Break your answers up by section, like line 5 as an example.
//*Each answer MUST be numbered, for example: 1. Each sibling would get $5.

// Mild Challenges 
console.log("Mild Challenges");
/// The three siblings get their allowance once a week.
/// Their current obsession is buying unique card games and collecting shoes.
/// Below is the total money they split weekly, their names, and the price of

console.log("JS is connected!");


//fundamental data types
const studentID = 123456789; // constant dont change
let firstname = "Jazmin"; // string
let age = 17;
let year = 2026;
let gpa = 3.8;
let major = "Computer Science";
console.log(firstname, age);


let weeklyAllowance = 129;
let sibling1 = "Jordan";
let sibling2 = "Quinn";
let sibling3 = "Ricardo Montoya De La Rosa Ramirez";
let game = 15.99;
let shoes = 89.78;

 //without let
 age = 17;

 //additional operations 
console.log(Math.round(5.8));
console.log(Math.floor(5.8)); //floor will always round DOWN
console.log(Math.ceil(5.8)); //ceil will always round UP

//Concatenation v. templates
///no like option 1 (he said that)
//let string1 = firstname + " is " + age + " years old. ";
//console.log(string1);
//option 2
let string2 = `${firstname} is ${age} years old.`; //must use back tick!
console.log(string2);

//string methods
console.log(string2.toUpperCase());

// comparison operators - true or false?
console.log(age == 10); // false
console.log("42" === 42); // false
console.log(age >= 19); // false
console.log(year <= 19); // false
console.log(year === 2026); // true

//conditional statements
let username = "Jazmin";
let age2 = 17;
if (username === "Jazmin" && age2 >= 17) {
    console.log("Welcome!");
}else if (age2 <18){
    console.log("Sorry, you are too young to enter.");
}else { console.log(`Welcome ${username}`) }

//functions
function getHalf(x) {
    if (x % 2 === 0) {
        return x / 2;
    } else {
        return false;
    }
}

const a = getHalf(10);
const b = getHalf(22);
const c = getHalf(3);

console.log(a, b, c);

//FUNCATIONS CANN ALSO BE WRITTEN AS ARROW FUNCTIONS
const getHalfArrow = (x) => {
    if (x % 2 === 0) {
        return x / 2;
    } else {
        return false;
    }
};

console.log(getHalfArrow(10), getHalfArrow(22), getHalfArrow(3));

// double func
function double(x) {
    return x * 2;
}
console.log(double(21)); 
//arrow
const doubleArrow = (x) => {
    return x * 2;
}
console.log(doubleArrow(21));


//likley a verb? if the word ends in -ing it is likely a verb. retirn true else return false

function likelyVerb(X) {
    if (X.includes("ing")) {
        return true;
    } else {
        return false;
    }
}
console.log(likelyVerb("hello"))
console.log(likelyVerb("jumping"))
console.log(likelyVerb("blingy"))

//arrow function version
const likelyVerb2 = (X) => {
    if (X.includes("ing")) {
        return true;
    } else {
        return false;
    }
}

console.log(likelyVerb("hello"))
console.log(likelyVerb("jumping"))
console.log(likelyVerb("blingy"))




// 1. If divided evenly, how much would each sibling get for the week?

// 2. How many games can Jordan buy with their cut?

// 3. The cost of games just went up by a dollar and shoes are on sale at 50% (half) off. Change the variables to their new prices.

// 4. Quinn and Ricardo are twins. If they put their money together, how many on sale shoes can they buy in a month (4 weeks)?

// 5. How many more games can they buy if they put their money together compared to if they had bought games on their own?

// 6. Print out the three siblings' names. "The three siblings are __, __, and ___."

// 7. Use a built-in method to count how many characters are in Ricardo's name.

// 8. Use a built-in method to print out the string "RICARDO MONTOYA DE LA ROSA RAMIREZ"

// 9. Use a built-in method to print out the string "ricardo montoya de la rosa ramirez"

// 10. Use a built-in method to print out Ricardo's name, but with all the instances of the letter a removed or deleted.

// 11. Use a built-in method to print out "De La Rosa"

// Medium Challenges

// 12. Rewrite these function as an arrow function.
/// Then, call them with different inputs to check the result.

function getRandomNum() {
    return Math.floor(Math.random() * 100);
}

function greeting(name) {
    return `Hello ${name}, I'm glad you can make it!`;
}

function perfectRoot(x) {
    let root = Math.sqrt(x);
    if (Math.floor(root) === root) {
        return root;
    } else {
        return "No perfect root"
    }
}

// 13. Fix/Finish the following functions.
/// Then, call them with at least 2 different inputs to ensure they work.

/// a. Adds 2 numbers and returns the sum
const addNums = (x, y) => {
    let sum = x + y;
}
// uncomment the line below, to call the function, and add one more function call
// console.log( addNums(4, 6) );


/// b. Prints a special message if name is "Beyonce"
const isBeyonce = (name) => {
    if (name === "Beyonce") {
        return "Welcome Queen!";
    } else {
        return `Sorry ${name}, you're not Beyonce`;
    }
}
// Test "Beyonce" and other names to ensure it works



/// c. If the number is even, return the number divided by 2, otherwise, return the number
/// For example reduceEvens(10) => 5 -- reduceEvens(11) => 11
const reduceEvens = (x) => {
    if (x % 2 === 0) {
        return x / 2;
    } else {
        return x;
    }
}
//Write your own function calls


// 14. Write a function called shortenString(string) that returns the first 10 characters of a string if it is longer than 10
//remove all
const shortenString = (string) => {

}



// Spicy Challenges
let burger = 5.99;
let fries = 3.99;
let soda = 1.99;

// 15. Write a function buyBurgers(budget) that takes in a budget amount and returns the number of burgers that can be bought.
/// If no burgers can be bought, return "Sorry, no burgers for you."

const buyBurgers = (budget) => {

}

// 16. A meal consists of 1 burger, 1 fry, and 1 soda.
/// Write a function called buyMeals(budget) that tells the user how many meals they can buy and how much money they will have left over.
/// Bonus: Round the answer to the nearest penny.
const buyMeals = (budget) => {

}


// 17. [Challenge] Write a function missingLeg(side1, side2) that takes in the length of a hypotenuse and a leg of a right triangle and prints out the missing leg's length
/// The larger side should be the hypotenuse.  



// 18. [Super Challenge] In math, Factorial is the product of an integer and all the integers below it.
/// For example: factorial(3) = 3*2*1 = 6 ---  factorial(5) = 5*4*3*2*1 = 120
/// Write a function factorial(x) that finds the factorial of any integer.
