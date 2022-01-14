declare class Calculator {
    private startNumber;
    constructor(startNumber: number);
    clear(): void;
    set(num: number): void;
    show(): void;
    add(num: number): void;
    sub(num: number): void;
    div(num: number): number;
    mult(num: number): void;
    isEven(): void;
}
export { Calculator };
