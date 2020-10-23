# An Object-Based Linked List Design

Our design of a linked list will involve creating two classes.
* create a Node class for adding nodes to a linked list, and
* create a `LinkedList` class, which will provide functions for inserting nodes, removing nodes, displaying a list, and other housekeeping functions.

## The Node Class

The Node class consists of two properties:
* `element`, which stores the node's data, and
* `next`, which stores a link to the next node in the linked list.

Use a constructor function that sets the values for the two properties:
```
function Node(element) {
    this.element = element;
    this.next = null;
}
```

## The Linked List Class

