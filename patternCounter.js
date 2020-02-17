const patternCounter = (string, pattern, count = 0) => {
    if (string.length < 1)
        return count;
    if (string.slice(0, pattern.length) === pattern) {
        count++;
        return patternCounter(string.slice(pattern.length - 1), pattern, count);
    } else {
        return patternCounter(string.slice(1), pattern, count);
    }
}

console.log(patternCounter('I want to go to the beach oooooorrow.', 'ooo'));