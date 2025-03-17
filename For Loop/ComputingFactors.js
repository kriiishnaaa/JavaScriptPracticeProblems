const args = process.argv.slice(2);
let n = parseInt(args[0]);

if (isNaN(n) || n < 2) {
    console.log("Enter a valid number.");
} else {
    console.log(`Prime factors of ${n} are:`);

    while (n % 2 === 0) {
        console.log(2);
        n /= 2;
    }

    for (let i = 3; i <= Math.sqrt(n); i += 2) {
        while (n % i === 0) {
            console.log(i);
            n /= i;
        }
    }

    if (n > 2) {
        console.log(n);
    }
}
