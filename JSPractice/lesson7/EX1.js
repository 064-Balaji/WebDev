function sum(...args){
  if(args.length === 1 && Array.isArray(args[0]))
    args = [...args[0]];
  return args.reduce((a, b) => a + b);
}

const Numbers = [1, 2, 3, 4]

console.log(sum(Numbers));