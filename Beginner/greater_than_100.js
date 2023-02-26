/*
Q6. Greater than 100

Given two numbers, return true if the sum of both numbers is greater than 100
oterwise return false

sumGreaterThan100(20, 10) -> false
sumGreaterThan100(50, 60) -> true
sumGreaterThan100(100, -50) -> false


*/

// Solution

function sumGreaterThan100(num1, num2) {
  if (num1 + num2 >= 100) {
    return true;
  } else {
    return false;
  }
}

let result;

result = sumGreaterThan100(20, 10);
result = sumGreaterThan100(50, 60);
result = sumGreaterThan100(100, -50);

console.log(result);



