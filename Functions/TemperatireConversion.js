const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function celsiusToFahrenheit(degC) {
    return (degC * 9 / 5) + 32;
}

function fahrenheitToCelsius(degF) {
    return (degF - 32) * 5 / 9;
}

console.log("Temperature Conversion:");
console.log("1. Celsius to Fahrenheit");
console.log("2. Fahrenheit to Celsius");

rl.question("Enter your choice (1 or 2): ", function(choice) {
    rl.question("Enter temperature: ", function(temp) {
        temp = parseFloat(temp);
        let convertedTemp;

        switch (choice) {
            case "1":
                if (temp < 0 || temp > 100) {
                    console.log("Please enter a temperature between 0°C and 100°C.");
                } else {
                    convertedTemp = celsiusToFahrenheit(temp);
                    console.log(`${temp}°C is ${convertedTemp.toFixed(2)}°F`);
                }
                break;
            case "2":
                if (temp < 32 || temp > 212) {
                    console.log("Please enter a temperature between 32°F and 212°F.");
                } else {
                    convertedTemp = fahrenheitToCelsius(temp);
                    console.log(`${temp}°F is ${convertedTemp.toFixed(2)}°C`);
                }
                break;
            default:
                console.log("Invalid choice. Please enter 1 or 2.");
        }

        rl.close();
    });
});
