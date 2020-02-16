//Write a function called binarySearch that uses a recursive binary search to find a number within an array.
//Binary search is a method of taking an area and splitting it in halves repeatedly until the target is found.
//For example, binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4) would check if the target, 4, is in the top half
//or lower half of the function, then return the half it is in and then check [1, 2, 3, 4, 5] and then split
//in half again until 4 is found and returned.


// function binarySearch(arr, target) {
//     let index = Math.round(arr.length/2)
//     let middle = arr[index - 1]
//     if (middle === target || middle === undefined) {
//         return (middle) ? middle : false
//     } else if (middle > target) {
//         return binarySearch(arr.slice(0, index - 1), target)
//     } else {
//         return binarySearch(arr.slice(index), target)
//     }
// }

//[First Answer]
// good) it's working as expected
// bad) 1. middle will always be undefined when arr is empty
//      2. If answer exists in the first element of array, it will still have to do a binary search
// improvements to make) 
// 1. What we care about 
// (a) When do we need to do a binary search ?
// -> if the target is in the 0'th index, no need to do a binary search (lucky!)
// -> if the target was not in the 0'th index, and array holds more than one element.
// -> if the target was not in the 0'th index, and array hold only one element, no need! 

// 1. Create a condition of, 
// (A) When array holds one element && that one element is the target 
// (B) When array holds one element && that element was not the target => [END]
// (C) When array holds more than one element && first element in the array was not the target  
// (D) When target was greater than all the element in the array => [END]
// [Second solution]
function binarySearch(arr, target) {
    if (arr.length === 1 && arr[0] === target) return arr[0]
    if ((arr.length === 1 && arr[0] !== target) || target > arr[arr.length - 1]) return null
    if (arr.length > 1 && arr[0] !== target) {
        // binary search
        if (arr[Math.floor(arr.length/2)] === target) return arr[Math.floor(arr.length/2)]
        if (arr[Math.floor(arr.length/2)] > target) {
            return binarySearch(arr.splice(0, Math.floor(arr.length/2)), target)
        }
        if (arr[Math.floor(arr.length/2)] < target) {
            return binarySearch(arr.splice(Math.floor(arr.length/2)), target)
        }
    } else return null
}

let testArr = []
for (let i = 0; i < 101; i ++) {
    testArr.push(i)
}
// IN LINE 47) if add 1 to the index of middle element, it may access the undefined element of array in case the element was the last of array
// IN LINE 44) if minus 1 to the index of middle element, it is no problem bc index is counted from 0 in array
//console.log(binarySearch(testArr, 1010))

//fizzBuzz is a common interview problem but is usually done with a 'for loop' and not recursively.
//Create a recursive fizzBuzz. If you are unfamiliar, fizzBuzz loops through 1 - 100 and prints either
//'fizz', 'buzz', 'fizzbuzz', or the number itself.
//If a number is divisible by 3, print 'fizz'.
//If a number is divisible by 5, print 'buzz'.
//If a number is divisible by 3 and 5, print 'fizzbuzz'.
//Otherwise print the number itself.

// [First Answer]
// [good] The code works as expected.
// [bad] The runtime can result longer bc for any conditional, it needs to read the rest of the if-else, to call itself again.
// function fizzBuzz(num) {
//     while (num >= 1 && num <= 100) {
//         if (num % 3 === 0 && num % 5 === 0) {
//             console.log('fizzbuzz')
//         } else if (num % 3 === 0) {
//             console.log('fizz')
//         } else if (num % 5 === 0) {
//             console.log('buzz')
//         } else {
//             console.log(num)
//         }
//         num++
//         return fizzBuzz(num)
//     }
// }
// study what happens to recursion without 'return' keyword //
// A return statement passes a value back to the immediate caller of the call-frame. 
// Without the return statement, the function is making a loop. 
// [Improvements]
// 1) call the function within each conditional, to allow recusize function right after its job 
// 2) `return fizzBuzz(num++)` ==> will result in infinite loop. Why? -> num++, means, use the value num, THEN, increment
// 2.5) `return fizzBuzz(++num)` ==> will behave as expected -> ++num, means, increment the value of num, THEN, use the value
// [Second solution]
function fizzBuzz(num) {
    while (num >= 1 && num <= 100) {
        if (num % 3 === 0 && num % 5 === 0) {
            console.log('fizzbuzz')
            return fizzBuzz(++num)
        } else if (num % 3 === 0) {
            console.log('fizz')
            return fizzBuzz(++num)
        } else if (num % 5 === 0) {
            console.log('buzz')
            return fizzBuzz(++num)
        } else {
            console.log(num)
            return fizzBuzz(++num)
        }
    }
}
//console.log(fizzBuzz(1))




//Create a recursive funciton that will take any string and return a boolean based on whether or
//not it is a palindrome.
// [First solution]
// [good] It kind of looks good... using recursive function.
// [bad] 
// 1) This function always returns undefined, no matter what the input is.
// 2) Since palindrome() called inside palindrome() does not have a return statement, its parent will return undefined.
// 3) The first call gets a string type value, and the rest of the function call gets array value
// 3.5) let arr = Array.from(str), will not be needed after the first call 
// function palindrome(str) {
//     let arr = Array.from(str)
//     if (arr.length === 1) {
//         return true
//     } 
//     else {
//         if (arr[0] === arr[arr.length - 1]) {
//             arr.splice(0,1)
//             arr.splice(-1, 1)
//             palindrome(arr)  <===== YOU NEED RETURN STATEMENT 
//         } else {
//             return false
//         }
//     }
// }
// [Second solution]
// [Improvements]
// 1) added return statement, so the function in the call frame will pass value to have a recurive call
// 2) Use the input as it is, which is string type, bc selecting an element by index number is still possible with strings. (Do not convert it into an array) 
// function palindrome(str) {
//     if (str.length === 1) {
//         return true
//     } 
//     else {
//         if (str.charAt(0) === str.charAt(str.length - 1)) {
//             return palindrome(str.slice(1, str.length - 1))
//         } else {
//             return false
//         }
//     }
// }

// [Third solution]
// 1) is - else can be omitted, but still performe same conditional
function palindrome(str) {
    if (str.length === 1) 
        return true
    if (str.charAt(0) === str.charAt(str.length - 1)) 
        return palindrome(str.slice(1, str.length - 1))
    return false
}
console.log(palindrome('racear'))

//Create a function that takes two strings, the first being the test string and the second being the pattern to
//search for. The function should return how many times the pattern appears in the string.
//Ex. patternCounter('I want to drive tomorrow', 'to') ==> 2
function patternCounter() {

}

//Create a function that will turn the following object into a tree.
//HINT: You can check out Fun Fun Function's recursion video.
/* let testData = [
    {name: 'numbers', parent: null},
    {name: 'evens', parent: 'numbers'},
    {name: 'odds', parent: 'numbers'},
    {name: 2, parent: 'evens'},
    {name: 4, parent: 'evens'},
    {name: 6, parent: 'evens'},
    {name: 8, parent: 'evens'},
    {name: 10, parent: 'evens'},
    {name: 1, parent: 'odds'},
    {name: 3, parent: 'odds'},
    {name: 5, parent: 'odds'},
    {name: 7, parent: 'odds'},
    {name: 9, parent: 'odds'}
]; */

function treeMaker() {

}

//Create a function that will search a tree you make with the following data for any value
//and return that value if it exists.
//Ex. treeSearcher(tree, 'car') ==> 'car'

let testData = [
    {name: 'Uppercase', parent: null},
    {name: 'Lowercase', parent: null},
    {name: 'A', parent: 'Uppercase'},
    {name: 'a', parent: 'Lowercase'},
    {name: 'Apple', parent: 'A'},
    {name: 'apple', parent: 'a'},
    {name: 'Ant', parent: 'A'},
    {name: 'ant', parent: 'a'},
    {name: 'B', parent: 'Uppercase'},
    {name: 'b', parent: 'Lowercase'},
    {name: 'Big', parent: 'B'},
    {name: 'big', parent: 'b'},
    {name: 'Boring', parent: 'B'},
    {name: 'boring', parent: 'b'},
    {name: 'C', parent: 'Uppercase'},
    {name: 'c', parent: 'Lowercase'},
    {name: 'Cow', parent: 'C'},
    {name: 'cow', parent: 'c'},
    {name: 'Car', parent: 'C'},
    {name: 'car', parent: 'c'}
];

let tree = treeMaker(testData);
function treeSearcher() {
    
}