function isPalindrome(num) {
    let original = num.toString();
    let reversed = original.split("").reverse().join("");
    return original === reversed;
}

function checkPalindromes(num1, num2) {
    if (isPalindrome(num1) && isPalindrome(num2)) {
        console.log(`${num1} and ${num2} are both palindromes.`);
    } else if (isPalindrome(num1)) {
        console.log(`${num1} is a palindrome, but ${num2} is not.`);
    } else if (isPalindrome(num2)) {
        console.log(`${num2} is a palindrome, but ${num1} is not.`);
    } else {
        console.log(`Neither ${num1} nor ${num2} are palindromes.`);
    }
}

checkPalindromes(121, 454);
checkPalindromes(123, 787);
checkPalindromes(101, 202);
checkPalindromes(123, 456); 
