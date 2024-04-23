function sum(values: number[]): number {
    let total = values.reduce((subTotal, current) => {
        return subTotal + current
    }, 0)

    return total
}

export default sum