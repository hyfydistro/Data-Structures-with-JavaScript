# decimal-binary conversion algorithms

## Converting decimal to binary number

Start with the integer in question, and divide it by 2 while keeping note of the quotient and the remainder. Continue dividing the quotient by 2 until you get a quotient of zero. Finally, write out hte remainders in the revsers order.

e.g. Convert the number 12 to binary

12 / 2 = 6 i.e. 0 remainder
6 / 2 = 3 i.e. 0 remainder
3 / 2 = 1 i.e. 1 remainder
1 / 2 = 0 i.e. 1 remainder

In the reverse order, the remainder output is: 1100. So, 12 in decimal system is represented as 1100 in binary.


## Converting Decimal Fraction to Binary [Disregard]

! Not Stack related

To covert fraction to binary, start with the fraction in question and multiply it by 2, while keeping not of the resulting intger and fractional part. Continue multiplying by 2 until you get a resulting fractional part equal to zero. Finally, write out the integer parts from the results of each multiplication.

e.g. Conver the fraction 0.375 to binary

0.375 * 2 = 0 + 0.75
0.75 * 2 = 1 + 0.5
0.5 * 2 = 1 + 0

Result: 0.0375 in decimal system is represented as 0.011 in binary.


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

- [The simple math behind decimal-binary conversion algorithms](https://indepth.dev/the-simple-math-behind-decimal-binary-conversion-algorithms/#:~:text=Converting%20decimal%20integer%20to%20binary,remainders%20in%20the%20reverse%20order.)

- [Implementation of Stack in JavaScript](https://www.geeksforgeeks.org/implementation-stack-javascript/)