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


## The Circular Queue - Hot Potato

As queues are often applied in computer science and also in our lives, there are some modified versions of the default queue. One of the modified versions is the **circular queue**.

An example of a circular queue is the Hot Potato game. In this game, children are organized in a circle, and they pass the hot potato to their neighbor as fast as they can. At a certain point of the game, the hot potato stops being passed around the circle. This action is repeated until there is only one child left (the winenr).

```
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
```

Where,

*num*, determines who will get eliminated (like a die roll).

Use the `Queue` class. We will get a list of names, and queue all of them. Given a number, we need to iterate the queue. We will remove an item from the beginning of the queue. We will remove an item from the beginning of the queue, and add it to the end of the queue to simualate the hot potato (if you have passed the hot potatoe to your neighbor, you are not threatened with elimination right away). Once we reach the number, the person that has the hot potato is eliminated (removed from the queue). When there is only one person left, this person is declared the winner.

 e.g.
```
const names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl'];
const result = hotPotato(names, 7);

result.eliminated.forEach(name => {
    console.log(`${name} was eliminated from the Hot Potato game.`);
});

console.log(`The winner is: ${result.winner}`);
```

The output from the previous algorithm is as follows:

```
Camila was eliminated from the Hot Potato game
Jack was eliminated from the Hot Potato game
Carl was eliminated from the Hot Potato game
Ingrid was eliminated from the Hot Potato game
The winner is: John
```

You can change the *num* (number) passed to the `hotPotato` function to similar different scenarios.