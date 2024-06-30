import { it, expect } from 'vitest'
import { add } from './math'

it('should summarize all number values in an array', () => {
	const result = add([1, 2, 3])
	expect(result).toBe(6)
})


it('should throw an error if no value is passed into the function', () =>{
	const resultFn = () => {
		add()
	}
	expect(resultFn).toThrow(/is not iterable/)
})

it('should throw an error if provided with multiple arguments instead of an array', () => {
	const num1 = 1
	const num2 = 2

	const resultFn = () => {
		add(num1, num2)
	}

	expect(resultFn).toThrow(/is not iterable/)
}) 