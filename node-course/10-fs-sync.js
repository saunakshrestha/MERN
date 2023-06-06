const { readFileSync, writeFileSync } = require('fs')

console.log('start')
const first = readFileSync('./content/first.txt', 'utf8')
const second = writeFileSync('./content/second.txt', 'utf8')

writeFileSync('./content/result-sync.txt',
`This is the result: ${first} , ${second}`,{flag:'a'})



console.log('done with the task')
console.log('Starting file  the next one')