const secret = 'SECRET HONES'
const john = 'john'
const peter = 'peter'
//js program to check prime numbers
const isPrime = (num) => {
    for(let i = 2; i < num; i++)
      if(num % i === 0) return false;
    return num > 1;
  }
  console.log(isPrime(7));

  // create a function to check if a number is prime or not and return true or false
  also make me enter the value `num` from the terminal  using `process.argv` and print the result in the terminal itself  using `console.log
  // Path: node-course/4-names.js

  const isPrime = (num) => {
    for(let i = 2; i < num; i++)
      if(num % i === 0) return false;   
