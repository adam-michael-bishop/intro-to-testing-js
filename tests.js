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
})

