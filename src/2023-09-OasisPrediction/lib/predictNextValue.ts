
import calculateNextValue from "./calculateNextValue"

function calcualte(store: number[][]): number {
    let newNumber!: number

    for (let x = store.length - 1; x >= 1; x--) {
        newNumber = calculateNextValue(store[x], store[x - 1])
        store[x-1].push(newNumber)
    }
    return newNumber
}

export default calcualte