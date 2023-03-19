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

console.log("hey there")

setTimeout(()=>{
    console.log("setTimeOut Called")
},2000)

console.log(".....")
for(var i=0; i<=50; i++){
    console.log("for loop is continuing"+ " "+ i)
    i++;

}


 