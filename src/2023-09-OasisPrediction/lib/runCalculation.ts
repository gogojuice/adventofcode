import buildCurrentReport from "./buildCurrentReport"

function runCalculation(values: number[], run: (store: number[][]) => number): number {
    let store = []
    store.push(values)

    store = buildCurrentReport(store, values)
    store.reverse()
    store[0].push(0)

    return run(store)
}

export default runCalculation