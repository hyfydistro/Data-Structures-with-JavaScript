# Stack Fundamental

# The Stack Data Structure

A stack is an ordered collection of items that follows the Last In, First Out (LIFO) principle. The addition of new items or the removal of existing items takes place at the same end. The end of the stack is known as the top, and the opposite side is known as the base. The newest elements are near the top, and the oldest elements are near the base.

e.g. A stack is used by compilers in programming languages, by the computer memory to store variables and method calls, and also by the browser history (the browser's back button).

We need a data structure to store the elements of the stack.

* array

Since the stack follows the LIFO principle, we will limit the functionalities that will be available for the insertion and removal of elements. The following methods will be available to the `stack` class.

* `push([element(s)])`: This method adds a new element (or several elements) to the top of the stack.
* `pop()`: This method removes the top element from the stack. It also returns the removed element.
* `peek()`: This mehod returns the top element from the stack. The stack is not modified (it does not remove the elemnt; it only returns the element for information purposes).
* `isEmpty()`: This method returns `true` if the stack does not contain any elements, and `false` if the size of the stack is bigger than 0.
* `clear()`: This method removes all the elements of the stack.
* `size()`: This method returns the number of elements that the stack contains. It is similar to the `length` property of an array.
