// stack memory(primitive data type) , heap memory(non-primitive data types)
//call by value changes will made in the copy of the data
let  name = "sourabh"

let anotherName = name
anotherName = "goldy"

console.log(name);
console.log(anotherName);
// call by reference
let userone = {
    name: "hello",
    age: 23,
}

let usertwo = userone
usertwo.name = "namaste"

console.log(userone.name);
console.log(usertwo.name);