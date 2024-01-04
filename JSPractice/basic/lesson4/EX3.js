console.log("Welcome to FizzBuzz!");
let input = 10;
console.log('The input is: ', input);
fizzbuzz(17);



function fizzbuzz(input){
  if((typeof input) !== 'number'){
    console.log(NaN);
  }
  else if(input%3 === 0 && input%5 === 0){
    console.log('FizzBuzz');
  }
  else if(input%3 === 0){
    console.log('Fizz');
  }
  else if(input%5 === 0){
    console.log('Buzz');
  }
  else{
    console.log(input);
  }
}