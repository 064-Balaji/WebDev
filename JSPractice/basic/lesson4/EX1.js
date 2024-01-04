function maxNum(num1, num2) {
  // if(num1>num2)
  //   return num1;
  // else 
  //   return num2;
  // ternary funtion
  return (num1 > num2) ? num1:num2
}

console.log("To find the maximum number: ");
let num1= 5;
let num2= 10;
console.log("The numbers are: ", num1, num2);

let max = maxNum(num1, num2);

console.log("The maximum number is: ", max);