import readInputFile from "./lib/readInputFile"
import sum from "./lib/sum"
import calibrationValue from "./lib/calibrationValue"

let result = readInputFile(__dirname + '/../../src/2023-01-day/data/calibrationDocument.txt')

const codes = result.map((one) => {
    return calibrationValue(one) 
})

let total = sum(codes)

console.log(total)