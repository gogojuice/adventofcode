import { describe, expect, test } from '@jest/globals';
import newSquence from '../lib/newSquence';

describe('predicnewSquencetNextValue value', () => {

    test('[0,3,6,9,12,15] next [3,3,3,3,3]', () => {
        expect(newSquence([0, 3, 6, 9, 12, 15])).toStrictEqual([3,3,3,3,3])
    })

    test('[1,3,6,10,15,21] next 28', () => {
        expect(newSquence([1, 3, 6, 10, 15, 21])).toStrictEqual([2,3,4,5,6])
    })

    test('[10,13,16,21,30,45] next 68', () => {
        expect(newSquence([10, 13, 16, 21, 30, 45])).toStrictEqual([3,3,5,9,15])
    })

    test('[3, 3, 5, 9, 15] to be [0,2,4,6]', () => {
        expect(newSquence([3, 3, 5, 9, 15])).toStrictEqual([0,2,4,6])
    })

    test('[0, 2, 4, 6] to be [2,2,2]', () => {
        expect(newSquence([0, 2, 4, 6])).toStrictEqual([2,2,2])
    })

    test('[2, 2, 2] to be [0,0]', () => {
        expect(newSquence([2, 2, 2])).toStrictEqual([0, 0])
    })


})