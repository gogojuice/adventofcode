function newSequence(values: number[]): number[] {
    let last : number
    let newSeq : number[] = []

    values.map((one, index) => {
        if (last === undefined) {
            last = one
        } else {
            newSeq.push(one - last)
            last = one
        }
    })
    return newSeq
}

export default newSequence