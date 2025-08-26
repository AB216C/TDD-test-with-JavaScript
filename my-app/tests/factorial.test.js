import {it, describe, expect, test} from "vitest"
import {factorial} from '../src/factorial.js'

describe('factorial', ()=>{
    it('should return 1 on 0', ()=>{
        expect(factorial(0)).toBe(1)
    })

})