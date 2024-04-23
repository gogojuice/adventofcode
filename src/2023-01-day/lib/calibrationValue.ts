function calibrationValue(value: string): number {
    let first = null
    let last = null

    for(const c of value) {
        if (!isNaN(Number(c))) {
            if(last === null) {
                first = last = c
            } else {
                last = c
            }
        }
    }

    if(first === null) {
        return 0
    } else {
        return Number(first + last)
    }
    
}

export default calibrationValue