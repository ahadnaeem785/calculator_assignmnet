import inquirer from "inquirer";
import chalk from "chalk";
import figlet from "figlet";
figlet.textSync("Ahad's Calculator");
console.log(figlet.textSync("Ahad's Calculator"));
while (true) {
    // Here are we inputting the opration and input values
    let data = await inquirer.prompt([{
            name: "op",
            type: "list",
            message: chalk.blueBright("Enter Operator :"),
            choices: ["+", "-", "/", "*"]
        },
        {
            name: "num1",
            type: "number",
            message: chalk.blueBright("Enter first number: ")
        },
        {
            name: "num2",
            type: "number",
            message: chalk.blueBright("Enter second number: ")
        }]);
    // Here are we checking the input operation
    console.log(data.op);
    if (data.op == "+")
        console.log(chalk.yellowBright(`Addition of ${data.num1} and ${data.num2} is = ${data.num1 + data.num2}`));
    else if (data.op == "-")
        console.log(chalk.yellowBright(`Subtraction of ${data.num1} and ${data.num2} is = ${data.num1 - data.num2}`));
    else if (data.op == "*")
        console.log(chalk.yellowBright(`Multiplication of ${data.num1} and ${data.num2} is = ${data.num1 * data.num2}`));
    else if (data.op == "/")
        console.log(chalk.yellowBright(`Division of ${data.num1} and ${data.num2} is = ${data.num1 / data.num2}`));
    let decide = await inquirer.prompt([{
            name: "descison",
            type: "list",
            message: chalk.blueBright("Do you want to use again?"),
            choices: ["Yes", "No"]
        }]);
    if (decide.descison == "Yes")
        continue;
    else
        break;
}
console.log(chalk.bgRedBright.bold("Thankyou for using our calculator!"));
