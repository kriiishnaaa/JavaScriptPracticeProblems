const args = process.argv.slice(2);
const n = parseInt(args[0]);

if (isNaN(n) || n < 2) {
    console.log("Enter a number greater than or equal to 2.");
} else {
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            isPrime = false;
            break;
        }
    }
    console.log(isPrime ? `${n} is a Prime Number.` : `${n} is not a Prime Number.`);
}
