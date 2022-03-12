console.log("------------ForEach---------------");

const arr = [15, 4, 45, 854];

arr.forEach((value) => {
  console.log(value);
});

arr.forEach(callback);

function callback(value, index, array) {
  console.log(value, index, array);
  //    console.log(arr);
}

// sum of the array
let sum = 0;
arr.forEach((value) => (sum += value));
console.log(sum); // 918

console.log(arr);

// even in the array

let even = [];
let odd = [];

arr.forEach((value) => {
  if (value % 2 === 0) {
    even.push(value);
  } else {
    odd.push(value);
  }
});
console.log(even);
console.log(odd);

// count number of elements in the array
const letters = ["a", "s", "d", "s", "t", "r", "d", "s"];
let count = {};
letters.forEach((value) => {
  if (count[value]) {
    count[value]++;
  } else {
    count[value] = 1;
  }
});
console.log(count); //{a: 1, s: 3, d: 2, t: 1, r: 1}

const letArray=[1,2,2,2,3,3,4,4,4,4,4,5,5]
let letCount={}
letArray.forEach((value)=>{
    if(letCount[value]){
        letCount[value]++
    }else{
        letCount[value]=1
    }
})

let data=JSON.stringify(letCount)

console.log(data); // {"1":1,"2":3,"3":2,"4":5,"5":2}

console.log("----------------Map--------------");

const users = [
  {
    first_name: "Mike",
    last_name: "Sheridan",
  },
  {
    first_name: "Tim",
    last_name: "Lee",
  },
  {
    first_name: "John",
    last_name: "Carte",
  },
];

const usersList = users.map(function (user) {
  return `${user.first_name} ${user.last_name}`; // template literals ES6
});
console.log(usersList);

arr1 = [12, 54, 848, 87, 5, 7];

let arrMap = arr1.map((value) => value * 2);
console.log(arrMap);

let evenMap = arr1.map((value) => value % 2 == 0);
console.log(evenMap); // return boolean values
console.log(arr1);

console.log("-----------------Remove Duplicate Elements-------------");
// 1 using Object.keys
let a = [12, 84, 45, 54, 55, 45, 84, 12, 46, 85];
let Obj = {};
for (let i of a) {
  Obj[i] = true;
}

let b = Object.keys(Obj);
// JSON.stringify(b)
console.log(b);

// 2 using set method

let bSet = new Set(a);

console.log(bSet);
console.log([...new Set(a)]);
// using filter  method

let filt = a.filter((ele, index, arr) => {
  return a.indexOf(ele) === index;
});
console.log(filt);

// using map

let mapArr = a.map((ele, index, arr) => {
  return a.ele != index;
});
console.log(mapArr);

console.log("---------Convert Array to Object--------------------");
// using for loop

const frnds=["gana","sunny","manu","suri","anil"]
console.log(frnds);  //  ['gana', 'sunny', 'manu', 'suri', 'anil']


let frndsObj={}
for(let i=0 ; i<frnds.length; i++){
    frndsObj[i]=frnds[i]
}
console.log(frndsObj); //  {0: 'gana', 1: 'sunny', 2: 'manu', 3: 'suri', 4: 'anil'}

// using Object.assign  (ES6) (used to copy the value of all enumurable porperties from the source to the target object)

// Object.assign accepts two parameters  1. target object 2. source object

const frndsObj1=Object.assign({},frnds)
console.log(frndsObj1); //  {0: 'gana', 1: 'sunny', 2: 'manu', 3: 'suri', 4: 'anil'}


// Using Spread Operator

let frndsObj2={...frnds};
console.log(frndsObj2);  //  {0: 'gana', 1: 'sunny', 2: 'manu', 3: 'suri', 4: 'anil'}

console.log(frnds);  // ['gana', 'sunny', 'manu', 'suri', 'anil']

console.log("--------------");


