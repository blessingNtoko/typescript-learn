// Basic Types
let id: number = 7;
let company: string = "Umbral";
let isPublished: boolean = true;
let x: any = "Hello";
let age: number;
let ids: number[] = [1, 2, 3, 4, 5];
let arr: any[] = [1, 2, "3", 4];

// Tuple
let person: [number, string, boolean] = [1, "Umbral", true];
// Tuple Array
let employee: [number, string][];
employee = [
    [1, "John"],
    [2, "Jane"],
    [3, "Han"],
    [4, "Chewie"],
];

// Union
let prodID: string | number = 22;
prodID = "22";

// Enum
enum Direction1 {
    Up = 1,
    Down,
    Left,
    Right
}

enum Direction2 {
    Up = "Up",
    Down = "Down",
    Left = "Left",
    Right = "Right"
}

// Objects

type User = {
    id: number,
    name: string
}

const user: User = {
    id: 1,
    name: "John"
}

// Type Assertion
let cid: any = "1";
// let customerID = <number>cid
let customerID = cid as number;

// Functions
function addNum(x: number, y: number): number {
    return x + y;
}

function log(message: string | number): void {
    console.log(message); 
}

// Interfaces
interface UserInterface {
    readonly id: number,
    name: string,
    age?: number
}

const user1: UserInterface = {
    id: 1,
    name: "John"
}

interface MathFunc {
    (x: number, y: number): number
}

const add: MathFunc = (x: number, y: number): number => x + y;