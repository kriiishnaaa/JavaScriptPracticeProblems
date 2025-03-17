function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function getPalindrome(num) {
    return parseInt(num.toString().split("").reverse().join(""));
}

function checkPrimeAndPalindrome(num) {
    if (!isPrime(num)) {
        console.log(`${num} is not a prime number.`);
        return;
    }

    let palindrome = getPalindrome(num);
    console.log(`${num} is a prime number. Its palindrome is ${palindrome}.`);

    if (isPrime(palindrome)) {
        console.log(`The palindrome ${palindrome} is also a prime number.`);
    } else {
        console.log(`The palindrome ${palindrome} is not a prime number.`);
    }
}

const num = 13;
checkPrimeAndPalindrome(num);
