//function that change element position based on its offset and index based on given.

const array = [1, 2, 3, 4];

const output = move(array, 0, 2)

console.log(output);


// function move(array, index, offset){
//   console.log(array.length, index, offset)
//   if(index >= array.length || (offset+index) > array.length || index - offset < 0){
//     console.error('Invalid offset');
//     return ;
//   }
//   let swapped = [];
//   for(let i=0; i<array.length; i++){
//     if(i === index+offset || i===index)
//       continue;
//     swapped[i] = array[i];
//   }
//   swapped[index + offset] = array[index];
//   swapped[index] = array[index+offset];
//   return swapped;
// }

function move(array, index, offset){
  const position = index+offset;
  if(position >= array.length || position < 0){
    console.error('Invalid offset');
    return;
  }

  let output = [...array];
  const element = output.splice(index, 1)[0];
  output.splice(position, 0, element)
  return output;
}