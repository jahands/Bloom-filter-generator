import { BloomFilter } from 'bloom-filters';
import fs from 'fs';

console.log('starting bloom filter');
const data = fs.readFileSync('./files.txt', 'utf8')
const lines = data.split('\n')
const errorRate = 0.05
const filter = BloomFilter.create(lines.length, errorRate)

for (const line of lines) {
    filter.add(line)
}

fs.writeFileSync('./filter.json', JSON.stringify(filter.saveAsJSON()))

// console.log(filter.has('somethingwrong')) // false

// console.log(filter.capacity()) // total capacity
// console.log(filter.rate()) // current rate of the current internal filter used
