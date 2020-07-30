# Deque Data Structure

The **deque** data structure, also known as the **double-ended queue**, is a special queue that allows us to insert and remove elements from the end or from the front of the queue.

An example of a deque in real life is the typical line for movie theaters, cafeterias, and so on. For example, a person who has just bought a ticket can come back to the front of the queue just to ask for some quick information. And if the person who is at the back of the queue is in a hurry, this person can also leave the queue.

In computer science, a common application of a deque is storing a list of undo operations. Each time a user performs an operation in the software, the operation is pushed to the deque. When the user clicks on the Undo button, the operation is popped from the deque, meaning it is removed from the back. After a predefined number of operations, the older ones are removed from the front of the deque. Because the deque implements both principles, FIFO and LIFO.

> Dequeue is an alternative form of deque.
As nouns the difference between dequeue and deque is that dequeue is while deque is (computing) a linear data structure in which elements may be appended to or removed from either end.

As a verb dequeue is (computing) to remove an item from a queue.

## Creating the Deque class

Declare the `Deque` class and its constructor.

```
class Deque {
    constructor() {
        this.count = 0;
        this.lowestCount = 0;
        this.items = {};
    }
}
```

> Think of deque as a special queue.

Deque allows inserting and removing from both ends, we will also have the following methods:

* `addFront(element)`: This method adds a new element at the front of the deque.

* `addBack(element)`: This method adds a new element at the back of the deque (same implementation as the `enqueue` method from the `Queue` class).

* `removeFront()`: This method removes the first element from the deque (the same implementation as the `dequeue` method from the `Queue` class).

* `removeBack()`: This method removes the last element from the deque.

* `peekFront()`: This method returns the first element from the deque.

* `peekBack()`: This method returns the last element from the deque.

The `Deque` class also implements the `isEmpty`, `clear`, and `toString` methods.


## Adding elements to the front of the deque

`addFront`

```
addFront(eleemnt) {
    if (this.isEmpty()) {
        this.addBack(element);
    } else if (this.lowestCount > 0) {
        this.lowestCount--;
        this.items[this.lowestCount] = element;
    } else {
        for (let i = this.count; i > 0; i--) {
            this.items[i] = this.items[i - 1];
        }

        this.count++;
        this.lowestCount = 0;
        this.items[0] = element;
    }
}
```

