/* 
Q2. Convert Hours into Seconds

-Create a function that converts hours into seconds

hoursIntoSeconds(2) -> 7200
hoursIntoSeconds(10) -> 36000
hoursIntoSeconds(24) -> 86400

*/

//Solution 

function hoursIntoSeconds(hour) {
  let minutes = hour * 60; // 60 minutes = 1 hour
  let seconds = minutes * 60; // 60 seconds = 1 minute

  return seconds;
}

let result;

result = hoursIntoSeconds(2);
result = hoursIntoSeconds(10);
result = hoursIntoSeconds(24);

console.log(result);







