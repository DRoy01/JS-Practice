
//Stack (Primitive) 
//Heap (Non-Primitive)

/* 
 * Whatever variable you declare on stack memory, you get a copy from there.
 *
 * in case of Heap memory, you get a reference.
 *
 *
 */

let myName = "DRoy" // As it's a primitive data type, it'll go to stack memory

let anotherName = myName
anotherName = "Protap"
console.log(myName)
console.log(anotherName)

let userOne = {
	email: "user@gmail.com",
	upi: "user@ybl"
}

// userOne is a primitive variable, it'll go to stack memory. and the object declared inside curly braces will go to heap memory. userOne will get a reference from the heap memory.

let userTwo = userOne // userTwo will get the same reference from the heap memory as userOne

userTwo.email = "changed@gmail.com"

console.log(userOne.email)
console.log(userTwo.email)
