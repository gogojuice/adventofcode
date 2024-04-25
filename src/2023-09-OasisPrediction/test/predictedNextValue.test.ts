import { describe, expect, test } from '@jest/globals';
import predictNextValue from '../lib/predictNextValue';
import runCalculation from '../lib/runCalculation'

describe('predictNextValue value', () => {

    test('[0,3,6,9,12,15] next 18', () => {
        expect(runCalculation([0, 3, 6, 9, 12, 15], predictNextValue)).toBe(18)
    })

    test('[1,3,6,10,15,21] next 28', () => {
        expect(runCalculation([1, 3, 6, 10, 15, 21], predictNextValue)).toBe(28)
    })

    test('[10,13,16,21,30,45] next 68', () => {
        expect(runCalculation([10, 13, 16, 21, 30, 45], predictNextValue)).toBe(68)
    })

})