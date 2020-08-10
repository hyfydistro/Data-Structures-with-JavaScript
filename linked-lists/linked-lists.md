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