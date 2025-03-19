function generateBirthMonths(numPeople) {
    let birthMonthMap = {};

    for (let i = 0; i < numPeople; i++) {
        let birthMonth = Math.floor(Math.random() * 12) + 1;

        if (!birthMonthMap[birthMonth]) {
            birthMonthMap[birthMonth] = [];
        }

        birthMonthMap[birthMonth].push(`Person ${i + 1}`);
    }

    return birthMonthMap;
}

function printBirthMonthGroups(birthMonthMap) {
    console.log("Individuals grouped by birth month:");
    for (let month in birthMonthMap) {
        console.log(`Month ${month}: ${birthMonthMap[month].join(", ")}`);
    }
}

const birthMonthGroups = generateBirthMonths(50);
printBirthMonthGroups(birthMonthGroups);
