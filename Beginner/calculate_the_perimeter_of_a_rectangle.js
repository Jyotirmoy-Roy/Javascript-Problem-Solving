/*
Q3. Calculate the Perimeter of a Rectangel

- Create a function that takes length and width of a rectangle and return it's
perimeter.

calcPerimeter(6, 7) -> 26
calcPermieter(20, 10) -> 60
calcPerimeter(2, 9) -> 22


*/

// Solution

function calcPerimeter(l, w) {
  let perimeter = 2 * (l + w); // Retangele perimeter =  2(length + width)
  return perimeter;
}

let result;

result = calcPerimeter(6, 7);
result = calcPerimeter(20, 10);
result = calcPerimeter(2, 9);

console.log(result);




