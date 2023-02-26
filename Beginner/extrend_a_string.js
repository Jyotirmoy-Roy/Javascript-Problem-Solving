/* 
Q5. Extrend a String

-write a function accepts a string anf adds 'Engineer' onto the end of it

appendEngineer('Apple') -> 'AppleEngineer'
appendEngineer('Banana') -> 'BananaEngineer'
appendEngineer('Orange') -> 'OrangeEngineer'


*/

// Soulution

function appendEngineer(str) {
  let appendEle = "Engineer";
  return `${str}${appendEle}`;
}

let result;

result = result = appendEngineer("Apple");
result = appendEngineer("Banana");
result = appendEngineer("Orange");

console.log(result);




