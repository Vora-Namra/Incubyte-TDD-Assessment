import {it,describe,expect} from 'vitest';
import add from '../StringCalc.js';

describe('StringCalc', () => {
    it('should return integer of given string',()=>{
        expect(add("2")).toBe(2);
    })
});
