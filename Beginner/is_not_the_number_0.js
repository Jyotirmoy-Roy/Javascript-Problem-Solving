/*
Q9. Is not the number 0 

- Give Any element, return true if it is not the number 0

isNotZero(5) -> true
isNotZero(0) -> false
isNotZero(null) -> true

*/

// Solution

function isNotZero(ele) {
  return ele !== 0;
  // if (ele !== 0) {
  //   return true;
  // } else {
  //   return false;
  // }
}

let result;

result = isNotZero(5);
result = isNotZero(0);
result = isNotZero(null);

console.log(result);





