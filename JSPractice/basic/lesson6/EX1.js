//creates an array from the given range

const array = arrayFromRange(-10, -4);

console.log(array);

function arrayFromRange(min, max) {
  let arr = [];
  for(let i=min; i<=max; i++)
    arr.push(i);
  return arr;
}