const args = process.argv.slice(2);
const day = parseInt(args[0]);
const month = parseInt(args[1]);

let isInRange = false;

if ((month === 3 && day >= 20) || (month > 3 && month < 6) || (month === 6 && day <= 20)) {
    isInRange = true;
} else {
    isInRange = false;
}

console.log(isInRange);