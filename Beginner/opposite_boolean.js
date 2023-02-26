/*
Q8. Opposite Boolean 
Given a boolean (true or false), return the opposite boolean

oppositeBoolean(true) -> false
oppositeBoolean(false) -> true

*/

// Solution

function oppositeBoolean(bool) {
  return !bool;

  // if(bool === false){
  //   return true
  // }else{
  //   return false
  // }
}

let result;

result = oppositeBoolean(true);
result = oppositeBoolean(false);

console.log(result);




