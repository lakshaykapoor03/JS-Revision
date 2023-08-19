// let arr1 = ["item1", "item2", "item3", "item4"]
// let arr2 = arr1;

// console.log(arr2)

// let sum=0
// let num=9;

// for(i=0; i<=num; i++){
//     sum= sum+i;

// }

// console.log(sum)

// let cities= ["delhi", "faridabad", "gurgaon", "noida"]

// let [city1, city2, ...restCities]= cities

// console.log(restCities[restCities.length-1]

// const info={
//     name:"lakshay",
//     age : "22",
//     city:"faridabad"
// }

// for (let key in info){
//     console.log(key)
// }

// for (let key in info){
//     console.log(info[key])
// }

// console.log(Object.keys(info))

// console.log(Object.keys(info))

// const newArr=[..."abc"]
// console.log(newArr)

// const newObj = {..."abc"}
// console.log(newObj, newObj[0])

// const numbers = [1, 2, 3, 8, 10, 4, 5, 6]
// const numbers2 = [11, 22, 33, 88, 100, 44, 55, 66]

// const newArr= [...numbers, ...numbers2]
// console.log(newArr)

// numbers.forEach((number)=>{
//  console.log(number%2==0)
//  }
//  )

//  const newArr=numbers.filter((n,i)=> n%2==0)
//  console.log(newArr)

//  const result = numbers.map((number)=> number%2==0?"true":"false")
//  console.log(result)

// const products= [
//     {productNmae:"abc", price:500},
//     {productNmae:"def", price:800},
//     {productNmae:"xyz", price:200},
// ]

// const lowToHigh =  [...products].sort((a,b)=> a.price - b.price)

// console.log(lowToHigh)

// const lowToHigh =  products.map((p)=>p.price)
//  lowToHigh.sort((a,b)=>a-b)

// console.log(lowToHigh)

// const obj = {
//     key1: "value1",
//     key2:"value2"
// }

// const obj2 = Object.assign({}, obj)

// obj.key3="value3"

// console.log(obj)
// console.log(obj2)

// const info = new Map()
// info.set (obj, {key3:"value3", key4:"value4"})
// console.log(info.get(obj).key4)

// function createUser(firstName, lastName, email, age, address ){
//     const user={};
//     user.firstName = firstName;
//     user.lastName = lastName;
//     user.email = email;
//     user.age = age;
//     user.address = address;
//     user.about = function(){
//         return `${this.firstName} and age is ${this.age}`
//     };
//     user.is18 = function(){
//         return this.age>=18;
//     }
//     return user;

// }

// console.log(createUser("lakshay", "kapoor", "kapoorlakshay70@gmail.com", 22, "faridabad"))

// const obj1 ={
//     key1:"value1",
//     key2:"value2"
// }

// const obj2= Object.create(obj1);

// obj2.key3 = "value3";

// console.log(obj2)
// console.log(obj2.__proto__)

// const calculatePower =(power)=> {
//     return((number)=> number**power)

// }

// const calc = calculatePower(2)
// console.log(calc(3))

// const myFunc = () => {
//   console.log("Hi, you called me");
//   return () => {
//     console.log("mai already ek baar call ho chuka hoon");
//     return (()=>console.log("mai 2 baar call ho chuka hoon"))
//   };
// };

//  const functionCall = myFunc()
//  functionCall()
//  functionCall

// defer is btter than async in script file
// defer is the most efficient method in script as bith scripting and parsing of the code take
//  place simultaneously and as the script loads it will wait for whole HTML to parse(load)
//  and willnot give any error whereas in async method if script loads firstit will start
//  executing an will not wait fr the whole HTML file to parse(load)and can give errorin many cases.

// Example :- <script  src="script.js" defer></script>

// const arr = [1, 2, 3, 4]
// const a = 1;
// console.log(arr+a)

// const rootNode = document.getRootNode()
// console.log(rootNode.childNodes[0])

// const todoList= document.querySelector(".todo-list")
// console.log(todoList)

// // todoList.firstElementChild.remove();

// const learnBtn = document.querySelectorAll(".btn-headline")
// console.log(learnBtn)

// learnBtn.forEach((btn)=>{
// btn.addEventListener("click",(e)=>{
//     console.log(e.target.innerText)

//    })

// })

// console.log("hey there")

// setTimeout(()=>{
//     console.log("setTimeOut Called")
// },2000)

// console.log(".....")
// for(var i=0; i<=50; i++){
//     console.log("for loop is continuing"+ " "+ i)
//     i++;

// }

// const getTwoNumbers = function (number1, number2, callback){
//     if (typeof number1 === "number" && typeof number2 === "number"){
//         callback(number1, number2)
//     }
//     else{
//         console.log("wrong data type")
//     }
// }

// const callBack = (num1, num2)=>{
//     console.log(num1 + num2)
// }

// getTwoNumbers(2,"4", callBack)
// console.log("scriptStart")

// const ingridients = ["salt", "spices", "mango", "rice", "apple"]

// const makeFriedRice = new Promise ((resolve, reject) =>{
//     if (ingridients.includes("salts") && ingridients.includes("spices") && ingridients.includes("rice")){
//         resolve ({value :"friedRice"})
//     }
//     else {
//         reject ("unable to make fried rice")
//     }
// }
// )
setTimeout(()=>{
    console.log("yo yho honey singh")
setTimeout(()=>{
        console.log("settime 2")
    }, 2000)
}, 1000)



// makeFriedRice.then(
//     (friedRice)=>{
//         console.log(friedRice)
//     }
// ). catch((error)=>{
//     console.log(error)
// })

// console.log("Script End")

// const firstName = fun();
// function fun(){
// let fname = "lakshay"

//     return (`my name is ${fname}`)
// }
// console.log(firstName)

// function multiply (a,b){
//     let answer= a;
//     for(i=1; i< b ; i++){
//         answer+=a

//     }
//     return(answer)
// }

// console.log(multiply(5,3))

// const promise = new Promise ((resolve, reject) => {
//     resolve(console.log("okay"));
//     reject(console.log("not okay"))
// })

// promise.then(
//     data => console.log(data)
// )

// const API= "https://jsonplaceholder.typicode.com/users"

// const res =  async()=>{
//     const data= await fetch(API)
//     const json = await data.json()
//     console.log(json)
// }
// console.log(res())

// const cart = ["shoes", "pants", "shirt", "kurta"];

// function createOrder(cart) {
//   const pr = new Promise((resolve, reject) => {
//     if (!validateCart(cart)) {
//       const error = new Error("cart not valid");
//       reject(error);
//     }
//     const orderId = "12345";
//     if (orderId) {
//       resolve(orderId);
//     }
//   });
//   return pr;
// }

// function proceedToPayment() {
//   return new Promise((resolve, reject) => {
//     resolve("payment successful");
//   });
// }

// function showOrderSummary() {
//   return new Promise((resolve, reject) => {
//     resolve("update the wallet");
//   });
// }

// function updateWallet() {
//   return new Promise((resolve, reject) => {
//     resolve("bal is 1000");
//   });
// }

// function validateCart() {
//   return true;
// }
// createOrder(cart)
//   .then((orderId) => {
//     console.log(orderId);
//     return proceedToPayment(orderId);
//   })
//   .then((info) => {
//     console.log(info);
//     return showOrderSummary(info);
//   })
//   .then((balance) => {
//     console.log(balance);
//     return updateWallet(balance);
//   })
//   .then((balance) => {
//     console.log(balance);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// a();
// function a() {
//    var b = 10;

//     console.log(b);
//    // 10
//     // Instead of printing undefined it prints 10, So somehow this a

//    }
//    console.log(a)

// let a=10;
// console.log(b)
// var b=2;
// // console.log(x)

// let bcdef =1;

// {console.log(bcdef)}

// console.log(x)

// let a = 20;
// function x() {
//  var a = 20;
// }

// console.log(a)

// function x() {
//     for(let i = 1; i<=5; i++){
//      setTimeout(function() {
//      console.log(i);
//      }, i*1000);
//      }
//      console.log("Namaste Javascript");
//     }
//     x();

// function x() {
//     for(var i = 1; i<=5; i++){
//     function close(i) {
//     setTimeout(function() {
//     console.log(i);
//     }, i*1000);

//     }
//     close(i);

//     console.log("Namaste Javascript");
//    }
// }
//    x();

function printStr(str, cb) {
  setTimeout(() => {
    console.log(str);
    cb();
  }, Math.floor(Math.random() * 100) + 1);
}

//    function printAll() {
//     printStr("A", () => {
//     printStr("B", () => {
//     printStr("C", () => {})
//     })
//     })
//    }
//    printAll()

//    getName()

//    var getName = ()=>{
//     console.log("Lakhsay")
//    }


// function callIt() {
//   for (var i = 1; i <= 5; i++) {
//     function enclosed(i) {
//       setTimeout(() => {
//         console.log(i);
//       }, i * 1000);
//     }
//    enclosed(i);

//   }
// }

// callIt();


  //  const arr = [1,2,3,4,5]
  //  const shallowCopy = [...arr]

  //  shallowCopy[2]=34

  //  console.log(arr)

    const originalArray = [1, 2, [3, 4]];
const shallowCopy = [...originalArray];

shallowCopy[2][1] = 5;

console.log(originalArray); // Output: [1, 2, [5, 4]]
console.log(shallowCopy); // Output: [1, 2, [5, 4]]


