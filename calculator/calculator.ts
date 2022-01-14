class Calculator {
    private startNumber: number;
    public constructor (startNumber :number) {
        this.startNumber = startNumber;
    }

    public clear () {
        this.startNumber = 0;
    }

    public set (num: number) {
        this.startNumber = num;
    }

    public show () {
        console.log(this.startNumber);
        return this.startNumber
    }

    public add (num: number) {
        this.startNumber = this.startNumber + num;
        console.log(this.startNumber);
        return this.startNumber
    }

    public sub (num: number) {
        this.startNumber = this.startNumber - num;
        console.log(this.startNumber);
        return this.startNumber
    }

    public div (num: number) {
        this.startNumber = this.startNumber / num;
        console.log(this.startNumber);
        return this.startNumber
    }

    public mult (num: number) {
        this.startNumber = this.startNumber * num;
        console.log(this.startNumber);
        return this.startNumber
    }

    public isEven () {
        if (this.startNumber % 2 === 0) {
            console.log("It is even")
            return true
        } else {
            console.log('It is odd');
            return false
        }
    }

}

export { Calculator }