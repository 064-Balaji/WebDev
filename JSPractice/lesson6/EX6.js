const Numbers = [1, 20, 3, 4, 15];

console.log(findMax(Numbers));

function findMax(array) {
  // let Max = 0;
  // for(let key of array)
  //   if(key>Max)
  //     Max = key;
  
  return array.reduce((a, b) => (a > b) ? a:b);
}