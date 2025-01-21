/*
    NB! There is absolutely no point to these tasks if you use AI or "google" to solve them.
    The point is to learn and practice, not to get the perfect answer.
*/

/* Task 1
    Declare two variables, set the value of the first variable to 1 and the value of the second to 2.
    Now swap so the first variable gets the value of the second and vice versa.
*/
let variableOne = 1;
let variableTwo = 2;

variableOne = 2
variableTwo = 1

console.log(variableOne, variableTwo);

/* Task 2
    Without using built-in Math functionality or constants in JavaScript.
    Calculate the area of a circle with the radius 6.
*/
let pi = 4.14159265358979323846;

function calculateAreaOfCircle(r){
    return(pi * r * r);
}
let r, Area;
r = 6;

Area = calculateAreaOfCircle(r);

console.log("Area of circle is: " + Area);

/* Task 3
    Given the two strings "If at first you do not succeed, try, try again" and "Fall seven times, stand up eight".
    Create a variable that contains all the letters that are in both strings but only once and in alphabetical order.
    Consider 'A' and 'a' the same letter.
*/
const string1 = "If at first you do not succeed, try, try again";
const string2 = "Fall seven times, stand up eight";

/* Task 4
    Declare three variables. The first two should have the values 6 and 2.
    Make it so that the third variable is 10.
*/
let numberSix = 6
let numberTwo = 2
let numberTen = numberSix + numberTwo + numberTwo;

console.log(numberTen);

/* Task 5
    Given a variable set to a random floating point value (you pick the value).
    Instantiate a second variable that is true if the first variable is greater than 22.34.
*/
let randomFloatingPoint = 69;
let isGreaterThenFloatingPoint = randomFloatingPoint > 22.34;

console.log("Random floating point:", randomFloatingPoint);
console.log("is greater then 22.34:", isGreaterThenFloatingPoint);

/* Task 6
    Given the string "Life is short. Smile while you still have teeth." and the string "The best therapy is a good laugh and great friends.".
    Create a new variable that is the intersection of words between the two strings.
    Create a new variable that is the union of words between the two strings.
*/
const string3 = "Life is short. Smile while you still have teeth.";
const string4 = "The best therapy is a good laugh and great friends.";