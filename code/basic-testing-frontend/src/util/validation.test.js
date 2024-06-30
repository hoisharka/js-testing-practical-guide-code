import { it, expect, describe } from 'vitest'
import { validateNumber, validateStringNotEmpty } from "./validation"

describe('validateStringNotEmpty()', () => {
	it('should length of string input is greater than zero', () => {
		// Arrange
		const input = '123'
	
		// Act
		const resultFn = () => validateStringNotEmpty(input)
	
		// Assert
		expect(resultFn).not.toThrow()
	})
	
	it('should type of input is string', () => {
		// Arrange
		const input = 1
	
		// Act
		const resultFn = () => validateStringNotEmpty(input)
	
		// Assert
		expect(resultFn).toThrow()
	})
})

describe('validateNumber()', () => {
	it('should not throw error if type of input is not NaN', () => {
		// Arrange
		const input = '1'
	
		// Act
		const resultFn = () => validateNumber(input)
	
		// Assert
		expect(resultFn).not.toThrow()
	})
	
	it('should throw error if type of input is NaN', () => {
		// Arrange
		const input = 'invalid input'
	
		// Act
		const resultFn = () => validateNumber(input)
	
		// Assert
		expect(resultFn).toThrow(/Invalid number input/)
	})
	
	
})
