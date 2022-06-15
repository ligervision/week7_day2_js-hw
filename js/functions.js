// console.log('Hello');

/*
    JavaScript Functions
*/

// Regularly-Named Functions
// function <funcName>(){ code to execute when called }

function addNums(){
    let num1 = 10;
    let num2 = 20;
    return num1 + num2;
}

// Execute a function: <funcName>();
console.log(addNums);
console.log(addNums());


// Regularly-Named Function with Parameters
// function <funcName>(param1,...){ code to execute }
function addNums2(num1, num2){
    return num1 + num2
}

console.log(addNums2);
console.log(addNums2(15, 30));


// Put Exercise 1 from last night and put it in a Function

let arr = [1, 2, 3, 5, 6, 7]

for (let i = 0; i < arr.length - 1; i++){
    if (arr[i] + 1 != arr[i+1]){
        console.log(i+1)
    }
}


function firstNonConsec(anArr){
    // loop through the array via index (i)
    for (let i = 0; i < arr.length - 1; i++){
        // look at each number & compare it to the number to its right
        let number = anArr[i]
        let numberToRight = anArr[i+1]
        // If the number to its right is not the next num consecutively, return that index
        if (number + 1 != numberToRight){
            return i+1
        }
    }
    // If we loop through the entire array and all are consecutive, return -1
    return -1
}

console.log(firstNonConsec([1, 2, 3, 5, 6, 7]))


// Default Parameters
function addNums3(num1, num2=100){
    return num1 + num2
}

console.log(addNums3(10));
console.log(addNums3(10, 15));


// Function variable declaration
// var (let, const) nameOfVariable = function(){ code to call when executed }
var addSomeNums = function(){
    let num1 = 100;
    let num2 = 200;
    return num1 + num2
}
console.log(addSomeNums);
console.log(addSomeNums());

var addMoreNums = function(num1, num2){
    return num1 + num2
}
console.log(addMoreNums);
console.log(addMoreNums(10, 20));


const anotherFunc = function someCoolNameFunc(a, b){
    return b - a
}
console.log(anotherFunc);
console.log(anotherFunc(20,50));


// Arrow Function
// var varName = () => {}

var myFirstArrowFunc = () => {}
console.log(myFirstArrowFunc);
console.log(typeof myFirstArrowFunc);


// Arrow Function with parameters

// Remove the word 'function' and replace with '=>' between args and {code}
var addNumsArrow = (num1, num2) => {
    return num1 + num2
}

// If {code} is one line with only return, you can remove {} and 'return'
var addNumsArrow2 = (num1, num2) => num1 + num2

console.log(addNumsArrow(5,20));
console.log(addNumsArrow2(5,20));

// If one and only one parameter, parentheses around it are not necessary
// You need () if there's two or more parameters or zero parameters
var addTen = num => num + 10

console.log(addTen(24));


console.log("EXERCISE 2 AS ARROW:")

// Create an arrow function for exercise 2 of last night's homework

let numbers = [10, 12, -9, 3, -1, 0, 15]

// Set a variable to keep track of our sum, start with 0
let positiveNumSum = 0
// Loop through the array of numbers
for (let n of numbers){
    // Check if the n is positive (n>0)
    if (n>0){
        // Add n to our total of positive numbers
        positiveNumSum += n
    }
}
console.log(positiveNumSum);


function totalPositives(arr){
    let posTotal = 0;
    for(let num of arr){
        if (num > 0){
            posTotal += num
        }
    }
    return posTotal
}
console.log(totalPositives([2, 4, 6, -12, -4, 4, 23, -53]));

var totalPositives = arr => { // arrow function with one & only one parameter
    let posTotal = 0;
    for(let num of arr){
        if (num > 0){
            posTotal += num
        }
    }
    return posTotal
}
console.log(totalPositives([2, 4, 6, -12, -4, 4, 23, -53]));


// Write a function to find the max number in an array
// 0 < length of the array < 100
// Ex 1: [3, 7, 2, 8, 10, 4, 11] Output: 11
// Ex 2: [33, 88, 55, 22, 11, 44] Output: 88
// Ex 3: [10] Output: 10

function maxNum(arr){
    let maxNum = 0;
    for (let n of arr) {
        if (n > maxNum) {
            maxNum = n
        }
    }
    return maxNum
}

const maxNumber = arr => {
    let maxNum = 0;
    for (let n of arr) {
        if (n > maxNum) {
            maxNum = n
        }
    }
    return maxNum
}
console.log('=======')
console.log(maxNum([3, 7, 2, 8, 10, 4, 11]))
console.log(maxNum([33, 88, 55, 22, 11, 44]))
console.log(maxNum([10]))

function maxNum(numbers) {
    let max = numbers[0]
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i]
        }
    }
    return max
}
console.log('=======')
console.log(maxNum([3, 7, 2, 8, 10, 4, 11]))
console.log(maxNum([33, 88, 55, 22, 11, 44]))
console.log(maxNum([10]))

