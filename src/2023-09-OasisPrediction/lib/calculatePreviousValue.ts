function calculatePreviousValue(current: number[], next: number[]): number {
    const c = current[0]
    const n = next[0]
    return n - c 
}

export default calculatePreviousValue