
class Deque {
    constructor() {
        this.count = 0;
        this.lowestCount = 0;
        this.items = {};
    }

    addFront(element) {
        if (this.isEmpty()) {
            this.addBack(element);
        } else if (this.lowestCount > 0) {
            this.lowestCount--;
            this.items[this.lowestCount] = element;
        } else { // where 'lowestCount' equal zero.
            for (let i; this.count > i; i++) {
                this.items[i] = this.items[i - 1];
            }

            this.count++;
            this.lowestCount = 0;
            this.items[0] = element;
        }
    }

    addBack(element) {
        this.items[this.count] = element;
        this.count++;
    }

    removeFront() {
        if (this.isEmpty()) {
            return undefined;
        }

        const result = this.items[this.lowestCount];
        delete this.items[this.lowestCount];
        this.lowestCount++;
        return result;
    }

    removeBack() {
        if (this.isEmpty()) {
            return undefined;
        }

        this.count--;
        const result = this.items[this.count];
        delete this.items[this.count];

        // Would have been: this.items[this.count - 1]
        // However, this.count-- does it all already!

        return result;
    }

    peekFront() {
        if (this.isEmpty()) {
            return undefined;
        }

        return this.items[this.lowestCount];
    }

    peekBack() {
        if (this.isEmpty()) {
            return undefined;
        }

        return this.items[this.count - 1];
    }

    isEmpty() {
        return this.size() === 0;
    }

    clear() {
        this.count = 0;
        this.lowestCount = 0;
        this.items = {};
    }

    size() {
        return this.count - this.lowestCount;
    }

    toString() {
        if (this.isEmpty()) {
            return '';
        }

        let objString = `${this.items[this.lowestCount]}`;
        for (let i = this.lowestCount + 1; i < this.count; i++) {
            objString = `${objString}, ${this.items[i]}`;
        }

        return objString;
    }
}


// TEST CASES

const deque = new Deque();
console.log(deque.isEmpty()); // outputs true
deque.addBack('John');
deque.addBack('Jack');
console.log(deque.toString()); // John, Jack
deque.addBack('Camila');
console.log(deque.toString()); // John, Jack, Camila
console.log(deque.size()); // Outputs 3
console.log(deque.isEmpty()); // Outputs false
deque.removeFront(); // remove John
console.log(deque.toString()); // Jack, Camila
deque.removeBack(); // remove Camila
console.log(deque.toString()); // Jack
deque.addFront('John'); // add John in front
console.log(deque.toString()); // John, Jack


// EXAMPLE: Palindrome Checker

function palindromeChecker(string) {
    if (string === undefined || string === null || (string !== null && string === 0)) {
        return false;
    }

    const deque = new Deque();
    let isEqual = true;
    let firstChar, lastChar;
    // Remove spaces and put into an array, and put them together as one string.
    let lowerString = string.toLocaleLowerCase().split(' ').join('');

    for (let i = 0; i < lowerString.length; i++) {
        deque.addBack(lowerString.charAt(i));
    }

    while (deque.size() > 1 && isEqual) {
        firstChar = deque.removeFront();
        lastChar = deque.removeBack();

        if (firstChar !== lastChar) {
            isEqual = false;
        }
    }

    return isEqual;
}

// Test Cases

console.log('a', palindromeChecker('a'));
console.log('aa', palindromeChecker('aa'));
console.log('kayak', palindromeChecker('kayak'));
console.log('level', palindromeChecker('level'));
console.log('Was it a car or a cat I saw', palindromeChecker('Was it a car or a cat I saw'));
console.log('Step on no pets', palindromeChecker('Step on no pets'));