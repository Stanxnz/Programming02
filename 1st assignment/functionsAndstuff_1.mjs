/* 
    NB! There is absolutly no point to these tasks if you use AI or "google" to solve them.
    The point is to learn and practice, not to get the perfect answer.
*/

/*  Task 1
    Create a function that given an array of integers returns the largers number in the array.
    Do not use any built in functionality, use only basic js.
*/
function findLargestNumber(array){
  let largestNumber = array[0];

  for (let i = 1; i < array.length; i++){
    if (array[i] > largestNumber){
      largestNumber = array[i];
    }
  }
  return largestNumber;
}

let numbers = [4, 14, 1, 8, 11];
console.log(findLargestNumber(numbers));

/*  Task 2
    Create a function that returns an array of n posetive numbers (only integers), where n is given as a parameter.
    The numbers should be unique but not consecutive.
    Do not use any built in functionality for sorting, matching etc. (You may use Random and Math functions)
*/
function generateUniqueAndNotConsecutiveNumbers(n) {
  const numbers = [];
  
  while (numbers.length < n) {
    const randomNumber = Math.floor(Math.random() * 100) + 1; 

    if (numbers.length === 0 || Math.abs(randomNumber - numbers[numbers.length - 1]) > 1) {
      numbers.push(randomNumber);
    }
  }
  
  return numbers;
}

let n = 14;
let randomNumbers = generateUniqueAndNotConsecutiveNumbers(n);
console.log(randomNumbers);


/*  Task 3
    Create a function that given a string and a pattern returns true if the pattern matches the string.
    Do not use any built in functionality for matching (no regex)etc.

    A pattern is defined as a series of *,n,s and -.
    * matches anything except an empty string.
    n matches any number.
    s matches any string.
    - matches a single space.

    Example:
    pattern: sssss-nnn-*****
    string: "Hello 123 World"

*/
function areThePatternsMatching(string, pattern){
  let i = 0, j = 0;

  while (i < string.length && j < pattern.length){
    if (pattern[j] === 's'){

      while (i < string.length && string[i] !== ' '){
        i++;
      }
      j++;
    }
    else if (pattern[j] === 'n'){
      if (i < string.length && !isNaN(string[i])){
        i++;
        j++;
      } else {
        return false;
      }
    }
    else if (pattern[j] === '-'){
      if (string[i] === ' '){
        i++;
        j++;
      } else {
        return false;
      }
    }
    else if (pattern[j] === '*'){
      if (i < string.length){
        i++
      } else {
        return false;
      }
      j++
    } else {
      return false;
    }
  }
  return i === string.length && j === pattern.length;
}

let pattern = "sss-nnnn-**";
let string = "Hello 14 World"
console.log(areThePatternsMatching(string, pattern));

/*  Task 4
    Create a function that reads an indetermind number of integers from the console and returns the sum of the numbers.
*/



/*  Task 5
    Create a function that given a string returns the number of words in the string.
    Do not use any built in functionality for splitting strings etc.
*/
function countWords(inputString) {
    let count = 0;
    let inWord = false;
  
    for (let i = 0; i < inputString.length; i++) {
      const char = inputString[i];
      
      if (char !== " " && !inWord) {
        count++;
        inWord = true;
      }
      
      if (char === " ") {
        inWord = false;
      }
    }
  
    return count;
  }
  
  let testString = "Let's test this by asking what integers are";
  console.log(countWords(testString));  


/*  Task 6
    Create the functions that given a color value in hex format reutns the RGB and CMYK values .
    Do not use any built in functionality.

    Hex is defined as #RRGGBB. Where RR, GG and BB are two digit hexadecimal numbers.
    RGB is defined as three integers between 0 and 255.
    CMYK is defined as four floats between 0 and 1.

    The conversion from RGB to CMYK is defined as:
    K = 1 - max(R, G, B) / 255
    C = (1 - R / 255 - K) / (1 - K)
    M = (1 - G / 255 - K) / (1 - K)
    Y = (1 - B / 255 - K) / (1 - K)

    Tip: 
    - You can use int.Parse("FF", System.Globalization.NumberStyles.HexNumber) to convert a hex number to an integer.
    - You can read a substring from a string using str.Substring(startIndex, length)
    - You can return multiple values from a function by using {}.

*/

function hexToRGB(hex){
  hex = hex.replace('#', '');

  let R = parseInt(hex.substr(0, 2), 16); 
  let G = parseInt(hex.substr(2, 2), 16); 
  let B = parseInt(hex.substr(4, 2), 16); 

  return{R:R, G:G, B:B};
}

function RGBToCMYK(R, G, B){
  let C, M, Y, K;

}

