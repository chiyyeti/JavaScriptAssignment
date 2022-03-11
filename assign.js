// Fibonacci
console.log("-------------Fibonacci-------------------");
function fibo(n) {
    var a=0;
    var b=1;
    var result;

    for(let i=0 ; i<n ; i++){
        result=a + b;
        a=b;
        b=result;
        console.log(a);
    }
    
}

fibo(5)

// Prime Number
console.log("----------------Prime Number-------------------");

function prime(n) {
    if(n<2){
        return `${n} is not prime`
    }
    for(let i=2 ; i<=n ; i++){
        if(n%i===0){
            return `${n} is not prime`
        }else{
            return `${n} is prime`
        }
    }
    
}

console.log(prime(15));

// Random Number
console.log(("----------------Random Number-----------------"));

let min=1;
let max=50;

if(min>=1 && max<=50){
    console.log( 'Random number between 1 and 50 ', Math.round(Math.random()*50) );
}else{
    console.log(' Enter Number  between 1 and 50');
}

// Factorial
console.log("-------------Factorial--------------------");

function factorial(n){
    if((n===0) ||( n===1)){
        return 1 ;
    }else{
      return  n*factorial(n-1)
    }
}

console.log(  'Factorial  of given number is',factorial(5));


// Bubble Sort
console.log("---------------Bubble Sort---------------");
    //1
var arr2=[44,464,94,61,66,62]

const bubble1=(function (arr2) {
    


    for (let i = 0; i < arr2.length; i++) {
       for (let j = 0; j < arr2.length; j++) {
      
      if(arr2[j]>arr2[j+1]){

        let change=arr2[j]
        arr2[j]=arr2[j+1]
        arr2[j+1]=change
      }
  }
      
    } 
    return arr2;
})
console.log(bubble1(arr2));
//  2

array1=[121,411,41,346,44,3,7,545,64,]

const bubble=array1=>{

    for (let i = 0; i < array1.length; i++) {
       for (let j = 0; j < array1.length; j++) {
      
      if(array1[j]>array1[j+1]){

        let big=array1[j]
        array1[j]=array1[j+1]
        array1[j+1]=big
      }
  }
      
    } 
    return array1;
};
console.log(bubble(array1));

// Named function
const arr = [23, 43, 87, 35, 3, 51, 96, 5];

function bubbleSort(arr) {
    var flag= false;

    for (var i = 0; i < arr.length; i++) {
        

        for (var j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                flag = true;
            }
        }

        if (flag === false) {
            break;
        }
    }

    console.log(arr);
}
bubbleSort(arr);


// Largest Number
console.log("------------Largest Number in Array-----------");
let arr1=[216,12,565,44,655,451,545]
let large = arr1[0]
for(let i=0;i<arr1.length;i++){
    if(large<arr1[i]){
        large=arr1[i]
    }
}
console.log(arr1);
console.log(large);
// Second largest Number
console.log('------------Second largest Number--------------');

const arr3=[10,44,64,46,61,65,46]

var max1=arr3[0];
var max2=arr3[0];


for (let i = 0; i < arr3.length; i++){

if(arr3[i] > max1){
    max2=max1
    max1=arr3[i];

}else if( arr3[i]> max2)
{
    max2=arr3[i]
}

}
console.log(max2);

// Destructuring
console.log("-------------Destructuring------------------");

const person={
    firstName:'Ajit',
    lastName:'k',
    age: 10,
    hobbies:['cricket','singing'],
    address:{
        state:'Karnataka',
        pincode:560068,
        city:'Bangalore'

    }
}

// Object Destructuring   (ES -6)


const {firstName,lastName}=person
console.log('firstName =',firstName);
console.log('lastName =',lastName);


// multi level destructure

const {hobbies,address:{state,city}}=person
console.log('hobbies =',hobbies);
console.log('state =',state);
console.log('city =',city);

console.log('------ Array destructuring-------------');


//   Array destructuring

const fruits=['Apple','PineApple','Orange','Banana']



const [fruit1,fruit2]= fruits
console.log(fruit1);
console.log(fruit2);


const [fruita,,fruitc]=fruits
console.log(fruita);
console.log(fruitc);


console.log('--------------Loops-----------------');
// for loop
var numbers=[10,20,30,40]



for (let i = 0; i < numbers.length; i++) {
        console.log(numbers[i]);
    
}

// for of loop
for (var number of numbers) {
    console.log(number);     
}


var fruits1=['Apple','Pine Apple','Green Apple','Custard Apple ','Mango']

for (var fruit of fruits1) {
    console.log(fruit);       
    
}

// for in loop

console.log('----for in loop with Object--------');
var person1={
    firstName:'Gana',
    lastName:'Naidu',
    age:24,
    gender:'male'
}

for(var key in person1){
    console.log(`${key} - ${person1[key]}`);
}


// loops in Object

var cars=[
    {
        brand:'BMW',
        color:'Black',
        price:1500000,
        type:'sports'
    },
    {
        brand:'Toyoto',
        color:'Red',
        price:8000000,
        type:'luxury'
    },
    {
        brand:'Maruti',
        color:'Red',
        price:500000,
        type:'Economy'
    },
]

console.log('---------for loop--------');

for (let i = 0; i < cars.length; i++) {
    
   if(cars[i].price > 5){
       console.log(cars[i].price);
       console.log(cars[i].brand);
       console.log(cars[i].type);
       console.log(cars[i].color);
   }
}

console.log('---------for of loop----------------');

for (var i of cars) {
        
    if(i.type === 'sports'  &&  i.price >5){
        console.log(i.price);
        console.log(i.brand);
        console.log(i.type);
        console.log(i.color);
    }
    
}

console.log('------for in loop-------');
for (var index in cars) {
   if(cars[index].brand.length > 5 && cars[index].price >10){
   console.log(cars[index].brand);
   console.log(cars[index].price);
   console.log(cars[index].type);
   console.log(cars[index].color);
   }
}




console.log("----------------Even  and  Odd-----------");
 const arr5=[45,1,55,41,462,44,66,122]

let evens=[]
let odds=[]
for(let i=0;i<arr5.length;i++){
    if(arr5[i]%2===0){
        evens.push(arr5[i])
    }else{
        odds.push(arr5[i])
    }
}
console.log(evens);
console.log(odds);
// using filter method even and odd
evenNumber=arr5.filter((ele)=>{
    return ele%2===0
})
console.log(evenNumber);
oddNumber=arr5.filter((ele)=>{
    return ele%2===1
})
console.log(oddNumber);





console.log("-------------Pattern-------------------");


function pattern() {
    var n = "*"
    for (var i = 1; i <= 4; i++) {
      console.log(n.repeat(i));
    }
  }

console.log("----------------Generate ID--------------------");



function gen() {
    const jobs = ['DEV', 'TES', 'PRM', 'TCL']
    const job = Math.floor(Math.random() * jobs.length)
    let ran = Math.floor(Math.random() * 253)
  
    let nameId = document.getElementById("generateIds").value
  
    let nameValue = ''
    for (let i = 0; i < 3; i++) {
      nameValue += nameId[i]
    }
    document.getElementById("para").innerText = nameValue.toUpperCase() + "" + jobs[job] + ran
  
  }

  console.log("--------------post-----------");
  const url = 'https://jsonplaceholder.typicode.com/posts'
const fetchPosts = () => {
    fetch(url).then((response) => {
        console.log(response);
        return response.json()
    }).then((data) => {
        console.log(data);
        let postsData = '<ul>'
        data.map((post) => {
            // Templete literals (ES6)
            postsData += `<li>${post.title}`
        })
        postsData += '</ul>'
        const divElement = document.getElementById('users')
        divElement.innerHTML = postsData
        console.log('postsData', postsData);
    }).catch(err => {
        console.log(err);
        console.error(err.message);
    })
}
fetchPosts()

function savePost(){
    const post = {
        userId: 1000,
        title: 'Javascript end game',
        body: 'Javascript Javascript'
    }
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(post),
        headers:{
            'Content-Type' : 'application/json'
        }
    }).then((response) => {
        console.log(response);
        return response.json()
    }).then(data => {
        console.log('Added post', data);
    })
}   

console.log("------------Change color--------------------");

function changeme(color) {
    document.body.style.background = color
  }
  //change color by taking input value
  function changecol() {
    let co = document.getElementById('changecolorofcolor').value;
    document.body.style.backgroundColor = co;
    document.getElementById("changecolor").value = co
    document.body.style.color = "white"
  }
  
  console.log("-----------------Palindrome-------------");
  // program to check if the string is palindrome or not

function checkPalindrome(str) {

    // find the length of a string
    const len = string.length;

    // loop through half of the string
    for (let i = 0; i < len / 2; i++) {

        // check if first and last string are same
        if (string[i] !== string[len - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}

// take input
const string = prompt('Enter a string: ');

// call the function
const value = checkPalindrome(string);

console.log(value);