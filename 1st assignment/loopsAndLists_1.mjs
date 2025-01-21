/*
    NB! There is absolutely no point to these tasks if you use AI or "google" to solve them.
    The point is to learn and practice, not to get the perfect answer.
*/

/* Task 1
    Using one for loop, create a list of the duplicate words in the string. Use as many lists as you need.
    "If the zookeeper had to choose, would the zookeeper choose to use the moose the zookeeper uses, or would the zookeeper choose to choose a new moose to use?"
*/
const ZookeeperString = "If the zookeeper had to choose, would the zookeeper choose to use the moose the zookeeper uses, or would the zookeeper choose to choose a new moose to use?";

const WordsInString = ZookeeperString.toLowerCase().replace(/[,.?]/g, "").split(" ");
const seen = [];
const duplicates = [];

for (let word of WordsInString){
    if (seen.includes(WordsInString)&& !duplicates.includes(WordsInString)){
        duplicates.push(WordsInString);
    }
    seen.push(WordsInString);
}

console.log("Duplicate words in string:", duplicates); //messed something up

/* Task 2
    Using loops, combine the two arrays into one.
    Use arrays [] only, no other data structures.
    First array: ['a', 'b', 'c', 'd', 'e']
    Second array: [1.1, 2.2, 3.3, 4.4, 5.5]
*/
const arrayOne = ['a', 'b', 'c', 'd', 'e'];
const arrayTwo = [1.1, 2.2, 3.3, 4.4, 5.5];

const combined = [];

for (let i = 0; i < arrayOne.length; i++){
    combined.push(arrayOne[i], arrayTwo[i]);
}

console.log("Combined arrays:", combined);

/* Task 3
    Using two nested for loops and an array of type char, create the following pattern as a string:
    *******
    *     *
    *     *
    *  *  *
    *     *
    *     *
    *******
*/
let pattern = "";

// Outer loop for rows
for (let i = 0; i < 7; i++) {
  for (let j = 0; j < 7; j++) {
    if (i === 0 || i === 6 || j === 0 || j === 6 || (i === 3 && j === 3)) {
      pattern += "*";
    } else {
      pattern += " ";
    }
  }
  pattern += "\n"; // Move to the next line
}

console.log(pattern);


/* Task 4
    Given the array of digits, create an array of the numbers missing from the sequence.
    Using loops, not built-in functionality.
*/
let digits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206];

let missingNumbers = [];

for (let i = digits[0]; i <= digits[digits.length - 1]; i++) {
  let isFound = false;

  for (let j = 0; j < digits.length; j++) {
    if (digits[j] === i) {
      isFound = true;
      break;
    }
  }

  if (!isFound) {
    missingNumbers[missingNumbers.length] = i; 
  }
}

console.log("Missing numbers:", missingNumbers);

/* Task 5
    Find the length of the longest consecutive sequence of characters in the string below.
    Using only loops, no built-in functionality.
*/
let sourceString = "aqcmhrtutdvmyiqcyoyktnfninieglriaqvuxktzkfvfncfrrhfpptgwnhrsbcyjaizodspxxenkcbzwbwnzmoibdjpfdgzpzhoqevdjrilkzayytwycigelbrnusgzeqpimcgcazegftxrnbxinfbpnoljovywqpkfbiamjpedhqfuunowldjnazyttfdpdcytcvhjw";

let longestSequenceOfChar = 0;
let currentSequenceOfChar = 1;