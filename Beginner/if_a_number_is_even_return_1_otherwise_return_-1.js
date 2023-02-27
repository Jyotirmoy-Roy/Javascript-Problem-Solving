/* 
Q2. If a number is even, return 1 otherwise return -1

booleanInterger(1) -> -1
booleanInterger(2) -> 1
booleanInterger(5)-> -1
booleanInterger(0) -> The number is 0 

*/

// Solution

function booleanInterger(num) {
  return num % 2 === 0 ? 1 : -1; // Ternary operator
  // if (num === 0) {
  //   return "The number is 0";
  // } else if (num % 2 === 0) {
  //   return 1;
  // } else {
  //   return -1;
  // }
}

let result;

result = booleanInterger(1);
result = booleanInterger(2);
result = booleanInterger(5);
result = booleanInterger(0);

console.log(result);



