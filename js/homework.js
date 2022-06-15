/*
    Exercise 1: Write a function called toCelcius that takes in a number representing 
    temperature in Fahrenheit and converts the number into Celcius.

    Ex 1. toCelcius(32) // 0
    Ex 2. toCelcius(212) // 100
    Ex 3. toCelcius(50) // 10
*/

function toCelcius(temp) {
    let celcius = (temp - 32) * (5/9);
    return celcius;
}
// let temp = 32
// console.log(toCelcius(temp))

let temp = 50
console.log(toCelcius(temp))



/*
    Exercise 2: Create a class for a User that sets username and password property
    on creation. Add a method to change the user's password. The method should take in 
    the old password and new password. If the old password is wrong do not reset the password.
    Create an instance of the new user and then change their password using the method.
*/

// class User {
//     constructor(username, password) {
//       this.username = username;
//       this.password = password;
//     }
//     // Getter
//     get area() {
//         return this.calcArea();
//     }
//     // Method
//     calcArea() {
//         return this.height * this.width;
//     }
// }

// const square = new Rectangle(10, 10);

// console.log(square.area); // 100


//   const obj = {
//     foo() {
//       return 'bar';
//     }
//   };
  
//   console.log(obj.foo());
//   // expected output: "bar"
  






/*
    Exercise 3: Write a function that takes in an array of integers and returns
    an array of the negative integers squared using Array methods

    Ex 1. squareNegatives([-10, -3, 4, -2, 8, 9, -3]) // [100, 9, 4, 9]
    Ex 2. squareNegatives([-5, -4, -3, -2, -1, 1, 2, 3, 4, 5]) // [25, 16, 9, 4, 1]
    Ex 3. squareNegatives([2, 4, 6, 8, 10]) // []
*/

function squareNegatives( numbers ) {
    var positives = [];
    var negSquares = [];
  
    for(var i = 0; i < numbers.length; i++) {
      if(numbers[i] > 0) {
        positives.push(numbers[i]);
      }else{
        negSquares.push(numbers[i]**2);
      }
    }
    return negSquares;
  }
  
  var result = squareNegatives([-10, -3, 4, -2, 8, 9, -3]);
  
  console.log(result);
