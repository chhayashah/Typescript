let name: string = "chhaya shah"
console.log(name);

let num: number = 78
console.log(num)

// boolean
let isLoggedIn: boolean = true;
console.log(isLoggedIn);

let userName: undefined | string = undefined;
console.log(userName);

let user: null | string = null;
console.log(user);

let l: number[] = [10, 20, 30, 50]
console.log(l);
// l.push("hello")    :- give the error
l.push(70)


// array of string
let userList: String[] = ["chhaya", "kiran", "sukun"]
console.log(userList)

// any variable
let m: any[] = [10, 99, "hello", "neha"]
console.log(m)

// fix
let demo: [Number, String] = [10, "manish"]
console.log(demo)

// readonly
let color: readonly String[] = ["red", "blue"]
// console.log(color);

type User = {
    name: string;
    age: number;
};

let userObj: User = {
    name: "chhaya",
    age: 24
};

let userListnew: User[] = [
    {
        name: "prince",
        age: 12
    },
    {
        name: "demo",
        age: 13
    }
];

console.log(userListnew);


// unknown
let test: unknown = "chhaya shah"
if (typeof (test) == "string") {
    let t = test.toUpperCase()
    console.log(t);
}


// function
function addData(num1: number, num2: number): number{
    return num1 + num2
}

let outPut = addData(10, 20)
console.log(outPut)