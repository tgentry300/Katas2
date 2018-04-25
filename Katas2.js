// Number 1
function add(a, b) {
    var c = a + b
    return c
}

console.log(add(3, 3))

// Number 2
function multiply(a, b) {
    var c = 0
    var i
    for (i = 1; i <= a; i++) {
        c = add(c, b)

    }
    return c
}

console.log(multiply(8, 6))

// Number 3
function power(x, n) {
    let result = x
    for (let i = 1; i < n; i++) {
        result = multiply(result, x)
    }
    return result
}


console.log(power(2, 8))


// Number 4
function factorial(x){
    let result = x
    for(let i = 0; i < x; i++){
        x = add(x, -1)
        result = multiply(result, x)
    }
    return result
}
console.log(factorial(4))

// Number 5

function fibonacci(n){
    let result
    let y = 0
    let x = 1
    if(n == 0){
    return 0
    }
    else if(n == 1){
        return 1
    }
    for(let i = 2; i < n; i = add(i, 1)){
        result = add(x, y)
        y = x
        x = result
    }
    return result

}
console.log(fibonacci(0))