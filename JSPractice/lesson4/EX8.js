//sum of multiple numbers of 3 and 5 in the given range.

sum(10)

function sum(limit) {
  let sum = 0;
  for(let i=2; i<=limit; i++)
    if(i%3 === 0 || i%5 == 0)
      sum += i;
  console.log(sum);
}