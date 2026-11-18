
// lesson from class
console.log("JS is connected!");


//fundamental data types
const studentID = 123456789; // constant dont change
let firstname = "Jazmin"; // string
let age = 17;
let year = 2026;
let gpa = 3.8;
let major = "Computer Science";
console.log(firstname, age);


// symbols 
$ wow $$$$$$$$
<> 
=
= 
.toFixed 
.floor
getHalf
double
likelyVerb
.includes
length
EPSILOW  LOW THEN 1
Math.sqrt RETURNS SQUARE ROOT OF A NUMBER
or .max returns the largest number or perm
.toLowerCase
.toUpperCase
replaceAll
.slice
addNums

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



