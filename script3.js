// let arr = [
//   "A",
//   "B",
//   "C",
//   "D",
//   "E",
//   "F",
//   "G",
//   "H",
//   "I",
//   "J",
//   "K",
//   "L",
//   "M",
//   "N",
//   "O",
//   "P",
//   "Q",
//   "R",
//   "S",
//   "T",
//   "U",
//   "V",
//   "W",
//   "X",
//   "Y",
//   "Z",
//   "a",
//   "b",
//   "c",
//   "d",
//   "e",
//   "f",
//   "g",
//   "h",
//   "i",
//   "j",
//   "k",
//   "l",
//   "m",
//   "n",
//   "o",
//   "p",
//   "q",
//   "r",
//   "s",
//   "t",
//   "u",
//   "v",
//   "w",
//   "x",
//   "y",
//   "z",
//   1,
//   2,
//   3,
//   4,
//   5,
//   6,
//   7,
//   8,
//   9,
//   10,
// ];
// const inputCaptcha = document.getElementsByClassName("input");
// const reloadBtn = document.querySelector(".reload-btn");
// console.log(inputCaptcha);
// console.log(reloadBtn);


// function generateRandomCaptcha() {
//   for (let i = 0; i <= 5; i++) {
//     let val = arr[Math.floor(Math.random() * arr.length)];
  
//     inputCaptcha[0].innerText += `${val}`;
//   }
// }

// reloadBtn.addEventListener("click", (e) => {
//   inputCaptcha[0].innerText=" "
//   generateRandomCaptcha();
  

// });


// function callBack(){
// console.log("Callback called")
// }

// function call2(param){
//   console.log("callback function called below")
// param()
// }

// call2(callBack)

// const evaluate= eval("2+3")
// console.log(typeof (typeof String))

// let counter = 0;
// const fetchData = ()=>{
//   console.log("key pressed", counter++)
// }


// const debouncingFunction = ()=>{
//   let timer;
//   return ()=> {

//    clearTimeout(timer)
//    timer = setTimeout(()=>{
//       fetchData() 
//     }, 300)
//   }
// }

// const newFunc = debouncingFunction()

const arr = [1, 2, 3,4, 5]

const obj = {
  firstName: 'John',
  lastName: "Cena"
}

const obj2 = {
  firstname: "lakshay"
}

obj2.__proto__ = obj

// const grandParent=document.querySelector("#grandparent").addEventListener('click', ()=>console.log("grandparent clicked"),true)
// const parent=document.querySelector("#parent").addEventListener('click', ()=>console.log("parent clicked"), false)
// const child=document.querySelector("#child").addEventListener('click', ()=>console.log("child clicked"),false)
const button=document.querySelector("button").addEventListener('click', ()=>{window.location.href="/index.html"})

const arryy= [-5, -4, -2, 0, 2, 4, 6, 8]

function getSumZero(){
for(let number of arryy){
  for(let j=1; j<arryy.length; j++){
    if (number+arryy[j]==0){
      return [number, arryy[j]]
    }
  }
}
}

console.log(getSumZero(arryy))