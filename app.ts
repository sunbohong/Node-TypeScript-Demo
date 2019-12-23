import { readFileSync } from "fs"
const input = readFileSync('./input.json')
const ouput = JSON.parse(input.toString())
console.log(ouput);