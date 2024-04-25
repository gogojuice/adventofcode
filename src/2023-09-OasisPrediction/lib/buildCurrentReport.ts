import newSequence from "./newSquence"

function buildCurrentReport(store: number[][] , values: number[]): number[][] {
    if (values.every(val => val === 0)) {
        return store
    } else {
        const newSeq = newSequence(values)
        store.push(newSeq)
        return buildCurrentReport(store, newSeq)
    }
}

export default buildCurrentReport
