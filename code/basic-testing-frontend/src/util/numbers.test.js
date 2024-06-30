import { describe, it, expect } from 'vitest'
import { transformToNumber, cleanNumbers } from "./numbers"

describe('transformToNumber()', () => {
	it('should transform a string number to a number of type number', () => {
		// Arrange
		const input = '1'

		// Act
		const result = transformToNumber(input)

		// Assert
		expect(result).toBeTypeOf('number')
	})

	it('should yield Nan for non-transformable values ', () => {
		const input = 'invalid'

		const result = transformToNumber(input)

		expect(result).toBeNaN()
	})
})
describe('cleanNumbers()', () => {
	it('should return an array of number values of string number values is provided', () => {
		const numberValues = ['1', '2']

		const cleanedNumbers = cleanNumbers(numberValues)

		expect(cleanedNumbers).toEqual([1, 2])
	})
	
	it('should throw an error if an array with at least one empty string is provided', () => {
		const numbervalues = ['', 1]

		const cleanFn = () => cleanNumbers(numbervalues)

		expect(cleanFn).toThrow()
	})
})
