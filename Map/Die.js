function rollDie() {
    return Math.floor(Math.random() * 6) + 1;
}

function rollTillMaxCount(limit) {
    let rollCounts = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 };
    let maxReached = false;

    while (!maxReached) {
        let roll = rollDie();
        rollCounts[roll]++;

        if (rollCounts[roll] === limit) {
            maxReached = true;
        }
    }

    return rollCounts;
}

function findMinMax(rollCounts) {
    let maxNum = null, minNum = null;
    let maxCount = -Infinity, minCount = Infinity;

    for (let num in rollCounts) {
        if (rollCounts[num] > maxCount) {
            maxCount = rollCounts[num];
            maxNum = num;
        }
        if (rollCounts[num] < minCount) {
            minCount = rollCounts[num];
            minNum = num;
        }
    }

    return { maxNum, maxCount, minNum, minCount };
}

const rollResults = rollTillMaxCount(10);
console.log("Final Roll Counts:", rollResults);

const { maxNum, maxCount, minNum, minCount } = findMinMax(rollResults);
console.log(`Number ${maxNum} appeared the most (${maxCount} times)`);
console.log(`Number ${minNum} appeared the least (${minCount} times)`);
