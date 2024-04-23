import { describe, expect, test } from '@jest/globals';
import calibrationValue from '../lib/calibrationValue';

describe('calibration value', () => {
    
    test('1abc2 to equal number 12', () => {
        expect(calibrationValue("1abc2")).toBe(12)
    })

    test('pqr3stu8vwx to equal number 38', () => {
        expect(calibrationValue("pqr3stu8vwx")).toBe(38)
    })

    test('a1b2c3d4e5f to equal number 15', () => {
        expect(calibrationValue("a1b2c3d4e5f")).toBe(15)
    })

    test('treb7uchet to equal number 77', () => {
        expect(calibrationValue("treb7uchet")).toBe(77)
    })    

})