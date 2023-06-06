function calcP(i) {
  if (i < 2) {
    return false
  }
  for (let j = i - 1; j >= 2; j--) {
    if (i % j === 0) {
      return false
    }
  }
  return true
}

function getPrime(max) {
  const Primes = []
  for (let j = 2; j <= max; j++) {
    if (calcP(j)) {
      Primes.push(j)
    }
  }
  return Primes
}

console.log(getPrime(10))
