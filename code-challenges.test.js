// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.


describe("fibaSeq", () => {
    const fibLength1 = 6
    // Expected output: [1, 1, 2, 3, 5, 8]
    
    const fibLength2 = 10
     // Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

    it("takes a number for an argument and returns an array in fibonaci     sequence equal to the lenght of the number", () => {
      expect(fibaSeq(fibLength1)).toEqual([1, 1, 2, 3, 5, 8])
      expect(fibaSeq(fibLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34,55]    )} 
    )
}
)
 
//Yarn jest result:

//Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total
// Snapshots:   0 total
// Time:        0.487 s
// Ran all test suites.
// error Command failed with exit code 1.

// b) Create the function that makes the test pass.
// Pseudo code:
// create a function called fibaSeq to generate fibonacci series up to n terms

// 
const fibaSeq = (number) => {
let fibaNums = [0, 1]  //to initialize the first two values of the fibonacci sequence
// next is to run a loop adding the last two values in the sequence to come up with the value of the next value in the sequence, push the next value in the fibaNums array.
           
           for(let i = 1; i < (n - 2); i++) {
               fibaNums.push(fibaNums[fibaNums.length-1] + fibaNums[fibaNums.length- 2])
           } return (fibaNums)
       
   }
    
console.log(fibaSeq(fibLength1))
console.log(fibaSeq(fibLength2))

// Test result:
//FAIL  ./code-challenges.test.js
// ● Test suite failed to run

// ReferenceError: fibLength1 is not defined

//   55 |     
//   56 |
// > 57 | console.log(fibaSeq(fibLength1))
//      |                     ^
//   58 | console.log(fibaSeq(fibLength2))
//   59 |
//   60 | // Test result:

//   at Object.fibLength1 (code-challenges.test.js:57:21)
//   at TestScheduler.scheduleTests (node_modules/@jest/core/build/TestScheduler.js:317:13)

// Test Suites: 1 failed, 1 total
// Tests:       0 total
// Snapshots:   0 total
// Time:        0.381 s
// Ran
// End of test result
// Not sure how to fix the code to make it past the test. I was stuck trying to fix it to make it work. so I proceeded to the next problem.


// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

describe("oddNum", () => {
    it("The odd numbers in the array", () => {
      expect(fullArr1()).toEqual([-9, 7, 9, 199])
      expect(fullArr2()).toEqual([-823, 7, 23])
    }
)
})

const fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// // Expected output: [-9, 7, 9, 199]

const fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]

//Test result:
// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total
// Snapshots:   0 total
// Time:        0.369 s
// Ran all test suites.

// b) Create the function that makes the test pass.
 //pesudo code: create a function called sortOddNum 
 //that takes in an array of different data types and returns an array of odd numbers sorted from least to the greatest
 // filter the array for datatype numbers using filter
 // filter the resulting array for odd numbers using modolo method
 // arrange the resulting array of odd numbers from smallest to greatest value using sort method

   const sortOddNum = (array) => {
       let oddNum =[] // to initialize oddNum array
       let onlyNumbers =[]  // to initialize onlyNumbers
      return onlyNumbers = array.filter(Number)
      return oddNum = onlyNumbers.filter() % 2 !== 0
      return sortOddNum = (oddNum.sort)
   }

  console.log(sortOddNum(fullArr1))
  console.log(sortOddNum(fullArr2))

  //Test result:
  // Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total
// Snapshots:   0 total
// Time:        0.395 s
// Ran all test suites.
// error Command failed with exit code 1.

// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

describe("accumSum", () => {
    it("returns the accumulated sum of the numbers in an array", () => {
      expect(numbersToAdd1()).toEqual([2, 6, 51, 60])
      expect(numbersToAdd2()).toEqual([0, 7, -1, 11])
      expect(numbersToAdd3()).toEqual([])
    })
})
const numbersToAdd1 = [2, 4, 45, 9]
//Expected output: [2, 6, 51, 60]

const numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]
const numbersToAdd3 = []

//Test result: 
// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total
// Snapshots:   0 total
// Time:        0.36 s
// Ran all test suites.
// error Command failed with exit code 1.
//end test result


// b) Create the function that makes the test pass.

//create a function called accumSum
//that takes in an array of numbers
//and returns an array of the accumulating sums
// empty array need to return an empty array

const accumSum = (array) => {
let resultSum = [] // to initialize the resultSum array to zero
let currentSum = (0) // to initialize currentSum to zero
if(array = [])  // if input is an empty array
    return resultSum   // returns an empty array that was just initialized to zero
    else 
       for(let i = 0; i <array.length; i++) { // using for loops to go through the array 
     let currentVal = array[i] // current value of the array at index[i]
        currentSum += currentVal; // adding the current value to the sum of previous values
        resultSum.push(currentSum) // pushing the current sum to the resultSum array

    return resultSum;  // resulting array of sums at different[i]
}
}
console.log(accumSum(numbersToAdd1))
console.log(accumSum(numbersToAdd2))
console.log(accumSum(numbersToAdd3))