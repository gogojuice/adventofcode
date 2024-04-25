import { describe, expect, test } from '@jest/globals';
import calculatePreviousValue from '../lib/calculatePreviousValue';

describe('calculatePreviousValue value', () => {

    test('[0,0,0],[2,2,2] to be 2', () => {
        expect(calculatePreviousValue([0,0,0],[2,2,2])).toBe(2)
    })

    test('[2,2,2,2],[0,2,4,6] to be -2', () => {
        expect(calculatePreviousValue([2,2,2,2],[0,2,4,6])).toBe(-2)
    })

    test('[-2,0,2,4,6],[3,3,5,9,15] to be 5', () => {
        expect(calculatePreviousValue([-2,0,2,4,6],[3,3,5,9,15])).toBe(5)
    })

    test('[5, 3, 5, 9, 15], [10, 13, 16, 21, 30,45] to be 5', () => {
        expect(calculatePreviousValue([5, 3, 5, 9, 15], [10, 13, 16, 21, 30,45])).toBe(5)
    })

    test('[0, 0, 0, 0, 0, 0], [3, 3, 3, 3, 3] to be 3', () => {
        expect(calculatePreviousValue([0, 0, 0, 0, 0, 0], [3, 3, 3, 3, 3])).toBe(3)
    })

    test('[3, 3, 3, 3, 3, 3], [0,3,6,9,12,15])).toBe(-3)', () => {
        expect(calculatePreviousValue([3, 3, 3, 3, 3, 3], [0,3,6,9,12,15])).toBe(-3)
    })

})