/* 
Q4. Calculate the Area of a Triangle 

-Write a function that takes the base and height of a triangle and return it's area

calcTriangleArea(3, 2) -> 3
calcTriangleArea(10, 10) -> 50
calcTriangleArea(20, 20) -> 200

*/

// Solution

function calcTriangleArea(b, h) {
  let areaOfaTriangle = (b * h) / 2; // Triangle Area = 2/(base * height)
  return areaOfaTriangle;
}

let result;

result = calcTriangleArea(3, 2)
result = calcTriangleArea(10, 10)
result = calcTriangleArea(20, 20)


console.log(result)