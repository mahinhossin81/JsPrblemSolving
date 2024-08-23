//1.
function scopeTest() {
  if (true) {
    var varVariable = "I am var";
    let letVariable = "I am let";
    const constVariable = "I am const";
  }
  // console.log(varVariable);       // var হচ্ছে Global & function scope
 // console.log(letVariable);     // কারণ if block-scope তাই block-scoped এর বাইরে কল করায় কাজ করছে না, let & const global scope না local & block scope । return error
 // console.log(constVariable);   //কারণ if block-scope তাই block-scoped এর বাইরে কল করায় কাজ করছে না let & const global scope না local & block scope । return error
}

scopeTest();


//2.
function greet(name, greeting = "Hello") {
    return `${greeting}, ${name}!`;
  }
  
  console.log(greet("Jhon")); // "Hello, Alice!" argument pass না করাই default peramiter set হয়ছে ।
  console.log(greet("Jhon", "Good morning")); // "Good morning, Bob!" একটা peramiter এর default value undifined set করা থাকে, আমরা যদি function এর argument set না করি তাইলে peramiter এর defalut value undifined set করে দেয় । 

  
//3.
function sum(a,b,c,...args) {
    sum(1,2,3,...args)
  console.log(sum(1, 2, 3)) // 6
    console.log(sum(10, 20, 30, 40)) // 100   rest peramiter use করে আমরা array হিসেবে অসংখ্য argument pass করতে পারি ।
    console.log(sum(5)) // 5 
  }

  

//4.
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [7, 8, 9];

const mergedArray = [...array1, ...array2, ...array3] // concat
console.log(mergedArray); // [1, 2, 3, 4, 5, 6, 7, 8, 9]


//5. 
const name = "John";
const JhonAge = 30;



const person = {
  name,
  JhonAge,
  greet: function() {
    return `Hi, I'm ${this.name} and I'm ${this.JhonAge} years old.`;
  }
};

console.log(person.greet()); // "Hi, I'm John and I'm 30 years old."


//6.
const fruits = ["apple", "banana", "cherry"];

for(store of fruits){
  console.log(store)
};




//7.
const Name = "Alice";
const age = 25;


const message = `My name is ${Name} and I'm ${age} years old`;
console.log(message); 


//8.
const students = [
    { name: "Alice", grade: 90 },
    { name: "Bob", grade: 85 },
    { name: "Charlie", grade: 92 }
  ];
for (student of students)  {
  console.log(`Name: ${student.name} , grade: ${student.grade} `)
}



//9.
const nestedArrays = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
for (store of nestedArrays){
    console.log(store)
    let sum=0;
    for(arrays of store){
        sum+= arrays;

    }
    console.log(sum)
}

//10.
const a = 5;
const b = 10;


const result = `The sum of ${a} and ${b} is ${a+b}`;
console.log(result); 