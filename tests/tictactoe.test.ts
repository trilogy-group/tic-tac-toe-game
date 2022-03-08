import {validNumber,getlineone,getlinetwo,getlinethree,checkStatus} from "../src/tictactoe";
import {describe,expect,test} from '@jest/globals';
import each from "jest-each";


describe("validNumber", () => {

    each(["1", "2", "3", "4", "5", "6", "7", "8", "9"])
    .test("numbers", (input) => {
        expect(validNumber(input)).toBe(true);
    });

    each(["a", " ", ""])
    .test("other", (input) => {
        expect(validNumber(input)).toBe(false);
    });
});

describe("getlineone", () => {
    each([["1", "2", "3", "4", "5", "6", "7", "8", "9"],["X", "2", "O", "4", "5", "X", "7", "O", "9"],["1", "X", "X", "O", "5", "X", "O", "8", "9"],["X", "X", "X", "O", "O", "6", "7", "8", "9"]])
    .test("line1", (input) => {
        expect(getlineone(input)).toBe(input[0]+"|"+input[1]+"|"+input[2]);
    });
});



describe("getlinetwo", () => {
    each([["1", "2", "3", "4", "5", "6", "7", "8", "9"],["X", "2", "O", "4", "5", "X", "7", "O", "9"],["1", "X", "X", "O", "5", "X", "O", "8", "9"],["X", "X", "X", "O", "O", "6", "7", "8", "9"]])
    .test("line2", (input) => {
        expect(getlinetwo(input)).toBe(input[3]+"|"+input[4]+"|"+input[5]);
    });
});

describe("getlinethree", () => {
    each([["1", "2", "3", "4", "5", "6", "7", "8", "9"],["X", "2", "O", "4", "5", "X", "7", "O", "9"],["1", "X", "X", "O", "5", "X", "O", "8", "9"],["X", "X", "X", "O", "O", "6", "7", "8", "9"]])
    .test("line3", (input) => {
        expect(getlinethree(input)).toBe(input[6]+"|"+input[7]+"|"+input[8]);
    });
});

describe("checkStatus", () => {

    each([["1", "2", "3", "4", "5", "6", "7", "8", "9"],["1", "2", "3", "X", "X", "6", "7", "8", "O"],["X", "X", "O", "O", "O", "X", "X", "X", "O"],["X", "X", "3", "4", "O", "6", "7", "8", "9"]])
    .test("draw or incomplete", (input) => {
        expect(checkStatus(input)).toBe(0);
    });

    each([["X", "2", "O", "O", "O", "6", "X", "X", "X"],["X", "2", "O", "X", "O", "6", "X", "O", "X"],["X", "X", "X", "O", "O", "6", "7", "8", "9"],["X", "O", "O", "4", "X", "6", "7", "8", "X"]])
    .test("Player 1 win", (input) => {
        expect(checkStatus(input)).toBe(1);
    });

    each([["X", "2", "X", "O", "O", "O", "7", "X", "9"],["X", "2", "3", "O", "O", "O", "X", "X", "9"],["X", "X", "O", "4", "O", "X", "O", "8", "9"],["O", "X", "X", "4", "O", "X", "7", "8", "O"]])
    .test("Player 2 win", (input) => {
        expect(checkStatus(input)).toBe(1);
    });
});


