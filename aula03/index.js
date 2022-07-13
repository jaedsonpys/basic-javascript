// vetores ou arrays

let array = ["string", 1, true];
console.log(array);

// manipulando arrays

// forEach
array.forEach((item, index) => {
    console.log(item, index);
})

// push
array.push("hello world");
console.log(array);

// pop
array.pop()
console.log(array);

// shift
array.shift();
console.log(array);

array.unshift("first1");
console.log(array);

// objetos
var object = {name: "Jaedson", age: 15, languages: ["Python", "C++"]};

// desestruturação
var { name, age } = object;

console.log(object);
console.log(name);
console.log(age);