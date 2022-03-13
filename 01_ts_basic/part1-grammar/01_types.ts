
// variable a‘s type is number
let a: number;
a = 100;

// string
let b: string;
b = "hello";
let b2: "hellob2";

// boolean
let c: boolean = false;
// type automatic infered
let d = true;
// d=123; // error, d is boolean

// function
function sum(a: number, b: number) {
    return a + b;
}
// limited return type is number
function sum2(a: number, b: number): number {
    return a + b;
}
sum(123, 456);

// union type
let union: number | string;
union = "123";
union = 123;
let union2: "123" | 456;
union2 = "123";
union2 = 456;
// union2 = "1"; //error

// any type
let any1: any;
any1 = 123;
any1 = "123";
any1 = function () { }
let any2; // if not assign any type, any2 is any type.


// unkonwn type
let unkonwn1: unknown;
unkonwn1 = 123;
unkonwn1 = true;

// any to other type
let str: string;
let any3: any = true;
str = any3; // any can be converted to other type
// str = unkonwn1; // but unkonwn type can't converted to other type
if (typeof unkonwn1 == "string") {
    str = unkonwn1;
}
// type assert
str = unkonwn1 as string;
str = <string>unkonwn1;

// void or nerver
// default return void type
function fn1() {
}
function fn2(): never {
    throw new Error("new error");
}

// {} for state attribute and type
// ?: types is optional, : type is required 
let obj1: { name: string, age: number, address?: string };
obj1 = { name: "hello", age: 18 };
// [name: type]: type, means exclude required property, 
// others conform this rules all can recived.
let obj2: { name: string, [propName: string]: any };
obj2 = { name: "hello", age: 18, address: "China" };


// function type
// constraint function structs (parameters and return type)
let fn3: (a: number, b: number) => number;
fn3 = function (n1, n2) {
    return n1 + n2;
}
fn3(1, 2)

// array type
// type[] or Array<type>
let arr: number[] = [1, 2, 3];
let arr2: Array<number>;
arr2 = [1, 2, 3];

// tuple: length is fixed's array
// [type, type, type]
let tuple1: [string, number];
tuple1 = ["hello", 123];

// enum
enum Gender {
    Female = 0,
    Male = 1,
}
let i: { name: string, gender: Gender };
i = {
    name: "jocker",
    gender: Gender.Male,
}

// & |
let j: { name: string } & { age: number };
j = {
    name: "123",
    age: 18
}

// type alias
type myType = 1 | 2 | 3 | 4;
let mt: myType;
let mt2: myType;


