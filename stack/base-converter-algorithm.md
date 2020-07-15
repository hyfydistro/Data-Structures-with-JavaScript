# Base Converter Algorithm

Pass the desired argument to the method and use it in the division operations.

In the conversion from decimal to binary, the remainders will be 0 or 1; in the conversion from decimal to octagonal, the remainders will be from 0 to 8; and in the conversion from decimal to hexadecimal, the remainders can be 0 to 9 plus the letters `A` to `F` (values 10 to 15). For this reason, we need to convert these values. Sp, starting at base 11, each letter of the alphabet will represent its base. The letter `A` represents base 11, `B` represents base 12, and so on.

## Different Intrepretation to the Problem

JavaScript has a radix parameter option included in their methods:

* `Number.parseInt(string, radix)`
* `[number].toString(radix)`

Decimal Number to Binary, Octal and Hexidecimal.

### Method: `Number.parseInt(string, radix)`

```
var input = prompt("Write your number");

Decimal   : input
Binary    : Number.parseInt(input, 2)
Octal     : Number.parseInt(input, 8)
Hex       : Number.parseInt(input, 16)

```

parseInt(string, radix)

where,
*string* - Required.
*radix* - Optional. A number (from 2 to 36) that represents the numeral system to be used.

The radix parameter is used to specify which numeral system to be used.

If the radix paramter is omitted, JavaScript assumes the following:
    * If the string begins with "0x", the radix is 16 (hexadecimal).
    * If the string begins with "0", the radix is 8 (octal). This feature is depracated.
    * If the string begins with any other value, the radix is 10 (decimal).


### Method: `[number].toString(radix)`

```
var input = Number(prompt("Write your number"));

Decimal   : input
Binary    : input.toString(2)
Octal     : input.toString(8)
Hex       : input.toString(16)

```

[number].toString(radix)

where,
*radix* - Optional. Which base to use for representing a numeric value. Must be an integer between 2 and 36.
    * 2 - The number will show as a binary value.
    * 8 - The number will show as an octal value.
    * 16 - The number will show as an hexadecimal value.



