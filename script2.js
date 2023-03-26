var person1 = {firstName:"lakshay", lastName:"kapoor"}
var person2 = {firstName:"Rob", lastName:"Stark"}

function haveFood(food1, food2){
console.log(`${this.firstName} ${this.lastName} will have ${food1} and ${food2}`)
}

const getFood= haveFood.bind(person1, "pizza", "burger")
getFood()

const arr = [1, 2, 3, 4, 5]
 arr.slice(0,2)
console.log(arr)