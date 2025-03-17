let money = 100;
const goal = 200;
let bets = 0;
let wins = 0;

while (money > 0 && money < goal) {
    bets++;
    let betResult = Math.random() < 0.5 ? -1 : 1;
    money += betResult;

    if (betResult === 1) {
        wins++;
    }
}

console.log(`Final Money: Rs. ${money}`);
console.log(`Total Bets Made: ${bets}`);
console.log(`Total Wins: ${wins}`);

if (money === 200) {
    console.log("Congratulations! You reached your goal.");
} else {
    console.log("Game over! You went broke.");
}
