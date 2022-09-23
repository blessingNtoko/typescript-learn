"use strict";
// Basic Types
let id = 7;
let company = "Umbral";
let isPublished = true;
let x = "Hello";
let age;
let ids = [1, 2, 3, 4, 5];
let arr = [1, 2, "3", 4];
// Tuple
let person = [1, "Umbral", true];
// Tuple Array
let employee;
employee = [
    [1, "John"],
    [2, "Jane"],
    [3, "Han"],
    [4, "Chewie"],
];
// Union
let prodID = 22;
prodID = "22";
// Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
const user = {
    id: 1,
    name: "John"
};
// Type Assertion
let cid = "1";
// let customerID = <number>cid
let customerID = cid;
// Functions
function addNum(x, y) {
    return x + y;
}
function log(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: "John"
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
// Classes
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const john = new Person(1, "john");
// console.log(john.id);
console.log(john.register());
