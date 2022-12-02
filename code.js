//helloWorld function
function helloWorld(){
    return "Hello, World!";
}

function sayHello(name){
    if(typeof name === "undefined" || typeof name === "boolean"){
        return "Hello, World!";
    }
    return `Hello, ${name}!`;
}

function isFive(number){
    return number === 5;
}

function isEven(number){
    return number % 2 === 0;
}

function isVowel(char){
    const vowels = ["a", "e", "i", "o", "u"];
    if (typeof char !== "string"){
        return false;
    }
    for (const vowel of vowels){
        if (char.toLowerCase() === vowel){
            return true;
        }
    }
    return false;
};
