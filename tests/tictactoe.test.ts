import {validNumber,getlineone,getlinetwo,getlinethree} from "../src/tictactoe";
import {describe,expect,test} from '@jest/globals';
import each from "jest-each";


describe("validNumber", () => {

    test("numbers", () => {
        expect(validNumber("1")).toBe(true);
    });

    each(["1", "2", "3"])
    .test("numbers", (input) => {
        expect(validNumber(input)).toBe(true);
    });

    each(["a", " ", ""])
    .test("other", (input) => {
        expect(validNumber(input)).toBe(false);
    });
});

describe("getlineone", () => {
    each(["1", "2", "3", "4", "5", "6", "7", "8", "9"],["X", "2", "O", "4", "5", "X", "7", "O", "9"],["1", "X", "X", "O", "5", "X", "O", "8", "9"],["X", "X", "X", "O", "O", "6", "7", "8", "9"])
    .test("line1", (input) => {
        expect(getlineone(input)).toBe([input[0],input[1],input[2]]);
    });
});


describe("getlinetwo", () => {
    each(["1", "2", "3", "4", "5", "6", "7", "8", "9"],["X", "2", "O", "4", "5", "X", "7", "O", "9"],["1", "X", "X", "O", "5", "X", "O", "8", "9"],["X", "X", "X", "O", "O", "6", "7", "8", "9"])
    .test("line2", (input) => {
        expect(getlinetwo(input)).toBe([input[3],input[4],input[5]]);
    });
});


describe("getlinethree", () => {
    each(["1", "2", "3", "4", "5", "6", "7", "8", "9"],["X", "2", "O", "4", "5", "X", "7", "O", "9"],["1", "X", "X", "O", "5", "X", "O", "8", "9"],["X", "X", "X", "O", "O", "6", "7", "8", "9"])
    .test("line3", (input) => {
        expect(getlinethree(input)).toBe([input[6],input[7],input[8]]);
    });
});


