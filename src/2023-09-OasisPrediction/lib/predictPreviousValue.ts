import calculatePreviousValue from "./calculatePreviousValue"
import buildCurrentReport from "./buildCurrentReport"

function calcualte(store: Array<number[]>) {
    let result!: number

    for (let x = 1; x < store.length; x++) {
        (function (newNumber) {
            store[x].unshift(newNumber)
            result = newNumber
        })(calculatePreviousValue(store[x - 1], store[x]))
    }
    return result
}

export default calcualte