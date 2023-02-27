/*
Q11. Is the number odd 

Given two numbers, return if the number is odd

isOdd(1) -> true
isOdd(2) -> false
isOdd(3) -> true

*/

// solution

function isOdd(num) {
  if (num === 0) {
    return "The number is 0";
  } else if (num % 2 === 0) {
    return false;
  } else {
    return true;
  }
}

let result;

result = isOdd(1);
result = isOdd(2);
result = isOdd(0);
result = isOdd(3);

console.log(result);



