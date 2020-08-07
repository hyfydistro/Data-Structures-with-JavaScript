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

## Palindrome Checker

> A palindrome is a word, phrase, or other sequence of characters which reads the same backward as forward, such as "madam" or "racecar".

There are different algorithms we can use to verify whether a phrase or string is a palindrome. The easiest way is reversing the string and comparing it with the original string. If both strings are equal, then we have a palindrome.

The following algortihm uses a deque to solve this problem.

```
function palindromeChecker(aString) {
    (aString === undefined || aString === null || (aString !== null && aString.length === 0)) {
        return false;
    }

    const deque = new Deque();
    const lowerString = aString.toLocaleLowerCase().split(' ').join(');
    let isEqual = true;
    let firstChar, lastChar;

    for (let i = 0; i < lowerString.length; i++) {
        deque.addBack(lowerString.charAt(i));
    }

    while (deque.size() > 1 && isEqual) {
        firstChar = deque.removeFront();
        lastChar = deque.removerBack();
        if (firstChar !== lastChar) {
            isEqual = false;
        }
    }

    return isEqual;
}
```

where,

* `toLocaleLowerCase()` method converts a string to lowercase letters, according to the host's current locale or any locale-specifci specific case mappings.
    The locale is based on the language settings of the browser.
    Generally, this method returns the same result as the `toLowerCase()` method. However, for some locales, where language conflict with the regular Unicode case mappings occurs (such as Turkish whose case mappings do not follow the default case mappings in Unicode), the results may vary.
    NB:
        - The `toLocaleLowerCase()` method does not change the original string.
        - `toLocaleLowerCase()` and `toLowerCase()` methods return new strings and DON'T modify the original (javaScript strings are immutable). You will need to re-assign teh value back to the element.

Before we start with the algorithm logic, we need to verify whether the string that was passed as a parameter is valid. If it is not valid, then we return `false`.

whether the...

* string is undefined
* string is null
* string does not equal null AND does equal 0

For this algorithm, we will use the `Deque` class we implemented in this chapter. As we can receive a string with both lowercase and capital letters, we will transform all letters to lowercase and we will also remove all the spaces. If you want to, you can also remove all special characters such as `!?-()` and so on. To keep this algorithm simple, we will skip this part.

Next, will will `enqueue` all characters of the string to the `deque`. While we will have elements in the `deque` (if only one character is left, it is a palindrome) and the string is a palindrome, we will remove one element from the front and one from the back. To be a palindrome, both characters do not match, then the string is not a palindrome.

