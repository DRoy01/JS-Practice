
// Prefix and Postfix Operators

let x = 3
const y = x++

console.log(x, y) //Output: 4,3 - Because, x is incremented after completing the assignment

//MDN Documentation - If used postfix, with operator after operand (for example, x++), the increment operator increments and returms the value before incrementing.


let a = 3
let b = ++a

console.log(a, b) //Output: 4, 4 - Because, a is incremented before the assignment

//MDN Documentation - If used prefix, with operator before operand (for example, ++x), the increment operator incremetns and returns the value after incrementing.

let d = 3n 
console.log(typeof d)
console.log(d)

//MDN Doc - A BigInt value, also called a BigInt, is a bigint primitive, created by appending n to the end of an integer literal, or by calling the BigInt() function (without the new operator) and giving it an integer value or string value.


