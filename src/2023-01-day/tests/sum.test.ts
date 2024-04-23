import { describe, expect, test } from '@jest/globals';
import sum from '../lib/sum';

describe('sum module', () => {
    test('adds 1 + 2 to equal 3', () => {
        expect(sum([1, 2])).toBe(3)
    })

    test('adds 10 + 111 to equal 121', () => {
        expect(sum([10, 111])).toBe(121)
    })

    test('adds 2 + 2 + 2 to equal 6', () => {
        expect(sum([2, 2, 2])).toBe(6)
    })
})