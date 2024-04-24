import { describe, expect, test } from '@jest/globals';
import stringToNumber from '../lib/stringToNumber';

describe('stringToNumber', () => {
    test('two1nine to equal 2wo19ine', () => {
        expect(stringToNumber('two1nine')).toBe('2wo19ine')
    })

    test('eightwothree to equal 8igh2wo3hree', () => {
        expect(stringToNumber('eightwothree')).toBe('8igh2wo3hree')
    })

    test('xtwone3four to equal x2w1ne34our', () => {
        expect(stringToNumber('xtwone3four')).toBe('x2w1ne34our')
    })

    test('4nineeightseven2 to equal 49ine8ight7even2', () => {
        expect(stringToNumber('4nineeightseven2')).toBe('49ine8ight7even2')
    })

    test('nineightwo to equal 9in8igh2wo', () => {
        expect(stringToNumber('nineightwo')).toBe('9in8igh2wo')
    })

    test('dsfsdf to equal dsfsdf', () => {
        expect(stringToNumber('dsfsdf')).toBe('dsfsdf')
    })

    test('one to equal 1ne', () => {
        expect(stringToNumber('one')).toBe('1ne')
    })
    
    test('two to equal 2wo', () => {
        expect(stringToNumber('two')).toBe('2wo')
    })

    test('three to equal 3hree', () => {
        expect(stringToNumber('three')).toBe('3hree')
    })

    test('four to equal 4our', () => {
        expect(stringToNumber('four')).toBe('4our')
    })
    
    test('five to equal 5ive', () => {
        expect(stringToNumber('five')).toBe('5ive')
    })

    test('six to equal 6ix', () => {
        expect(stringToNumber('six')).toBe('6ix')
    })

    test('seven to equal 7even', () => {
        expect(stringToNumber('seven')).toBe('7even')
    })

    test('eight to equal 8ight', () => {
        expect(stringToNumber('eight')).toBe('8ight')
    })

    test('nine to equal 9ine', () => {
        expect(stringToNumber('nine')).toBe('9ine')
    })
})