//function that manually implements includes function

const array = [1, 2, 3, 4, 5];

console.log(includes(array, 6));

function includes(array, searchElement) {
  for(let key of array)
    if(key === searchElement)
      return true;
  return false;
}