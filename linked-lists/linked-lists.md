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

## Define Linked Lists

Unlike arrays, which have a fixed size, a linked list is a dynamic data structure that can allocate and deallocate memory at runtime.  There are two types of linked lists:

* Singly linked lists
* Doubly linked lists


## Shortcomings of Arrays

The main problem with using JavaScript arrays, however, is that arrays in JavaScript are implemented as objects, causing them to be less efficient than arrays built in languages such as C++ and Java.

When you determine that the operations performed on an array are too slow for practical use, you can consider using the linked list as an alternative data structure. The linked list can be used in almost every situation where a one-dimensional array is used, except when you need random access to the elements of a list. When a random access is required, an array is the better structure to use.


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


## Pushing elements to the end of the linked list

When adding an elemnt at the end of a `LinkedList` object, there can be two scenarios: one where the list is empty and we are adding its first element, or one where the list is not empty and we are appending elements to it.

THe following is the implementation of the `push` method:
```
push(element) {
    const node = new Node(element);
    let current;

    if (this.head == null) {
        this.head = node;
    } else {
        current = this.head;

        // get the last item...
        while (current.next != null) {
            current = current.next;
        }

        // ...and assign next to new element to make the link
        current.next = node;
    }

    this.count++;
}
```

The first thing we need to do is create a new `Node` passing `element` as its value.

First scenario: adding an element when the list is empty. When create a `LinkedList` object, the `head` will point to `undefined` (or it could be `null` as well).

If the `head` element is `undefined` or `null` (the list is empty), it means we are addingt the first element to the list. So, all we have to do is assign the `node` to the `head`. The next `node` element will be `undefined` automatically.

Second scenario: adding an element to the end of the list when it is not empty.

To add an elemnt to the end of the list, we first need to find the last element. Remember that we only have a reference to the first elemnt, so we need to iterate through the list until we find the last item. To do so, we need a variable that points to the `current` item of the list.

When looping through the list, we know we have reached its end when the `current.next` pointer is `undefined` or `null`. Then, all we have to do is linke the `current` element's (which is the last one) `next` pointer to the node we want to add to the list.

[!important] `this.head == null` is equivalent to (`this.head === undefined || head == null`), and `current.next != null` is equivalent to (`current.next !== undefined && current.next !== null`).

When we create a `Node` instance, its `next` pointer will always be `undefined`. We are OK with this because we know that it is going to be the last item on the list.

And finally, we cannot forget to increment the size of the list so that we can control it and easily get the list size.


## Removing elements from the linked list from a specific position.

We are going to implement TWO methods: the first one removes an element from a specified position (`removeAt`), and the second one is based on an the element value. As in the case of the `push` method, tehre are two scenarios when removing elements from the linked list. The first scenario is removign the first element, and the second one is removing any elemnt but the first one.

`removeAt`

```
removeAt(index) {
    // check for out-of-bounds values
    if (index >= 0 && index < this.count) {
        let current = this.head;

        // removing first item
        if (index === 0) {
            this.head = current.next;
        } else {
            let previous;

            for (let i = 0; i < index; i++) {
                previous = current;
                current = current.next;
            }

            // link  previous with current's next: skip it to remove
            previous.next = current.next;
        }

        this.count--;
        return current.element;
    }

    return undefined;
}
```

As the method is going to receive the `index` (position) of the node that needs to be removed, we need to verify whether the `index` is valid. A valid position would be from `index 0` (included) to the size of the list (`count - 1`, as the `index` starts from zero). If it is a valid position, we return `undefined` (meaning no element was removed from the list).

First scenario: to remove the first element from the list (`index === 0`).

So, if we want to remove the first element, all we have to do is point `head` to the second element of the list. We will make a reference to the first element of the list using the `current` variable (we will also use this to iterate the list, but we will get there in a minute). So if we assign `head` to `current.next`, we will be removing the first element. We could also assign `head` to `head.next` directly (without using the `current` variable as an alternative).

Now let's say we want to remove the last item of the list, or an item from the middle of the list. To do so, we need to iterate through the nodes of the linked list until we get to the desired positon. An important detail: the `current` variable will always make a refernce to the current element of the list that we are looping through. We also need to make a reference to the lement that comes before the `current`; we will name it `previous`.

After we iterate to the desired position, the `current` variable will hold the node we want to remove from the linked list. So, to remove the `current` node, all we have to do is link `previous.next`. This way, the `current` node will be lost in the computer memory and will be available for cleaning by the garbage collector.

In the case of the last element, when we get off the loop in line, the `current` variable will be a reference to the last node of the list (the one we want to remove). The `current.next` value will be `undefined` (because it is the last node). A we also keep a reference to the `previous` node (one node before the current one), `previous.next` will point to `current`, so to remove `current` all we have to do is change the value of `previous.next` to `current.next`.

The `current` variable is a reference to the node that we want to remove. The `previous` variable is a reference to the node that comes before the element we want to remove; thus, to remove the current node, all we need to do is link `previous.next` to `current.next`, and so our logic works for both cases.


## Looping through the List until we get the Desired Position

In the `remove` method, we need to loop through the list until we get to the desired `index` (position). The code snippet to loop until the desired `index` is common in the `LinkedList` class methods. For this reason, we can refactor the code and extract the logic to a separate method so we can reuse it in different places.

`getElementAt`

```
getElementAt(index) {
    if (index > = 0 && index <= this.count) {
        let node = this.head;
        for (let i = 0; i < index && node != null; i++) {
            node = node.next;
        }

        return node;
    }

    retunr undefined;
}
```

Just to make sure we will loop through the list until we find a valid position, we need to verify whether the `index` passed as a paramter in a valid position. If an invalid position is passed as a paramter, we return `undefined`, since the position does not exist in the `LinkedList`. Next, we will initialise the variable `node` that will iterate through the list with the first element, which is the `head`. You can also rename the variable `node` to `current` if you want to keep the same pattern as the other methods of the `LinkedList` class:
```
getElementAt(index) {
    if (index >= 0 && index <= this.count) {
        let current = this.head;
        for (let i = 0; i < index && current != null; i++) {
            current = current.next;
        }

        return current;
    }

    retunr undefined;
}
```

Next, we will loop through the list until the desired `index`. When we get out of the loop, the `node` (or `current`) element will be referencing the element at the `index` position. You can also use `i = 1; i <= index` in the for loop to achieve the same result.


## Refactoring the Remove Method

We can refactor the `remove` method and the `getElementAt` method that has been created. To do so, we can replace certain lines, as follows:

```
if (index === 0) {
    // logic for first position
} else {
    const previous = this.getElementAt(index - 1);
    current = previous.next;
    previous.next = current.next;
}

this.count--;
```

i.e.

`removeAt`

```
removeAt(index) {
    // check for out-of-bounds values
    if (index >= 0 && index < this.count) {
        let current = this.head;

        // removing first item
        if (index === 0) {
            this.head = current.next;
        } else {
/// >>> OLD LINE >>>
            let previous;

            for (let i = 0; i < index; i++) {
                previous = current;
                current = current.next;
            }

            // link previous with current's next: skip it to remove
            previous.next = current.next;

// >>> NEW LINE >>>
            const previous = this.getElementAt(index - 1);
            current = previous.next;
            previous.next = current.next;

// >>> END >>>
        }

        this.count--;
        return current.element;
    }

    return undefined;
}
```


## Inserting an Element at any Position

This method provides you with the capability to insert an `element` at any position.

`insert`

```
insert (element, index) {
    if (index >= 0 && index <= this.count) {
        const node = new Node(element);

        // add on first position
        if (index === 0) {
            const current = this.head;
            node.next = current;
            this.head = node;
        } else {
            const previous = this.getElementAt(index - 1);
            const current = previous.next;
            node.next = current;
            previous.next = node;
        }

        // update size of list
        this.count++;
        return true;
    }

    return false;
}
```

As we are handling position (indexes), we need to check the out-of-bound values, just like we did in the `remove` method. If it is out-of-bounds, we return the value `false` to indicate that no tiem was added to the list.

If the position is valid, we are going to handle the different scenarios.

The first scenario is the case where we need to add an `element` at the beginning of the list, meaning the *first position*.

We have the `current` variable making a reference to the first element of the list. What we need to do is set the value `node.next` to `current` (the first element of the list or simply to `head` directly). Now, we have `head` and also `node.next` pointing to `current`. Next, all we have to do is change the `head` reference to `node`, and we have a new element in the list.

Second scenario: adding an `element` in the middle or at the end of the list.

First we need to loop through the list until we reach teh desired position. In this case, we will loop to index `index - 1`, meaning one position before where we desire to insert the new `node`.

When we get out of th eloop, the `previous` variable will be reference to an element before the `index` where we would like to insert the new element, and the `current` variable will be a reference to an `element` present after the position where we would like to insert the new element. In this case, we want o add the new item between `previous` and `current`. So, first we need to make a link between the new (`node`) and the `current`, and then we need to change the link between `previous` and `current`. We need `previous.next` to point to `node` instead of `current`.

If we try to add a new `element` to the last position, `previous` will be a reference to the last item of the list and `current` will be `undefined`. In this case, `node.next` will point to `current`, `previous.next` will point to `node`, and we have a new `element` in the list.

How to add a new `element` in the middle of the list.

In this case, we are trying to insert the new `element` (`node`) between the previous and `current` elements. First we need to set the value of the `node.next` pointer to the `current`. Then, we need to set the value of `previous.next` to `node`. Finally, we have a new `element` in the list!

[!important] It is very important to have variables referencing the ndoes we need to control so that we do not lose the link between the nodes. For this reason, it is better to declare an extra variable to help use with these references.


## The indexOf method: returning the position of an element

The `indexOf` method receives the value of an element and returns the position of this element if it is found. Otherwise, it returns `-1`.

`indexOf`

```
indexOf(element) {
    let current = this.head;
    for (let i = 0; i < this.count && current != null; i++) {
        if (this.equalsFn(element, current.element)) {
            return i;
        }

        current = current.next;
    }

    return -1;
}
```

As always, we need a variable that will help use iterate through the list; this variable is `current`, and its first value is the `head`.

Next, we iterate through the elements, starting from the `head` (index `0`) until the list size (the `count` variable) is reached. Just to make sure, we can verify whether the `current` variable is `null` or `undefined` to avoid runtime errors as well.

In each iteration, we will verify whether the element we are looking for is the element in the `current` node. In this case, we will use the equals function that we passed to the `LinkedList` class constructor. The default value of `equalFn` is presented as follows:

```
function defaultEquals(a, b) {
    return a === b;
}
```

So it would be the same as using `element === current.element`. However, if the element is a complex object, we allow the developer to pass a customized function to the `LinkedClass` to compare the elements.

If the element we are looking for is the element of `current`, we return its position. If not, we iterate to the next node of the list.

The loop will not be executed if the list is empty, or if we reach the end of the list. If we do find the value, we return `-1`.


## Removing an element from the linked list from a specific position.

With the `indexOf` method created, we can

Implement two methods:

* `removeAt` removes an element from a specified position
* `remove` based on the element value.

There are two scenarios when removing elements from the linked list.

`removeAt`

```
removeAt(index) {
    // check for out-of-bounds values
    if (index >= 0 && index < this.count) {
        let currenct = this.head;

        // removing first item
        if (index === 0) {
            this.head = current.next;
        } else {
            let previous;

            for (let i = 0; i < index; i++) {
                previous = current;
                current = current.next;
            }

            // link with current's next: skip it to remove
            previous.next = current.next
        }
        this.count--;

        return current.element;
    }

    return undefined;
}
```

As the method is going to receive the `index` (position) of the node that needs to be removed, we need to verify whether the `index` is valid. A valid position would be from `index 0` (included) to the size of the list (`count - 1`, as the `index` starts from zero). If it is not a valid position, we return `undefined`, meaning no element was removed from the list.

First scenario: we want to remove the first element from the list (`index === 0`).

So if we want to remove the first elelemnt, all we have to do is point `head` to the second element of the list. We will make a reference to the first elelment of the list  using the `current` variable (in a minute, we will also use this to iterate the list). So, the `current` variable is a reference to the first element of the list. If we assign `head` to `current.next`, we will be removing the first element. We could also assign `head` to `head.next` direcly (without using the `current` variable as an alternative).

Now let's say we want to remove the last item of the list, or an item from the middle of the list. To do so, we need to iterate through the nodes of the linked list until we get to the desired position. An important detail: the `current` variable will always make reference to the current element of the list that we are looping through. We also need to make a reference to the element that comes before the `current` - we will name it `previous`.

After we iterate the desired position, the `current` variable will hold the node we want to remove from the linked list. So, to remove the `current` node, all we have to do is link `previous.next` with `current.next`. This way, the `current` node will be lost in the computer memory and will be available for cleaning by the garbage collector.


## Looping through the list until we get to the desired position

The code snipper to loop until the desired `index` is common in `LinkedList` class methods. It is often refactor to be reused in different places.

```
getElementAt(index) {
    if (index >= 0 && index <= this.count) {
        let node = this.head;

        for (let i = 0; i < index && node != null; i++) {
            node = node.next;
        }

        return node;
    }

    return undefined;
}
```

To make sure we loop through the list until we find a valid position, we need to verify whether the `index` passed as a paramter in a valid position. If an invalid position is passed as a parameter, we return `undefined`, since the position does not exist in the `LinkedList`.

Next, we will initialize the variable `node` that will iterate through the list with the first element, which is the `head`. (NB: You can rename the variable `node` to `current` if you want to keep the same pattern as the other methods of the `LinkedList` class.)

Next, we will loop through the list until the desired `index`. When we get out of the loop, the `node` element will be referencing the element at the `index` position. You can also use `i = 1; i <= index` in the for loop to achieve the same result.


## Refactoring the remove method

