//Coding challenge #1: Print numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
  console.log(i)
}

//Coding challenge #2: Print the odd numbers less than 100
//solution-1
for (let i = 1; i <= 100; i++) {
  if (i % 2 !== 0) {
    console.log(i)
  }
}

console.log("-------------------")

//solution -2

for (var i = 1; i <= 100; i += 2) {
  console.log(i);
}

console.log("-------------------")
// solution-3
for (let i = 0; i <= 100; i++) {

  if (i % 2 === 1) {
    console.log(i)
  }
}
console.log("-------------------")
//Coding challenge #3: Print the multiplication table with 7
for (let i = 0; i < 10; i++) {
  var row = "7x" + i + "=" + 7 * i
  console.log(row)
}
console.log("-------------------")
//Coding challenge #4: Print all the multiplication tables with numbers from 1 to 10

for (let i = 0; i <= 10; i++) {
  for (let x = 0; x <= 10; x++) {
    console.log(i + "x" + x + "=" + i * x)
  }
}
console.log("-------------------")
//Coding challenge #5: Calculate the sum of numbers from 1 to 10
let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum += i;

}
console.log(sum)
console.log("-------------------")
//Coding challenge #6: Calculate 10!
var fact = 1
for (let i = 1; i <= 10; i++) {
  fact *= i

}
console.log(fact)
console.log("------------------")
//Coding challenge #7: Calculate the sum of odd numbers greater than 10 and less than 30
sum = 0;
for (let i = 11; i <= 29; i += 2) {
  sum += i
}
console.log(sum)

console.log("---------------------")
//Coding challenge #8: Create a function that will convert from Celsius to Fahrenheit
function celciusToFahrenheit(n) {
  return n * 1.8 + 32;
}
console.log(celciusToFahrenheit(20));

//Coding challenge #9: Create a function that will convert from Fahrenheit to Celsius
function fahrenheitToCelcius(n) {
  return (n - 32) / 1.8;
}
console.log(fahrenheitToCelcius(68));
console.log("---------------------")
//Coding challenge #10: Calculate the sum of numbers in an array of numbers

var ar = [2, 3, -1, 5, 7, 9, 10, 15, 95];
sum = 0;
for (let i = 0; i < ar.length; i++) {
  sum += ar[i]
}
console.log(sum)
console.log("---------------------")
//Coding challenge #11: Calculate the average of the numbers in an array of numbers
var arr = [1, 3, 9, 15, 90];
sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i]
}
console.log(sum / arr.length)

console.log("---------------------")
//Coding challenge #12: Create a function that receives an array of numbers and returns an array containing only the positive numbers
function getPositives(ar) {
  var ar2 = [];

  for (var i = 0; i < ar.length; i++) {
    var el = ar[i];

    if (el >= 0) {
      ar2.push(el);
    }
  }

  return ar2;
}

var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];


console.log(getPositives(ar));

console.log("---------------------")
//Coding challenge #12: Create a function that receives an array of numbers and returns an array containing only the positive numbers
var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
function getPositive(ar) {
  return ar.filter(el => el >= 0)
}
console.log(getPositive(ar))
console.log("---------------------")

//Coding challenge #13: Find the maximum number in an array of numbers

function findMax(ar) {
  var max = ar[0];

  for (var i = 0; i < ar.length; i++) {
    if (ar[i] > max) {
      max = ar[i];
    }
  }

  return max;
}

var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var max = findMax(ar);
console.log("Max: ", max);
console.log("---------------------")

//Coding challenge #14: Print the first 10 Fibonacci numbers without recursion

var num0 = 0;
var num1 = 1;
var nextNum = num0+num1;
for(let i = 0;i<=10;i++){
  console.log(num0)
  nextNum =num0+num1;
  num0=num1;
  num1=nextNum
}
console.log("---------------------")
//Coding challenge #15: Create a function that will find the nth Fibonacci number using recursion
function fibonacci(n){

 if(n==0){
  return 0
 }else if (n==1) {
  return 1
 }else {
  return fibonacci(n - 1) + fibonacci(n - 2);
 }
}
console.log(fibonacci(10))
console.log("---------------------")