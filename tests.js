// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

describe('sayHello', function () {
    it('should be a defined function', function () {
        expect(typeof sayHello).toBe("function");
    });
    it('should return a string when called', function () {
        expect(typeof sayHello()).toBe("string");
    });
    it('should return a string of "Hello, Jane!" when called with sayHello("Jane")', function () {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it('should return a string of "Hello, Alex!" when called with sayHello("Alex")', function () {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it('should return a string of "Hello, Pat!" when called with sayHello("Pat")', function () {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    it('should return "Hello, World!" when called with sayHello()', function () {
        expect(sayHello()).toBe("Hello, World!");
    });
    it('should return "Hello, World!" when boolean true is passed as an arg', function () {
        expect(sayHello(true)).toBe("Hello, World!");
    });
    it('should return "Hello, World!" when boolean false is passed as an arg', function () {
        expect(sayHello(false)).toBe("Hello, World!");
    });
});

describe('isFive', function () {
    it('should be defined as a function', function () {
        expect(typeof isFive).toBe("function");
    });
    it('should return a boolean value', function () {
        expect(typeof isFive()).toBe("boolean");
    });
    it('should return true if passed a value of 5', function () {
        expect(isFive(5)).toBe(true);
    });
    it('should return false if passed a value of "5"', function () {
        expect(isFive("5")).toBe(false);
    });
});

describe('isEven', function () {
    it('should be defined as a function', function () {
        expect(typeof isEven).toBe("function");
    });
    it('should return a boolean given any input', function (){
        expect(typeof isEven()).toBe("boolean");
    });
    it('should return true for the input 2', function (){
        expect(isEven(2)).toBe(true);
    });
    it('returns true when executed with isEven(-4)', function (){
        expect(isEven(-4)).toBe(true);
    });
    it('returns false when executed with isEven(3)', function (){
        expect(isEven(3)).toBe(false);
    });
    it('returns true when executed with isEven("banana")', function (){
        expect(isEven("banana")).toBe(false);
    });
    it('returns true when called with isEven("8")', function (){
        expect(isEven("8")).toBe(true);
    });
    it('returns true when called with isEven("8")', function (){
        expect(isEven("8")).toBe(true);
    });
    it('returns false when called with isEven(Infinity)', function (){
        expect(isEven(Infinity)).toBe(false);
    });
    it('returns false when called with a boolean input isEven(true)', function (){
        expect(isEven(true)).toBe(false);
    });
    it('returns false when called without an argument like isEven()', function (){
        expect(isEven()).toBe(false);
    });
});

describe('isVowel', function (){
    it('should be defined as a function', function (){
        expect(typeof isVowel).toBe("function");
    });
    it('should always return a boolean', function (){
        expect(typeof isVowel()).toBe("boolean");
    });
    it('should return true for isVowel("a")', function (){
        expect(isVowel("a")).toBe(true);
    });
    it('should return true for isVowel("A")', function (){
        expect(isVowel("A")).toBe(true);
    });
    it('should return true for isVowel("e")', function (){
        expect(isVowel("e")).toBe(true);
    });
    it('should return true for isVowel("i")', function (){
        expect(isVowel("i")).toBe(true);
    });
    it('should return true for isVowel("o")', function (){
        expect(isVowel("o")).toBe(true);
    });
    it('should return true for isVowel("u")', function (){
        expect(isVowel("u")).toBe(true);
    });
    it('should return false for isVowel("y")', function (){
        expect(isVowel("y")).toBe(false);
    });
    it('should return false for isVowel(true)', function (){
        expect(isVowel(true)).toBe(false);
    });
    it('should return false for isVowel(false)', function (){
        expect(isVowel(false)).toBe(false);
    });
    it('should return false for isVowel("banana")', function (){
        expect(isVowel("banana")).toBe(false);
    });
    it('should return false for isVowel()', function (){
        expect(isVowel()).toBe(false);
    });
});

describe('add', function (){
    it('should be defined as a function', function (){
        expect(typeof add).toBe("function");
    });
    it('should return 5 for add(2, 3)', function (){
        expect(add(2, 3)).toBe(5);
    });
    it('should return -12 for add(-3, -9)', function (){
        expect(add(-3, -9)).toBe(-12);
    });
    it('should return 11 for add("5", 6)', function (){
        expect(add("5", 6)).toBe(11);
    });
    it('should return 6 for add("-4", "10")', function (){
        expect(add("-4", "10")).toBe(6);
    });
    it('should return NaN for add("banana", "split")', function (){
        expect(add("banana", "split")).toBeNaN();
    });
    it('should return NaN for add(2, "apples")', function (){
        expect(add(2, "apples")).toBeNaN();
    });
    it('should return NaN for add()', function (){
        expect(add()).toBeNaN();
    });
})

