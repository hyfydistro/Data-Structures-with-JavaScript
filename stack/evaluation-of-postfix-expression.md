## Evaluation of Postfix Expression

The Postfix* notation is used to represent algebraic expressions. The expressions written in postfix form are evaluated faster compared to infix* notation as parenthesis are not required in postfix.

The following algorithm for evaluation postfix expressions.

1. Create a stack to store operands (or values).
2. Scan the given expression and do following for every scanned element.
    a. If the element is a number, push it into the stack.
    b. If the element is an operator, pop operands for the operator from stack. Evaluate the operator and push the result back to the stack.
3. When the expression is ended, the number in the stack is the final anser.

*postfix (v.) : append as suffix.
*infix (v.) : insert (a formative element) into the body of a word.


## Reference

- [Implementation of Stack in JavaScript](https://www.geeksforgeeks.org/implementation-stack-javascript/)