# Linked Lists

Linked lists is a dynamic data structure, meaning that we can add or remove items from it at will and it will grow as required.

- The linked list data structure
-Adding elements to a linked list
- Removing elements from a linked list
- How to use the `LinkedList` class
- Doubly linked lists
- Circular linked lists
- Sorted linked list
- Implementing a stack with linked lists

Linked lists store a sequential collection of elements but, unlike arrays, in linked lists the elements are not placed contiguously* in memory. Each element consists of a node that stores the element itself and also a reference (also known as a "pointer" or "link") that points to the next element.

*contiguous (adj.): sharing a common border; touching. Next or together in sequence.

One of th benefits of a linked list over a conventional array is that we do not need to shift elements over when adding or removing them. However, we need to use pointers when working with a linked list and, because of this, we need to pay some extra attention when implementing a linked list. In the array, we can directly access any element at any positionl in the linked list, if we want to access an element from the middle, we need to start from the beginning (head) and iterate the list until we find the desired element.

e.g. A conga line. Each person is an element, and the hands woudl be the pointer that links to the next person in the conga line. You can add people to the line - you just need to find the spot where you want to add the person, decouple the connection, then insert the ne wperson and make the connection again.

e.g. A scavanger hunt. You have a clue, and this clue is the pointer to the place where you can find the next clue. With this link, you go to the next place and get another clue that will lead to the next one. The only way to get a clue from the middle of the list is to follow the list from the beginning (from the first clue).

e.g. A train. A train consists of a series of vehicles (also known as wagons). Each vehicle or wagon is linked to each other. You can easily decouple a wagon, change its place, or add or remove it. (Each wagon is an element of the list and the link between the wagons is the pointer.)


## Creating the LinkedList class

The skeleton of a `linkedList` class:
```
import { defaultEquals } from '.../util';
import { Node } from './models/linked-list-models';

exportdefault class LinkedList {
    cosntructor(equalsFn = defaultEquals) {
        this.count = 0;
        this.head = undefined;
        this.equalsFn = equalsFn;
    }
}
```

To compare equality between elements of the linked list, we will use a function that will be internally evoked as `equalsFn`. The developer that will use the `LinkedList` class, so that they will be able to pass a custom function that compares two JavaScript objects or values. If no custome function is passed, this data structure will use the `defaultEquala` function that is declared in the `util.js` file as the default equality comparison function. The `defaultEquals` function is presented as follows:

```
export function defaultEquals (a, b) {
    return a === b;
}
```

Since this data structure is dynamic, we alse need to store a reference to the first element as well. To do this, we can store the `this` reference inside a variable that we will call `head`.

To represent the head and other elements of the linked list, we need a helper calss called `Node`. The `Node` class representes the tiems that we want to add to the list. It contains an `element` attribute, which is the value that we want to add to the list, and a `next` attribute, which is the pointer that contains the link to the next node item in the list. The `Node` class is declared in the `models/linked-list-models.js` file (for reuse purposes) and its code is presented as follows:
```
export class Node {
    constructor (element) {
        this.element = element;
        this.next = undefined;
    }
}
```

The methods of the `LinkedList` class and what each are responsible for.

* `push(element)`: This method adds a new elemnt to the end of the list.

* `inset(element, position)`: This method inserts a new element at a specified position in the list.

* `getElementAt(index)`: This method returns the element of a specific position in the list. If the leement does not exist in the list, it returns `undefined`.

* `remove(element)`: This method removes an elemnt form the list.

* `indexOf(element)`: This method removes an item form a specified position in the list.

* `removeAt(position)`: This method removes an item from a specified position in the list.

* `isEmpty()`: This method returns `true` if the linked list does not contain any elements, and `false` if the size of the linked list is bigger than `0`.

* `size()`: This method returns the number of elements the linked list contains. It is similar to the `length` property of the array.

* `toString()`: This method returns a string representation of the linked list. As the list uses a `Node` class as an element, we need to overwrite the default `toString` method inherited from the JavaScript `Object` class to output only the element values.