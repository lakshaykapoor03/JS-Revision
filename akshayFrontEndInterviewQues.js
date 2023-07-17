function curryOne(a){
    return function curryTwo(b){
        return function curryThree(c){
            return (a+b+c)
        }
    }
}

console.log(curryOne(1)(2)(3))