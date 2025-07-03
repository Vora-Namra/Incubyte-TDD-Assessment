import {it,describe,expect} from 'vitest';
import add from '../StringCalc.js';

describe('StringCalc', () => {
    it('should return 0 for empty string', () => {
        expect(add("")).toBe(0);
    });
    
    it('should return integer of given string',()=>{
        expect(add("2")).toBe(2);
    })


});
