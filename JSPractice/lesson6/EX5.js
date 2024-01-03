//count the no of occurrences in an array of given element.

const numbers = [1, 2, 3, 4, 1];

const count = countOccurrences(numbers, 1);

console.log(count);

function countOccurrences(array, searchElement){
  // for(let key of array)
  //   if(key === searchElement)
  //     count++;

  
  return array.reduce((accumulator, current) => {
    const occured = (current === searchElement) ? 1:0
    return accumulator + occured;
  },0)
}