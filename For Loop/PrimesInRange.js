const args = process.argv.slice(2);
const start = parseInt(args[0]);
const end = parseInt(args[1]);

if (isNaN(start) || isNaN(end) || start < 2 || end < 2 || start > end) {
    console.log("Enter a valid range.");
} else {
    console.log(`Prime numbers between ${start} and ${end}:`);
    
    for (let num = start; num <= end; num++) {
        let isPrime = true;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            console.log(num);
        }
    }
}
