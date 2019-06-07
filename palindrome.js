//WITHOUT RECURSION
const palindrome = (string) => {
    let array = string.split('');
    let arr1 = array.slice(0, Math.ceil(array.length / 2));
    let arr2 = array.slice(array.length / 2, array.length).reverse();

    return arr1.every((v, i) => {
        return v === arr2[i];
    });
};

//WITH RECURSION
const recPalindrome = (string) => {
    if (string.length < 2) 
        return true;
    if (string.charAt(0) === string.charAt(string.length - 1))
        return recPalindrome(string.slice(1, string.length - 1));
    return false;
}

//racecar
palindrome('racecar');
recPalindrome('racecar');