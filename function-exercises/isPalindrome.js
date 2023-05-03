function isPalindrome(word) {
    let reverseWord = "";
    for(let i = word.length - 1; i >= 0; i--) {
        reverseWord += word[i];
    }
    if(word === reverseWord) {
        return true;
    }
    else {
        return false;
    }
}

console.log(isPalindrome('testing'));
console.log(isPalindrome('tacocat'));
console.log(isPalindrome('hannah'));
console.log(isPalindrome('robert'));
