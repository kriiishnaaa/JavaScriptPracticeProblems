const args = process.argv.slice(2);
let n = parseInt(args[0]);

function printTable(num) {
    console.log(`Table of ${num}:`);
    for (let i = 1; i <= 10; i++) {
        console.log(num + " * " + i + " = " + num * i);
    }
    console.log("\n");
}

let i = 0;
while (i <= n) {
    printTable(Math.pow(2, i));
    i++;
}
