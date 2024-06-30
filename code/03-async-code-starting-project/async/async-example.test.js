import { it, expect } from 'vitest'
import { generateToken, generateTokenPromise } from './async-example'

it('should generate a token value', (done) => {
	const testUserEmail = 'test@test.com'
	generateToken(testUserEmail, (err, token) => {
		try {
			expect(token).toBeDefined()
			// expect(token).toBe(2)
			done()
		} catch (err) {
			done(err)
		}
	})
})


it('should generate a token value(promise)', () => {
	const testUserEmail = 'test@test.com'
	const promiseFn =  () =>  generateTokenPromise(testUserEmail)

	// return 을 붙여 promise가 리턴되도록 해야 vitest/jset가 promise의 resolve를 기다릴 수 있다.
	// return expect(promiseFn()).resolves.toBe(2)
	return expect(promiseFn()).resolves.toBeDefined()
})

it('should generate a token value(async)', async () => {
	const testUserEmail = 'test@test.com'
	const token = await generateTokenPromise(testUserEmail)
	expect(token).toBeDefined()
})