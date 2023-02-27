/*
Check if a user logged in and Subscribed 

- create a function that taked two strings. if the first string is equal to 
'Logged_In' OR the second string is equal to 'SUBSCRIBED' return true
otherwise return false

isLoggedInAndSubscribed('LOGGED_IN', 'SUBSCRIBED') - true
isLoggedInAndSubscribed('LOGGED_IN', 'UNSUBSCRIBED') - false
isLoggedInAndSubscribed('LOGGED_OUT', 'SUBSCRIBED') - true

*/

// Solution

function isLoggedInAndSubscribed(log, sub) {
  if (log === "LOGGED_IN" && sub === "SUBSCRIBED") {
    return true;
  } else {
    return false;
  }
}

let result;

result = result = isLoggedInAndSubscribed("LOGGED_IN", "SUBSCRIBED");
result = isLoggedInAndSubscribed("LOGGED_IN", "UNSUBSCRIBED");
result = isLoggedInAndSubscribed("LOGGED_OUT", "SUBSCRIBED");

console.log(result);



