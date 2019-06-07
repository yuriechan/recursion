describe('Recursion Exercise', function() {
    it('should have a function called binarySearch', () => {
        expect((typeof binarySearch)).toBe('function');
    });
    it('should be able to find and return a number within an array of numbers', () => {
        expect(binarySearch([1, 2, 3, 4, 5, 6], 4)).toBe(4);
    })

    it('should have a function called fizzBuzz', () => {
        expect((typeof fizzBuzz)).toBe('function');
    });

    it('should have a function called palindrome', () => {
        expect((typeof palindrome)).toBe('function');
    });

    it('should have a function called palindrome', () => {
        expect((typeof patternCounter)).toBe('function');
    });

    it('should have a function called palindrome', () => {
        expect((typeof treeMaker)).toBe('function');
    });

    it('should have a function called palindrome', () => {
        expect((typeof treeSearcher)).toBe('function');
    });
})