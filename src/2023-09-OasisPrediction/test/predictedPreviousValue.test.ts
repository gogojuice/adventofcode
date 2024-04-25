import { describe, expect, test } from '@jest/globals';
import predictPreviousValue from '../lib/predictPreviousValue';
import runCalculation from '../lib/runCalculation'

describe('predictNextValue value', () => {

    test('[0,3,6,9,12,15] next 18', () => {
        expect(runCalculation([0, 3, 6, 9, 12, 15], predictPreviousValue)).toBe(-3)
    })

    test('[1,3,6,10,15,21] next 28', () => {
        expect(runCalculation([1, 3, 6, 10, 15, 21], predictPreviousValue)).toBe(0)
    })

    test('[10,13,16,21,30,45] next 5', () => {
        expect(runCalculation([10, 13, 16, 21, 30, 45], predictPreviousValue)).toBe(5)
    })

})