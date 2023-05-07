// const array = [2, 4, 6, 8, 10];

// array.forEach((arr, i) => {
//   array[i] = arr + 1;
// });

// console.log(array);

// let students = [
//   { name: "Piyush", rollNuber: 31, marks: 80 },
//   { name: "Jenny", rollNuber: 15, marks: 69 },
//   { name: "Kaushal", rollNuber: 16, marks: 35 },
//   { name: "Dilpreet", rollNuber: 7, marks: 55 },
// ];

// const totalMarks = students
//   .map((stu) => {
//     stu.marks < 60 ? (stu.marks = stu.marks + 20) : stu.marks;
//     return stu;
//   })
//   .filter((stu) => stu.marks > 60)
//   .reduce((acc, curr) => acc + curr.marks,0);

// console.log(totalMarks);

// Q. First class Function

// function square(num){
//   console.log(num*num)
// }

// function displaySquare(fn){
// return fn();
// }

// displaySquare(square(5))

//Q IIFE

// (function (x){
//   return (function (y){
//     console.log(x)
//   })(2)
// })(1)

// Q. Nested function example

// let name="lakshay"

// function getScore(){
// let num1=10;
// let num2=20;

// function add(){
//   return name + " "+ "scored"+ " " + (num1 + num2)
// }

// return add();
// }

// console.log(getScore())

//Q. Output based question on function scope

// for (let i = 0; i <5; i++){
//   setTimeout (function(){
//     console.log(i, Math.random())
//   }, i*1000)
// }

// for (var i = 0; i <5; i++){
//   setTimeout (function(){
//     console.log(i, Math.random())
//   }, i*1000)
// }

// Q.
//function fn(x,y,...num){
// console.log(x,y)
// }
// fn(1,2,4,5, 7,8)

//Q Callback function

// const add = function (){

//   console.log(5+5)
// }

// const callback = function(func){
// return func;
// }

// callback(add())

// function createBase(num){
//    function addSix(innerNum){
//     console.log(num + innerNum) ;

//   }
//   return addSix;
// }

// var addSix = createBase(6)
// addSix(10)

//Q. Closure Time optimization

// function find(){

//   let a = [];
//   for(let i=0; i<1000000; i++){
//     a[i]= i*i
//   }
//  return function(index){
//     console.log(a[index])
//   }

// }

// const closure = find()

// console.time("6")
// closure(6)
// console.timeEnd("6")

//Q. Closure setTimeOut

//With Closure it will print 1, 2, 3
// function ab(){

//   for(var i=0; i<3; i++){

//   function inner(i){
//   setTimeout(function log(){
//     console.log(i)
//   }, i*1000)
// }
//  inner(i)
// }
// }

// ab()()

//Without Closure it will print 3, 3, 3
// function a(){

//   for(var i=0; i<3; i++){

//   setTimeout(function log(){
//     console.log(i)
//   }, i*1000)

// }
// }

// a()

//Q Private counter usung Closure
//Doubt

// function counter() {
//   var counter1 = 0;

//   function add(increment) {
//     counter1 += increment;
//   }

//   function result() {
//    return  "Counter=" + counter1;
//   }

//   return {
//     add,
//     result,
//   };
// }

// const c = counter();
// c.add(5);
// c.add(20);

// console.log(c.result());

//Q. Make this function run only once

// let view;
// let count = 0

// function liketheVideo(){
//   view="Lakshay Kapoor"
//   ++count;

//   if(count>1){
//     console.log("function has already been called")
//   }
//   else {
//     console.log("Hey there" , view);
//   }
 
// }

// liketheVideo()
// liketheVideo()
// liketheVideo()
// liketheVideo()
// liketheVideo()

// More generic function to call once

// function sum(a){
//   return function(b){
//     return function(c){
//      return(a + b + c);
//   }
// }
// }

// console.log(sum(2)(4)(2))

//Currying question
// function evaluate(operation){
//   return function(a){
//     return function(b){
//       if (operation ==="sum") return a + b
//       if (operation ==="subtract") return a - b
//       if (operation ==="multiply") return a * b
//       if (operation ==="divide") return a / b
//     }
//   }
// }

// console.log(evaluate("divide")(5)(2))

// Q. Infinite Currying

// function infinite(a){
//   return function(b){
//     if(b) return infinite(a+b)
//     return a;
//   }
// }

// console.log(infinite(2)(3)(5)())

//Question Diff btw Currying and partial apllication

//console.log(evaluate(1)(2,3)) - partial apllication
//console.log(evaluate(1)(2)(3)) - Currying

function updateElementText(){
  
}