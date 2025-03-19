function findRepeatedDigitsInRange(start, end) {
    let repeatedDigits = [];

    for (let i = start; i <= end; i++) {
        let strNum = i.toString();
        if (strNum.length === 2 && strNum[0] === strNum[1]) {
            repeatedDigits.push(i);
        }
    }

    return repeatedDigits;
}

const result = findRepeatedDigitsInRange(0, 100);
console.log("Numbers with repeated digits:", result);
