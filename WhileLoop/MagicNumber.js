const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Think of a number between 1 and 100, and I will guess it!");

let low = 1;
let high = 100;
let mid;

function findMagicNumber() {
    if (low > high) {
        console.log("Something went wrong! Please restart.");
        rl.close();
        return;
    }

    mid = Math.floor((low + high) / 2);
    rl.question(`Is your number ${mid}? (yes/no): `, function(answer) {
        if (answer.toLowerCase() === "yes") {
            console.log(`Great! Your magic number is ${mid}.`);
            rl.close();
        } else {
            rl.question(`Is your number greater than ${mid}? (yes/no): `, function(response) {
                if (response.toLowerCase() === "yes") {
                    low = mid + 1;
                } else {
                    high = mid - 1;
                }
                findMagicNumber();
            });
        }
    });
}

findMagicNumber();
