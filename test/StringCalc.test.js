import {it,describe,expect} from 'vitest';
import add from '../StringCalc.js';

describe('StringCalc', () => {
    it('try',()=>{
        expect(add("2")).toBe(2);
    })
});
