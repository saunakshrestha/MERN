function isPrime(num) {
  if (num <= 1) return false

  // Check if number is divisible by any number less than itself
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false
    }
  }
  return true
}

function getPrimes(max) {
  const primes = []

  for (let i = 2; i <= max; i++) {
    if (isPrime(i)) {
      primes.push(i)
    }
  }
  return primes
}

console.log(getPrimes(10))
