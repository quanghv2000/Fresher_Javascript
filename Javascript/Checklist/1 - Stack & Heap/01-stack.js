/*  
    Memory Life Cycle: Allocate => Use => Release
    - Stack: + Static memory allocation - Cấp phát bộ nhớ tĩnh
    - stores primitive values (strings, numbers, booleans, undefined, and null)
*/

const male = true
const name = 'John Doe'
const age = 24
const adult = true

// All the values get stored in the stack since they all contain primitive values.
/*
    Stack: 
    male = true
    name = 'John Doe'
    age = 24
    adult = true
*/

/* 
    - Static data is data where the engine knows the size at compile time.
    - This includes primitive values (strings, numbers, booleans, undefined, and null) 
    and references, which point to objects and functions.
    - Since the engine knows that the size won't change, it will allocate a fixed amount of memory for each value.
    - The process of allocating memory right before execution is known as static memory allocation.
    - Because the engine allocates a fixed amount of memory for these values, there is a limit to how large primitive values can be.
    - The limits of these values and the entire stack vary depending on the browser.
*/