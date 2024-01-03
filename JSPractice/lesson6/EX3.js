//gets an array of values and another exclude array which will only returns the element from an main array that will not available in the exclude array.

const array = [1, 2, 3, 4];

const excluded = exclude(array, [2, 3]);

console.log(excluded);

function exclude(array, exclude) {
  let newarray = [];
  for(let key of array)
    if(!exclude.includes(key))
      newarray.push(key);
  return newarray;
}