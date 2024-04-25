import readInputFile from "../2023-01-day/lib/readInputFile"
import sum from "../2023-01-day/lib/sum"
import predictNextValue from "./lib/predictNextValue"
import perdictPreviousValue from "./lib/predictPreviousValue"
import runCalculation from "./lib/runCalculation"

let result = readInputFile(__dirname + '/../../src/2023-09-OasisPrediction/data/oasis.txt')

function convertToNumber(one: string): number[] {
    return one.split(' ').map(x => Number(x))
}

// Calculate Next Value
const nextValue = result.map((one) => {
    const input = convertToNumber(one)
    return runCalculation(input, predictNextValue)
})

const nextValueTotal = sum(nextValue)
console.log("Part 1 - nextValue", nextValueTotal)

// Calculate Prev Value
const prevValue = result.map((one) => {
    const input = convertToNumber(one)
    return runCalculation(input, perdictPreviousValue)
})

const prevValueTotal = sum(prevValue)

console.log("Part 2 - prevValue", prevValueTotal)
