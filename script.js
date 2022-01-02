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
var nextNum = num0 + num1;
for (let i = 0; i <= 10; i++) {
  console.log(num0)
  nextNum = num0 + num1;
  num0 = num1;
  num1 = nextNum
}
console.log("---------------------")
//Coding challenge #15: Create a function that will find the nth Fibonacci number using recursion
function fibonacci(n) {

  if (n == 0) {
    return 0
  } else if (n == 1) {
    return 1
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}
console.log(fibonacci(10))
console.log("15---------------------")

//Coding challenge #16: Create a function that will return a Boolean specifying if a number is prime
function isPrime(num) {
  if (num < 2) {
    return false;
  } else if (num === 2) {
    return true;
  } else {
    var maxDiv = Math.sqrt(num);

    for (var i = 2; i <= maxDiv; i++) {
      if (num % i == 0) {
        return false;
      } else {
        return true;
      }
    }
  }
}

console.log(2, " is prime? ", isPrime(2));
console.log(3, " is prime? ", isPrime(3));
console.log(4, " is prime? ", isPrime(4));
console.log(5, " is prime? ", isPrime(5));
console.log(9, " is prime? ", isPrime(9));
console.log("16---------------------")

//Coding challenge #17: Calculate the sum of digits of a positive integer number
function sumDigits(n) {
  var s = n.toString();
  var sum = 0;

  for (var char of s) {
    var digit = parseInt(char);
    sum += digit;
  }

  return sum;
}
sum = sumDigits(1235231);
console.log("Sum: ", sum);
console.log("17---------------------")


//Coding challenge #18: Print the first 100 prime numbers


// Function prints the first nPrimes numbers
function printPrimes(nPrimes) {
  var n = 0;
  var i = 2;

  while (n < nPrimes) {
    if (isPrime(i)) {
      console.log(n, " --> ", i);
      n++;
    }

    i++;
  }
}
console.log(printPrimes(100))
console.log("18---------------------")
//Coding challenge #19: Create a function that will return in an array the first "nPrimes" prime numbers greater than a particular number "startAt"
console.log(getPrimes(10, 100));

function getPrimes(nPrimes, startAt) {
  var ar = [];

  var i = startAt;

  while (ar.length < nPrimes) {
    if (isPrime(i)) {
      ar.push(i);
    }

    i++;
  }

  return ar;
}

// Returns true if a number is prime
function isPrime(n) {
  if (n < 2)
    return false;

  if (n == 2)
    return true;

  var maxDiv = Math.sqrt(n);

  for (var i = 2; i <= maxDiv; i++) {
    if (n % i == 0) {
      return false;
    }
  }

  return true;
}
console.log("19---------------------")
//Coding challenge #20: Rotate an array to the left 1 position

var ar = [1, 2, 3];


function rotateLeft(ar) {
  var first = ar.shift();
  ar.push(first);
}
rotateLeft(ar);
console.log(ar)
console.log("20---------------------")
//Coding challenge #21: Rotate an array to the right 1 position
var arr = [1, 2, 3];
function rotateRight(ar) {
  var last = ar.pop();
  ar.unshift(last);
}
rotateRight(arr)
console.log(arr)
console.log("21---------------------")
//Coding challenge #22: Reverse an array

var ar = ["selim", "ahmet", "ali"];
var ar2 = reverseArray(ar);


function reverseArray(ar) {
  var ar2 = [];

  for (var i = ar.length - 1; i >= 0; i--) {
    ar2.push(ar[i]);
  }

  return ar2;
}
console.log(ar2)
ar2.reverse();
console.log(ar2)
console.log("22---------------------")
//Coding challenge #23: Reverse a string
var s = reverseString("JavaScript");
function reverseString(s) {
  var s2 = [];
  for (var i = s.length - 1; i >= 0; i--) {
    var char = s[i]
    s2.push(char)
  }
  return s2
}
console.log(s)
console.log("23---------------------")
//Coding challenge #24: Create a function that will merge two arrays and return the result as a new array
var ar1 = [1, 2, 3];
var ar2 = [4, 5, 6];
const newArray = ar1.concat(ar2)
console.log(newArray)

var ar1 = [1, 2, 3];
var ar2 = [4, 5, 6];

var ar = mergeArrays(ar1, ar2);


function mergeArrays(ar1, ar2) {
  var ar = [];

  for (let el of ar1) {
    ar.push(el);
  }

  for (let el of ar2) {
    ar.push(el);
  }

  return ar;
}
console.log(ar);
console.log("24---------------------")
//Coding challenge #25: Create a function that will receive two arrays of numbers as arguments and return an array composed of all the numbers that are either in the first array or second array but not in both

var ar3 = [1, 2, 3, 10, 5, 3, 14];
var ar4 = [1, 4, 5, 6, 14];

var ar34 = mergeExclusive(ar3, ar4);


function mergeExclusive(ar3, ar4) {
  var ar34 = [];
  for (let ithem of ar3) {
    if (!ar4.includes(ithem)) {
      ar34.push(ithem)
    }
  }
  for (let ithem of ar4) {
    if (!ar3.includes(ithem)) {
      ar34.push(ithem)
    }
    

  }

return ar34
}
console.log(ar34)
console.log("25---------------------")

//Coding challenge #26: Create a function that will receive two arrays and will return an array with elements that are in the first array but not in the second

var arr1 = [1, 2, 3, 10, 5, 3, 14];
var arr2 = [-1, 4, 5, 6, 14];

var arrNew = mergeLeft(arr1, arr2);
console.log(arrNew);

function mergeLeft(arr1, arr2){
  var arrNew =[];
  for(let ithem of arr1) {
    if(!arr2.includes(ithem)){
      arrNew.push(ithem)
    }
  }
  return arrNew
}
console.log("26---------------------")
//Coding challenge #27: Create a function that will receive an array of numbers as argument and will return a new array with distinct elements