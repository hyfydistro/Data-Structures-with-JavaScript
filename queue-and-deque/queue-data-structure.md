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

This method will be responsible for adding new elements to the queue, with one very important detail: we can only add new elements to the end of the queue.

```
enqueue(element) {
    this.items[this.count] = element;
    this.count++;
}
```

As `items` property is a JavaScript object, it is a collection of **key** and **value** pairs. To add an element to the queue, we will use the `count` variable as the key of the `items` object and the `element` will be its value. After pushing the elemnt to the stack, we increment the `count`.