# Check If Palindrome

## Brief

Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note: You'll need to remove **all non-alphanumeric characters** (punctuation, spaces and symbols) and turn everything lower case in order to check for palindromes.

Pass varying formats:
* "racecar"
* "RaceCar"
* "race CAR"
* etc.

- [ ] Deal with odd and even number if characters.

## Test Cases

Performance Test Cases

* A small palindrom of 10 characters
* A medium palindrome of 1000 characters
* A large palindrome of 5000 characters

Try NodeJS `performance.now()`.



## Using Stack

...

## Shortcut

### Using Regular Expression

*Regular expressions* are patterns used to match character combinations in strings.

When the search for a match requires something more than a direct match, the pattern includes special characters.

To pass the last test case, can use two Regular Expressions: `/[^A-Za-z0-9]/g` or `[\W_]/g`

`\W` removes all non-alphanumeric characters:
* `\W` matches any non-word character
* `\W` is equivalent to [^A-Za-z0-9_]
* `\W` matches anything that is no enclosed in the brackets
    What does that mean?
    [^A-Z] matches anything that is not enclosed between A and Z
    [^a-z] matches anything that is not enclosed between a and z
    [^0-9] matches anything that is not enclosed between 0 and 9
    [^_] matches anything that is not enclosed between _

Since we need palindrome(“0_0 (: /-\ :) 0–0”) to return true, which means “_(: /-\ :)–” has to be matched.

We will add "_" to pass this specific test case.
```
\W_
```

We will also need to add the **g** flag for global search.
```
/[\W_]/g
```

> `/[\W_]/g` was used for pure demonstrative purpose to show how RegExp works. `/[^A-Za-z0–9]/g` is the easiest RegExp to choose.


#### Check Palindromes with Built-In Functiosn

In this solution we use several methods.

* The `toLowerCase()` method to return the calling string value converted to lowercase.
* The `replace()` method to return a new string with some or all matches of a pattern replaced by a replacement (use RegExp).
* The `split()` method splits a String object into an array of strings by separating the string into sub strings.
* The `reverse()` method reverses an array in place. The first array element becomes the last and the last becomes the first.
* The `join()` method joins all elements of an array into a string.

```
function isPalindrome(str) {
    var regExp =  /[\W_]/g;
    var lowRegStr = str.toLowerCase().replace(regExp, '');
    var reverseStr = lowRegStr.split('').reverse().join('');
    return reverseStr === lowRegStr;
}

isPalindrome("A man, a plan, a canal. Panama");
```

Performance:

Small: 0.1633 ms
Medium: 0.1986 ms
Large: 1.5192 ms

Pros

Concise and very readable.
Easy to understand what is going on.

Cons

Not the most well-performing, namely on small strings.
Either using every(), forEach, map, or reduce is faster (every() slowest to reduce fastest). Avoid Recursion - 100x slower.

Performance Benchmark referenced from [11 ways to check for palindromes in JavaScript](https://itnext.io/11-way-to-check-for-palindromes-in-javascript-85dbfe7dfb5d).

#### Check Palindromes with FOR Loop

Half-indexing (`len/2`) has benefits when processing large strings. We check the end from each part and divide the number of iterations inside the FOR loop by two.

```
function isPalindrome(str) {
    var regExp = /[^A-Za-z0-9]/g;
    str = str.toLowerCase().replace(regExp, '');
    var len = str.length;
    for (var i = 0; i < len/2; i++) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }

    return true;
}

isPalindrome("A man, a plan, a canal. Panama");
```


Performance:

Small: 0.0731 ms
Medium: 0.1267 ms
Large: 0.6272 ms

Pros

Performs very well, even on large strings.
We are able to return as soon as we identify the first violation.

Cons

In the world of ES6 and Bable, for loops aren't the most used anymore, and this solution appears a bit “clumsy” to read.

Performance Benchmark referenced from [11 ways to check for palindromes in JavaScript](https://itnext.io/11-way-to-check-for-palindromes-in-javascript-85dbfe7dfb5d).


## Reference

* [11 ways to check for palindromes in JavaScript](https://itnext.io/11-way-to-check-for-palindromes-in-javascript-85dbfe7dfb5d)
* [Two Ways to Check for Palindromes in JavaScript](https://www.freecodecamp.org/news/two-ways-to-check-for-palindromes-in-javascript-64fea8191fd7/)
* OReilly - [](https://www.oreilly.com/library/view/data-structures-and/9781449373931/ch04.html)
* _GeeksforGeeks_ - [Check whether the given string is Palindrome using Stack](https://www.geeksforgeeks.org/check-whether-the-given-string-is-palindrome-using-stack/)