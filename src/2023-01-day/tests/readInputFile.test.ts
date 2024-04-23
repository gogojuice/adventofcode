import { describe, expect, test } from '@jest/globals';
import readInputFile from '../lib/readInputFile';

describe('readInputFile', () => {

    let result : string[] 

    beforeAll(() => {
        result = readInputFile(__dirname + '/../data/calibrationDocument.txt')
    })

    test('calibrationDocument.txt length equal 1000', () => {
        expect(result.length).toBe(1000)
    })

    test('calibrationDocument.txt length equal 1000', () => {
        expect(result[0]).toEqual('hcpjssql4kjhbcqzkvr2fivebpllzqbkhg')
    })

    test('calibrationDocument.txt length equal 1000', () => {
        expect(result[999]).toEqual('ffnrprtnine1tjznmckv5sixczv')
    })

})