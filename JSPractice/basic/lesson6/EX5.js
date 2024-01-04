//count the no of occurrences in an array of given element.

const numbers = [1, 2, 3, 4, 1];

try{
  const count = countOccurrences(5, 1);
  console.log(count);
}catch(e){
  console.log(e.message);
}


function countOccurrences(array, searchElement){
  // for(let key of array)
  //   if(key === searchElement)
  //     count++;

  if(!Array.isArray(array))
    throw new Error('Give an Array')
  return array.reduce((accumulator, current) => {
    const occured = (current === searchElement) ? 1:0
    return accumulator + occured;
  },0)
}