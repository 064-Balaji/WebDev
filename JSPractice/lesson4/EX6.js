
const array = [null,2,3];

console.log(countTruthy(array));

function countTruthy(array) {
  let count = 0;
  for(let key of array)
    if(key)
      count++;
  return count;
}