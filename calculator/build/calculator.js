"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculator = void 0;
class Calculator {
    constructor(startNumber) {
        this.startNumber = startNumber;
    }
    clear() {
        this.startNumber = 0;
    }
    set(num) {
        this.startNumber = num;
    }
    show() {
        console.log(this.startNumber);
    }
    add(num) {
        this.startNumber = this.startNumber + num;
        console.log(this.startNumber);
    }
    sub(num) {
        this.startNumber = this.startNumber - num;
        console.log(this.startNumber);
    }
    div(num) {
        return this.startNumber = this.startNumber / num;
    }
    mult(num) {
        this.startNumber = this.startNumber * num;
        console.log(this.startNumber);
    }
    isEven() {
        if (this.startNumber % 2 === 0) {
            console.log("It is even");
        }
        else {
            console.log('It is odd');
        }
    }
}
exports.Calculator = Calculator;
