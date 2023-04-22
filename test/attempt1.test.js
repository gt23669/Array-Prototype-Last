import { expect } from 'chai'
import { lastElement } from '../attempt1.js'

describe('Last value of array', () => {
    it('should return the last element of an array', () => {
        const expected = ([3])
        const actual = lastElement([1, 2, 3])
        expect(expected).to.deep.equal(actual)
    })
    it('should return -1 when array is empty', () => {
        const expected = ([-1])
        const actual = lastElement([])
        expect(expected).to.deep.equal(actual)
    })
})