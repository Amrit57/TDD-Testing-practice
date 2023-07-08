

export function capitalize(str) {
    let words = str.charAt(0).toUpperCase() + str.slice(1)
    return words;
}

export function reverseString(str) {
    let arr = str.split("").reverse()
    let revString = arr.join("")
    return revString;
}

export function Calculator() {
    function add(a, b) {
        return a + b;
    }
    function subtract(a, b) {
        return a - b;
    }
    function multiply(a, b) {
        return a * b;
    }
    function divide(a, b) {
        return a / b;
    }
    return { add, subtract, multiply, divide }
}

export function analyzeArray(array) {
    let arr = array;

    /* using for loop
    function average() {
        let length = arr.length;
        let total = 0;
        for (let i = 0; i < length; i++) {
            let a = arr[i];
            total = total + a;
        }
        let ave = total / length;
        return ave;
    } */

    function average() {
        let length = arr.length;
        let total = 0;
        arr.reduce((a, b) => {
            return total = a + b;
        })
        return total / length;
    }

    function max() {
        let num = arr.reduce((a, b) => Math.max(a, b),)
        return num;
    }
    function min() {
        let num = arr.reduce((a, b) => Math.min(a, b),)
        return num;
    }

    return { average: average(), length: arr.length, max: max(), min: min() }
}

