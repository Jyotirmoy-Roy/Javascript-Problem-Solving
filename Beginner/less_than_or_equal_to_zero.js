/*
Q7. Less than or Equal to Zero

-write a function that accepts a number and returns true id it is less tha or equal 
to zero, otherwise false

lessThanOrEqualToZero(3) -> false
lessThanOrEqualToZero(0) -> true
lessThanOrEqualToZero(-2) -> true

*/

// Soultion

function lessThanOrEqualToZero(num) {
  if (num <= 0) {
    return true;
  } else {
    return false;
  }
}

let result;

result = lessThanOrEqualToZero(3);
result = lessThanOrEqualToZero(0);
result = lessThanOrEqualToZero(-2);

console.log(result);




