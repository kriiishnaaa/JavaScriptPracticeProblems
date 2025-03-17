const args = process.argv.slice(2);
const n = parseInt(args[0]);

if (isNaN(n) || n <= 0) {
    console.log("Please enter a positive integer.");
} else {
    let harmonicNumber = 0;
    for (let i = 1; i <= n; i++) {
        harmonicNumber += 1 / i;
    }
    console.log(`The ${n}th harmonic number is: ${harmonicNumber}`);
}
