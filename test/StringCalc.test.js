import {it,describe,expect} from 'vitest';
import add from '../StringCalc.js';

describe('add', () => {
    it('should return 0 for empty string', () => {
        expect(add("")).toBe(0);
    });

    it('should return integer of given string',()=>{
        expect(add("2")).toBe(2);
    })
    it('should return sum for two values', () => {
        expect(add("2,3")).toBe(5);
    });
    it('should return sum for two values', () => {
        expect(add("8,7")).toBe(15);
    });
    it('should return sum for multiple values', () => {
        expect(add("1,2,3,4")).toBe(10);
    });
    it('should return sum for multiple values with spaces', () => {
        expect(add("1, 2, 3, 4")).toBe(10);
    });
    it('should return sum for multiple values with \n', () => {
        expect(add("1,2\n3,4,5")).toBe(15);
    });
    it('should return sum for multiple values with \n', () => {
        expect(add("1,2\n3\n4,5")).toBe(15);
    });
    it('should throw error for negative vals', () => {
        expect(() => add("1,-3,5")).toThrow("Negative numbers not allowed -3");
    });
    it('should throw error for negative vals', () => {
        expect(() => add("1,-3,-5")).toThrow("Negative numbers not allowed -3,-5");
    });
    it('should return sum with custom tab delimiter', () => {
    expect(add("\t\n1\t2\t3")).toBe(6);
    });
    it('should return sum with custom colon delimiter', () => {
        expect(add("1:2:3")).toBe(6);
    });
    it('should return sum with custom asterisk delimiter', () => {
        expect(add("1*2*3")).toBe(6);
    });
    it('should return sum with Random delimiter', () => {
        expect(add("1|2|3&4)2nM2")).toBe(14);
    });
    it('should return sum with more random delis',()=>{
        expect(add("//[***][;;][+++++]\n1***2+++++4;;1")).toBe(8);
    })
    it('should return sum with more random delis',()=>{
        expect(add("//[***][;;][+++++]\n1***2+++++4;;1")).toBe(8);
    });
    it("should return 0 for only *** or ###",()=>{
        expect(add("/'/***/###\\'")).toBe(0);
    })
    it("should throw error for non-string input", () => {
        expect(() => add(123)).toThrow("Input must be a string");
    });
    it("should display multiple non-negative for input", () => {
        expect(() => add("-3,-5,-9")).toThrow("Negative numbers not allowed -3,-5,-9");
    });
    it("should return 0 for string with only spaces", () => {
        expect(add("   ")).toBe(0);
    });
    it("should ignore the number greater than 1000", () => {
        expect(add("1001,2,3")).toBe(5);
    });
});
