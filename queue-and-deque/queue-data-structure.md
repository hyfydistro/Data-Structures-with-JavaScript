# The Queue Data Structure

A **queue** is an ordered collection of items that follows the *first in, first out* (FIFO), also known as the "first come, first served", principle.

The addition of new elements in a queue is at the tail, and the removal is from the front. The newest element added to the queue must wait at the end of the queue.

e.g. Waiting in a line in a cafeteria, movie, or a checkout line at a grocery store. The first person in the line is the first one who will be attended to.

e.g. [computer sceince] Printing line. Let's say we need to print five documents. We open each document and click on the Print buttton. Each document will be sent to the print line. The first document that we asked to be printed is going to be printed first and so on, until all the documents are printed.


## Creating the Queue class

Start with the basics and declare a `class`:
```
class Queue {
    constructor() {
        this.count = 0;
        this.lowestCount = 0;
        this.items = {};
    }
}
```

First, we need a data structure that will store the elements of the queue. We can use an array or and object to store our elements.

Note: An object will allow us to write a more efficient data structure when accessing its elements.

To help us control the size of the queue, we declare a `count` property as well. And, since we will be removing elements from the front of the queue, we also need a variable to help us track the first element. For this purpose, we declare the `lowestCount` variable.

Next, we need to declare the methods available for a queue:

* `enqueue(element)`: This method adds a new element at the back of the queue.

* `dequeu()`: This method removes the first element from the queue (the item that is the front of the queue). It also returns the removed element.

* `peek()`:This method returns the first element from the queue, the first one added, and the first one that will be removed from the queue. The queue is not modified (it does not remove the element; it only returns the element for information purposes). This method also works as the `front` method, as it is known in other languages.

* `isEmpty()`: This method returns `true` if the queue does not contain any elements, and `false` if the queue size is bigger than 0.

* `size()`: This method returns the number of elements the queue contains. It is similar to the `length` property of the array.


## Enqueing elements to the queue

`enqueue`

This method will be responsible for adding new elements to the queue, with one very important detail: we can only add new elements to the end of the queue.

```
enqueue(element) {
    this.items[this.count] = element;
    this.count++;
}
```

As `items` property is a JavaScript object, it is a collection of **key** and **value** pairs. To add an element to the queue, we will use the `count` variable as the key of the `items` object and the `element` will be its value. After pushing the elemnt to the stack, we increment the `count`.


## Dequeing elements from the queue

`dequeue`

This method is responsible for removing items from the queue. As the queue uses the FIFO principle, the first item that we added in the queue is the one that is removed.

```
dequeue() {
    if (this.isEmpty()) {
        return undefined;
    }

    const result = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
    return result;
}
```

First, we need to verify whether the queue is empty and, if so, we return the value `undefined`. If the queue is not empty, we will store the value from the front of the queue so we can return it after the element has been removed. We also need to increase the `lowestCount` property by 1.

With the `enqueue` and `dequeue` methods being the only methods available for adding and removing items from the queue, we have ensured the FIFO principle operates for our own `Queue` class.


## Peeking the element from the front of the queue

`peek`

This method will return the item from the front of the queue (using the `lowestCount` as a key to retrieve the element value).

```
peek() {
    if (this.isEmpty()) {
        return undefined;
    }

    return this.items[this.lowestCount];
}
```


## Verifying whether the queue is empty and its size

`isEmpty`

This method returns `true` if the queue is empty, and `false` otherwise.

```
isEmpty() {
    return this.count - this.lowestCount === 0;
}
```

To calculate how many elements there are in the queue, we simply calculate the difference between the key `count` and the `lowestCount`.


`size`

To implement this method, we simply return the difference.

```
size() {
    return this.count - this.lowestCount;
}
```

We can also write `isEmpty` method as follows:

```
isEmpty() {
    return this.size() === 0;
}
```


## Clearing the queue

`clear`

To clear all the elements from the queue, we can evoke the `dequeue` method until it returns `undefined` or we can simply reset the value of the `Queue` class properties to the same values as declared in its constructor.

```
clear() {
    this.tiems = {};
    this.count = 0;
    this.lowestCount = 0;
}
```


## Creating the toString method

`toString`

 This method will stringify results.

```
toString() {
    if (this.isEmpty()) {
        retunr '';
    }

    let objString = `${this.item[this.lowestCount]}`;
    for (let i = this.lowestCount + 1; i < this.count; i++) {
        objString = `${objString}, ${this.items[i]}`
    }

    return objString;
}
```

As the first index of the `Queue` class might not be zero, we start iterating it from the `lowestCount` index.


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

