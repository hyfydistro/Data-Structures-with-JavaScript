
class Queue {
    constructor() {
        this.items = {};
        this.lowestCount = 0;
        this.count = 0;
    }

    enqueue(element) {
        this.items[this.count] = element;
        this.count++;
    }

    dequeue() {
        if (this.isEmpty()) { // USe 'this' or not?
            return undefined;
        }
        let result = this.items[this.lowestCount];
        delete this.items[this.lowestCount];
        this.lowestCount++;
        return result;
    }

    peek() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.lowestCount]
    }

    isEmpty() {
        return this.count - this.lowestCount == 0;
    }

    size() {
        return this.count - this.lowestCount;
    }

    clear() {
        this.items = {};
        this.lowestCount = 0;
        this.count = 0;
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


// TEST CASES:

// const queue = new Queue();
// console.log(queue.isEmpty()); // Outputs true

// queue.enqueue('John');
// queue.enqueue('Jack');
// console.log(queue.toString()); // John, Jack

// queue.enqueue('Camila');
// console.log(queue.toString()); // John, Jack, Camila
// console.log(queue.size()); // Outputs 3
// console.log(queue.isEmpty()); // Outputs false

// queue.dequeue(); // removes John
// queue.dequeue(); // removes Jack
// console.log(queue.toString()); // Camila


// EXAMPLE: Hot Potato

function hotPotato(elementsList, num) {
    const queue = new Queue();
    const eliminatedList = [];

    for (let i = 0; i < elementsList.length; i++) {
        queue.enqueue(elementsList[i]);
    }

    while (queue.size() > 1) {
        for (let i = 0; i < num; i++) {
            queue.enqueue(queue.dequeue());
        }

        eliminatedList.push(queue.dequeue());
    }

    return {
        eliminated: eliminatedList,
        winner: queue.dequeue()
    };
}

const names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl'];
const result = hotPotato(names, 7);

result.eliminated.forEach(name => {
    console.log(`${name} was eliminated from the Hot Potato game.`);
});

console.log(`The winner is: ${result.winner}`);