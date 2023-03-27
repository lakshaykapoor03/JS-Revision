let arr = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
];
const inputCaptcha = document.getElementsByClassName("input");
const reloadBtn = document.querySelector(".reload-btn");
console.log(inputCaptcha);
console.log(reloadBtn);


function generateRandomCaptcha() {
  for (let i = 0; i <= 5; i++) {
    let val = arr[Math.floor(Math.random() * arr.length)];
  
    inputCaptcha[0].innerText += `${val}`;
  }
}

reloadBtn.addEventListener("click", (e) => {
  inputCaptcha[0].innerText=" "
  generateRandomCaptcha();
  

});


function callBack(){
console.log("Callback called")
}

function call2(param){
  console.log("callback function called below")
param()
}

call2(callBack)

const evaluate= eval("2+3")
console.log(typeof (typeof String))
