// Stack #1

// class Stack {
//     constructor() {
//         this.items = [];
//     }

//     push(element) {
//         this.items.push(element);
//     }

//     pop() {
//         return this.items.pop();
//     }

//     peek() {
//         return this.items[this.items.length - 1];
//     }

//     isEmpty() {
//         return this.items.length === 0;
//     }

//     size() {
//         return this.items.length;
//     }

//     clear() {
//         this.items = [];
//     }
// }

// Test
// const stack = new Stack();
// console.log(stack.isEmpty());
// stack.push(5);
// stack.push(8);
// console.log(stack.peek()); // outputs 8
// stack.push(3);
// console.log(stack.size()); // outputs 3
// console.log(stack.isEmpty()); // outputs false
// stack.pop();
// console.log(stack.peek());


// Stack #2
// It is also possible to use JavaScript object to store the stack elements,
// keep them in order, and also comply with LIFO principle.
/*
PRO:
+ Use less memory
+ Have all the elements organised the way we need to
*/

class Stack {
    constructor() {
        this.count = 0;
        this.items = {}
    }

    push(element) {
        this.items[this.count] = element;
        this.count++;
    }

    size() {
        return this.count;
    }

    isEmpty() {
        return this.count === 0;
    }

    // First, we need to verify whether the stack is empty, and, if so,
    // we return the value `undefined` (or w/e). If the stack is not emtpy,
    // we will decrement the `count` property and we wil store the value
    // from the top of the stack so we can return it
    // after the element has been removed.
    pop() {
        if (this.isEmpty()) {
            return undefined;
            // return 'underflow';
        }
        this.count--;
        const result = this.items[this.count];
        delete this.items[this.count];
        return result;
    }

    peek() {
        if (this.isEmpty) {
            return undefined;
        }
        return this.items[this.count - 1];
    }

    clear() {
        this.items = {};
        this.count = 0;

        // Alternatively, in LIFO fashion
        // while (!this.isEmpty()) {
        //     this.pop();
        // }
    }

    // "toString" method
    // Note: In the array version, we do not need to worry about
    // a "toString" method because the data structure will use the one
    // already provided by the array - `Array.prototype.toString()`
    toString() {
        if (this.isEmpty()) {
            return '';
        }
        // If stack is not empty, we will initialise the string with
        // the first element, from the base of the stack. Then we will
        // iterate through all the keys of the stack until its top, adding
        // a comman (,) followed by the next element.
        // If the stack contains only one element, the for-loop
        // will not be executed.
        let objString = `${this.items[0]}`;
        for (let i = 1; i < this.count; i++) {
            objString = `${objString}, ${this.items[i]}`;
        }
        return objString;
    }
}


// Test
const stack = new Stack();
stack.push(5);
stack.push(8);
/*
Internally, we will have the following values inside the `items` and
`count` properties:

items= {
    0: 5,
    1: 8
}

count = 2
*/


// Stack #3
// Private Class Fields (recent as 2020)
// Use the hash symbol (#) to declare a private property
// Supported by Babel and only in Modern Browsers

class Stack {
    #count = 0;
    #items = 0;

    // stack methods
}