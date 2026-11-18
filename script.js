//*For each question, use console.log to 'print' your answer to the console. Print "full sentences" to give context to your answer.
//*Break your answers up by section, like line 5 as an example.
//*Each answer MUST be numbered, for example: 1. Each sibling would get $5.

// Mild Challenges 

console.log("Mild Challenges");

/// The three siblings get their allowance once a week.
/// Their current obsession is buying unique card games and collecting shoes.
/// Below is the total money they split weekly, their names, and the price of

let weeklyAllowance = 129;
let sibling1 = "Jordan";
let sibling2 = "Quinn";
let sibling3 = "Ricardo Montoya De La Rosa Ramirez";
let game = 15.99;
let shoes = 89.78;

// 1. If divided evenly, how much would each sibling get for the week?
//1. answer
let eachSiblingGets = weeklyAllowance / 3;
console.log(`1. Each sibling would get $${eachSiblingGets.toFixed(2)} for the week.`);


// 2. How many games can Jordan buy with their cut?
let jordanGames = Math.floor(eachSiblingGets / game);
console.log(`2. ${sibling1} can buy ${jordanGames} games with their cut.`);



// 3. The cost of games just went up by a dollar and shoes are on sale at 50% (half) off. Change the variables to their new prices.
game = 16.99;
shoes = shoes * 0.5;
console.log(`3. The new game price is $${game.toFixed(2)} and the sale shoe price is $${shoes.toFixed(2)}.`);


// 4. Quinn and Ricardo are twins. If they put their money together, how many on sale shoes can they buy in a month (4 weeks)?
let twinsMonthlyMoney = (eachSiblingGets * 2) * 4;
let twinsShoes = Math.floor(twinsMonthlyMoney / shoes);
console.log(`4. ${sibling2} and ${sibling3} can buy ${twinsShoes} pairs of shoes in a month.`);


// 5. How many more games can they buy if they put their money together compared to if they had bought games on their own?
let twinsGames = Math.floor(twinsMonthlyMoney / 4 / game);
let individualGames = Math.floor(eachSiblingGets / game);
let extraGames = twinsGames - (individualGames * 2);
console.log(`5. By putting their money together, they can buy ${extraGames} more games than buying it separately.`);



// 6. Print out the three siblings' names. "The three siblings are __, __, and ___."
console.log(`6. The three siblings are ${sibling1}, ${sibling2}, and ${sibling3}.`);


// 7. Use a built-in method to count how many characters are in Ricardo's name.
console.log(`7. Ricardo's name has ${sibling3.length} characters.`);


// 8. Use a built-in method to print out the string "RICARDO MONTOYA DE LA ROSA RAMIREZ"
console.log(`8. ${sibling3.toUpperCase()}`);



// 9. Use a built-in method to print out the string "ricardo montoya de la rosa ramirez"
console.log(`9. ${sibling3.toLowerCase()}`);


// 10. Use a built-in method to print out Ricardo's name, but with all the instances of the letter a removed or deleted.
console.log(`10. ${sibling3.replaceAll("a", "")}`);

// 11. Use a built-in method to print out "De La Rosa"
console.log(`11. ${sibling3.slice(16, 26)}`);



// Medium Challenges
console.log("Medium Challenges")

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

// REWRITE AS ARROW FUNCTIONS BELOW YAH
 const getRandomNumArrow = () => {
    return Math.floor(Math.random() * 100);
}

const greetingArrow = (name) => {
    return `Hello ${name}, I'm glad you can make it!`;
}
const perfectRootArrow = (x) => {
    let root = Math.sqrt(x);
    if (Math.floor(root) === root) {
        return root;
    } else {
        return "No perfect root"
    }
} 
console.log(`12. a.${getRandomNumArrow()} b.${getRandomNumArrow()} c.${getRandomNumArrow()}`);
console.log(`12. ${greetingArrow("FYODOR")}`);
console.log(`12. ${perfectRootArrow(16)}`);
console.log(`12. ${perfectRootArrow(15)}`);



// 13. Fix/Finish the following functions.
/// Then, call them with at least 2 different inputs to ensure they work.

/// a. Adds 2 numbers and returns the sum
const addNums = (x, y) => {
    let sum = x + y;
    return sum;
}
console.log(`13a. ${addNums(4, 6)}`);
console.log(`13a. ${addNums(10, 15)}`);


/// b. Prints a special message if name is "Beyonce"
const isBeyonce = (name) => {
    if (name === "Beyonce") {
        return "Welcome Queen!";
    } else {
        return `Sorry ${name}, you're not Beyonce...`;
    }
}
// reminds me of that one meme THANK YOU BEYONCE andd then a purple heart at the end

// Test "Beyonce" and other names to ensure it works
console.log(`13b. ${isBeyonce("Beyonce")}`);
console.log(`13b. ${isBeyonce("FYODOR")}`);

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
console.log(`13c. ${reduceEvens(10)}`);
console.log(`13c. ${reduceEvens(11)}`);


// 14. Write a function called shortenString(string) that returns nothing if it is longer than 10
const shortenString = (string) => {
    if (string.length > 10) {
        return "";
    }
    return string;
}

console.log(`14. ${shortenString("JavaScript")}`);
console.log(`14. ${shortenString("Fyodorisgoated")}`);


// Spicy Challenges
console.log ("Spicy Challenges")

let burger = 5.99;
let fries = 3.99;
let soda = 1.99;

// 15. Write a function buyBurgers(budget) that takes in a budget amount and returns the number of burgers that can be bought.
/// If no burgers can be bought, return "Sorry, no burgers for you."

const buyBurgers = (budget) => {
    const burgers = Math.floor(budget / burger);
    if (burgers === 0) {
        return "Sorry, no burgers for you.";
    }
    return burgers;
}

console.log(`15. ${buyBurgers(20)}`);
console.log(`15. ${buyBurgers(5)}`);



// 16. A meal consists of 1 burger, 1 fry, and 1 soda.
/// Write a function called buyMeals(budget) that tells the user how many meals they can buy and how much money they will have left over.
/// Bonus: Round the answer to the nearest penny.

const buyMeals = (budget) => {
const mealCost = burger + fries + soda;

const meals = Math.floor((budget + Number.EPSILON) / mealCost);

const remainingMoney = (budget - meals * mealCost).toFixed(2);

if (meals === 0) {
     return `Sorry, no meals for you. You have $${remainingMoney} left over.`;
    }
    return `You can buy ${meals} meals and will have $${remainingMoney} left over.`;
}

console.log(`16. ${buyMeals(20)}`);
console.log(`16. ${buyMeals(5)}`);
// I want food now THANKS A LOT...


// 17. [Challenge] Write a function missingLeg(side1, side2) that takes in the length of a hypotenuse and a leg of a right triangle and prints out the missing leg's length
console.log ("Challenge")
/// The larger side should be the hypotenuse.  

const missingLeg = (side1, side2) => {
    const hypotenuse = Math.max(side1, side2);
    const leg = Math.min(side1, side2);

    if (hypotenuse === leg) {
        return 0;
    }
//math.sqrt and max just number size/vaule related wow
    return Math.sqrt((hypotenuse * hypotenuse) - (leg * leg));
}

console.log(`17. The missing leg is ${missingLeg(5, 3).toFixed(2)}.`);
console.log(`17. The missing leg is ${missingLeg(8, 10).toFixed(2)}.`);



// 18. [Super Challenge] In math, Factorial is the product of an integer and all the integers below it.
console.log("Super Challenge")
/// For example: factorial(3) = 3*2*1 = 6 ---  factorial(5) = 5*4*3*2*1 = 120
/// Write a function factorial(x) that finds the factorial of any integer.

const factorial = (x) => {
    if (x < 0) {
        return "Factorial is undefined for negative integers";
    }

    let result = 1;
    for (let i = 2; i <= x; i++) {
        result *= i;
    }
    return result;
}
//just added this one as an eample to the first one maybe
console.log(`18. example only factorial(3) = ${factorial(3)}`);

console.log(`18. factorial(5) = ${factorial(5)}`);
console.log(`18. factorial(0) = ${factorial(0)}`);
