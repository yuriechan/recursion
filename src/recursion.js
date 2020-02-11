//Write a function called binarySearch that uses a recursive binary search to find a number within an array.
//Binary search is a method of taking an area and splitting it in halves repeatedly until the target is found.
//For example, binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4) would check if the target, 4, is in the top half
//or lower half of the function, then return the half it is in and then check [1, 2, 3, 4, 5] and then split
//in half again until 4 is found and returned.
function binarySearch(arr, target) {
    let index = Math.round(arr.length/2)
    let middle = arr[index - 1]
    if (middle === target || middle === undefined) {
        return (middle) ? middle : false
    } else if (middle > target) {
        return binarySearch(arr.slice(0, index - 1), target)
    } else {
        return binarySearch(arr.slice(index), target)
    }
}

//console.log(binarySearch([1, 2, 3, 5, 6, 7, 8, 9, 10], 4))

//fizzBuzz is a common interview problem but is usually done with a 'for loop' and not recursively.
//Create a recursive fizzBuzz. If you are unfamiliar, fizzBuzz loops through 1 - 100 and prints either
//'fizz', 'buzz', 'fizzbuzz', or the number itself.
//If a number is divisible by 3, print 'fizz'.
//If a number is divisible by 5, print 'buzz'.
//If a number is divisible by 3 and 5, print 'fizzbuzz'.
//Otherwise print the number itself.
function fizzBuzz(num) {
    while (num >= 1 && num <= 7) {
        if (num % 3 === 0 && num % 5 === 0) {
            console.log('fizzbuzz')
        } else if (num % 3 === 0) {
            console.log('fizz')
        } else if (num % 5 === 0) {
            console.log('buzz')
        } else {
            console.log(num)
        }
        num++
        return fizzBuzz(num)
    }
    return false
}
// study what happens to recursion without 'return' keyword //
console.log(fizzBuzz(1))




//Create a recursive funciton that will take any string and return a boolean based on whether or
//not it is a palindrome.
function palindrome() {

}

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