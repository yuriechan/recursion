//WITH PARAMETER
const fizzBuzz = (num) => {
    if (num > 100)
        return
    else if (num % 3 === 0 && num % 5 === 0) {
        console.log('FizzBuzz')
        return fizzBuzz(num + 1)
    }
    else if (num % 3 === 0) {
        console.log('Fizz')
        return fizzBuzz(num + 1)
    }
    else if (num % 5 === 0) {
        console.log('Buzz')
        return fizzBuzz(num + 1)
    }
    else {
        console.log(num)
        return fizzBuzz(num + 1)
    }
}

//WITHOUT PARAMETER && SELF-INVOKING
const fizzBuzz2 = () => {
    let start = 1
    let end = 100

    ;(function recurse(num = start) {
        if (num > end)
        return
    else if (num % 3 === 0 && num % 5 === 0) {
        console.log('FizzBuzz')
        return recurse(num + 1)
    }
    else if (num % 3 === 0) {
        console.log('Fizz')
        return recurse(num + 1)
    }
    else if (num % 5 === 0) {
        console.log('Buzz')
        return recurse(num + 1)
    }
    else {
        console.log(num)
        return recurse(num + 1)
    }
    })()

    return
}

fizzBuzz(1)
fizzBuzz2()