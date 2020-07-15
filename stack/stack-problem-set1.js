// Predefined Stack

class Stack {
    #items = [];

    push(element) {
        this.#items.push(element);
    }

    pop() {
        return this.#items.pop();
    }

    peek() {
        return this.#items[this.#items.length - 1];
    }

    isEmpty() {
        return this.#items.length === 0;
    }

    size() {
        return this.#items.length;
    }

    clear() {
        this.#items = [];
    }
}


// Test
// const stack1 = new Stack();
// console.log(stack1.isEmpty()); // true
// console.log(stack1.push(3));
// console.log(stack1.push(4));
// console.log(stack1.size()); // 2
// console.log(stack1.peek()); // Output: 4
// console.log(stack1.pop()); // Output: 4
// console.log(stack1.size()); // 1
// console.log(stack1.clear());
// console.log(stack1.isEmpty()); // true
// console.log(Object.keys(stack1));
// console.log(Object.getOwnPropertyDescriptor(stack1));


// Converting Decimal Numbers to Binary

function decimalToBinary(decimalNumber) {
    if (!isNaN(decimalNumber)) {
        const remainderStack = new Stack();
        let number = decimalNumber;
        let remainder;
        let binaryString = '';

        while (number > 0) {
            remainder = Math.floor(number % 2);
            remainderStack.push(remainder);
            number = Math.floor(number / 2);
        }

        while (!remainderStack.isEmpty()) {
            binaryString += remainderStack.pop().toString();
        }

        return binaryString;
    } else {
        console.error("Input is Not a Number!")
    }
}

// Test
// console.log(decimalToBinary("hello")); // Output: 11101001


// Converting Decimal Fraction to Binary
// * Not Stack related

// function decimalFractionToBinary(decimalFractionNumber) {
//     // ! WARNING
//     // 'decimalFractionNumber' should not be greater than 1 in the first place.
//     if (decimalFractionNumber < 1) {
//         let integerStack = new Stack();
//         let number = decimalFractionNumber;
//         let integer;
//         let binaryString = '';

//         while (number != 0) {
//             // multiple by 2,
//             // store the integer in variable
//             // store the remainder to multiply next
//             number = (number * 2).toString();
//             if (number.charAt(0) === 0) {
//                 integer = number.charAt(0);
//                 parseInt(integer);
//                 integerStack.push(integer);
//                 parseFloat(number);
//             } else {
//                 integer = number.charAt(0);
//                 parseInt(integer);
//                 integerStack.push(integer);
//                 number = number.replace(1, 0);
//                 parseFloat(number);
//                 console.log(number);
//             }
//         }
//         while (!integerStack.isEmpty()) {
//             binaryString += integerStack.pop().toString();
//         }

//         return binaryString;
//     }
// }

//  Test
// console.log(decimalFractionToBinary(0.375));


// Postfix Evaluation on a Given Expression

function postfixEvaluation(expressions) {
    let numberStorage = new Stack();
    let exp = expressions;
    let outputToString = ''

    for (let i = 0; i < exp.length; i++) {
        let num1,
            num2,
            result;
        let currentChar = exp.charAt(i);
        console.log('current: ' + currentChar);

        if (!isNaN(currentChar)) {
            console.log("Number exist!");
            numberStorage.push(currentChar);
            console.log('Top of stack:' + numberStorage.peek());
        } else {
            num1 = numberStorage.pop();
            console.log('num1:' + num1);
            num2 = numberStorage.pop();
            console.log('num2:' + num2);

            // TODO: Make a safety net here when there's no more in storage
            // to pit against!
            if (num1 == numberStorage.isEmpty() || num2 == numberStorage.isEmpty()) {
                return "Can't perform postfix evaluation";
            }

            switch (currentChar) {
                case '+':
                    result = parseInt(num2) + parseInt(num1);
                    console.log('result: ' + result);
                    numberStorage.push(result);
                    console.log('Top of stack:' + numberStorage.peek());
                    break;
                case '-':
                    result = parseInt(num2) - parseInt(num1);
                    numberStorage.push(result);
                    console.log('Top of stack:' + numberStorage.peek());
                    break;
                case '*':
                    result = parseInt(num2) * parseInt(num1);
                    numberStorage.push(result);
                    console.log('Top of stack:' + numberStorage.peek());
                    break;
                case '/':
                    result = parseInt(num2) / parseInt(num1);
                    numberStorage.push(result);
                    console.log('Top of stack:' + numberStorage.peek());
                    break;
                default:
                    console.log("Not an expression!")
                    break;
            }
        }
    }

    return numberStorage.pop();
}

console.log(postfixEvaluation("231*+9-"));


// The Base Converter Algorithm

function baseConverter(decimalNumber, base) {
    const remainderStack = new Stack();
    const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let number = decimalNumber;
    let remainder;
    let baseString = '';

    if (!(base >= 2 && base <= 36)) {
        return '';
    }

    while (number > 0) {
        remainder = Math.floor(number % base);
        remainderStack.push(remainder);
        number = number.floor(number / base);
    }

    while (!remainderStack.isEmpty()) {
        baseString += digits[remainderStack.pop()];
    }

    return baseString;
}

// Test
console.log(baseConverter(100345, 2)); // 11000011111111001
console.log(baseConverter(100345, 8)); // 303771
console.log(baseConverter(100345, 16)); // 187F9
console.log(baseConverter(100345, 35)); // 2BW0


// Palindrom problem