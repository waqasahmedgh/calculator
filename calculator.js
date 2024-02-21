import inquirer from "inquirer";
function main() {
    inquirer
        .prompt([
        {
            type: "input",
            name: "num1",
            message: "Enter the First Number:",
            validate(value) {
                const valid = !isNaN(value);
                return valid || "Please enter Number Only";
            },
        },
        {
            type: "input",
            name: "num2",
            message: "Enter the Second Number:",
            validate(value) {
                const valid = !isNaN(value);
                return valid || "Please enter Number Only";
            },
        },
        {
            type: "list",
            name: "operation",
            choices: ["+", "-", "*", "/"],
            message: "Select Your Operation",
        },
    ])
        .then((answers) => {
        const { operation, num1, num2 } = answers;
        if (operation == "+") {
            sum(Number(num1), Number(num2));
        }
        else if (operation == "-") {
            subtract(Number(num1), Number(num2));
        }
        else if (operation == "*") {
            multiply(Number(num1), Number(num2));
        }
        else if (operation == "/") {
            division(Number(num1), Number(num2));
        }
        else {
            console.log("Invalid Operation");
        }
        // Use user feedback for... whatever!!
    })
        .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        }
        else {
            // Something else went wrong
        }
    });
}
function sum(num1, num2) {
    const result = num1 + num2;
    console.log("Sum is", result);
}
function subtract(num1, num2) {
    const result = num1 - num2;
    console.log("Subtraction is", result);
}
function multiply(num1, num2) {
    const result = num1 * num2;
    console.log("Multiply is", result);
}
function division(num1, num2) {
    const result = num1 / num2;
    console.log("Division is", result);
}
main();
