import { describe, expect, test } from '@jest/globals';
import calculateNextValue from '../lib/calculateNextValue';

describe('calculateNextValue value', () => {

    test('[0,0,0],[2,2,2] to be 2', () => {
        expect(calculateNextValue([0,0,0],[2,2,2])).toBe(2)
    })

    test('[2,2,2,2],[0,2,4,6] next 28', () => {
        expect(calculateNextValue([2,2,2,2],[0,2,4,6])).toBe(8)
    })

    test('[10,13,16,21,30,45] next 68', () => {
        expect(calculateNextValue([0,2,4,6,8],[3,3,5,9,15])).toBe(23)
    })

})