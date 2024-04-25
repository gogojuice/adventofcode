function calculateNextValue(current: number[], next: number[]): number {
    const c = current[current.length-1]
    const n = next[next.length-1]
    return c + n
}

export default calculateNextValue