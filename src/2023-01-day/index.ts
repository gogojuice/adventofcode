import readInputFile from "./lib/readInputFile"
import sum from "./lib/sum"
import calibrationValue from "./lib/calibrationValue"
import stringToNumber from "./lib/stringToNumber"

let result = readInputFile(__dirname + '/../../src/2023-01-day/data/calibrationDocument.txt')

// const strToNum = result.map((one) => {
//     return stringToNumber(one)
// })

// console.log(strToNum)

if(process.argv[2]) {
    // @ts-ignore
    console.log(result[process.argv[2]], calibrationValue(stringToNumber(result[process.argv[2]])))
} else {

    const codes = result.map((one) => {
        return calibrationValue(stringToNumber(one))
    })

    let total = sum(codes)

    console.log(total)
}

