function generateRandomNumbers(count, min, max) {
    let numbers = [];
    for (let i = 0; i < count; i++) {
        numbers.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return numbers;
}

function findSecondLargestAndSmallest(arr) {
    let largest = -Infinity, secondLargest = -Infinity;
    let smallest = Infinity, secondSmallest = Infinity;

    for (let num of arr) {
        if (num > largest) {
            secondLargest = largest;
            largest = num;
        } else if (num > secondLargest && num !== largest) {
            secondLargest = num;
        }

        if (num < smallest) {
            secondSmallest = smallest;
            smallest = num;
        } else if (num < secondSmallest && num !== smallest) {
            secondSmallest = num;
        }
    }

    return { secondLargest, secondSmallest };
}

function findSecondLargestAndSmallestSorted(arr) {
    let sortedArr = [...arr].sort((a, b) => a - b); 
    return {
        secondSmallest: sortedArr[1],
        secondLargest: sortedArr[sortedArr.length - 2]
    };
}

const randomNumbers = generateRandomNumbers(10, 100, 999);
console.log("Generated Numbers:", randomNumbers);

const { secondLargest, secondSmallest } = findSecondLargestAndSmallest(randomNumbers);
console.log("Without Sorting -> Second Smallest:", secondSmallest, "Second Largest:", secondLargest);

const sortedResults = findSecondLargestAndSmallestSorted(randomNumbers);
console.log("After Sorting -> Second Smallest:", sortedResults.secondSmallest, "Second Largest:", sortedResults.secondLargest);
