import { capitalize, reverseString, Calculator, analyzeArray, caesarCipher } from "./tdd"

test("takes string and returns first letter capitalized", () => {
    expect(capitalize("string")).toBe("String");
});

test("reverse the string", () => {
    expect(reverseString('hello')).toBe("olleh")
});

test("Returns basic calculation of two numbers", () => {
    const calc = Calculator();
    expect(calc.add(2, 2)).toBe(4);
    expect(calc.subtract(3, 2)).toBe(1);
    expect(calc.multiply(2, 4)).toBe(8);
    expect(calc.divide(8, 2)).toBe(4);
})

test("Analyzes an array and returns the  average, min, max and length", () => {
    const object = analyzeArray([1, 8, 3, 4, 2, 6]);
    expect(object).toEqual({ average: 4, min: 1, max: 8, length: 6 })
})

test("Returns the string with each character shifted.", () => {
    expect(caesarCipher("abcd", 1)).toBe("bcde");
    expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
})