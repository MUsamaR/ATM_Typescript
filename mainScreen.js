import inquirer from 'inquirer';
async function another() {
    const anotherTransaction = await inquirer.prompt([
        {
            type: 'list',
            name: 'transaction',
            choices: ['Yes', 'No'],
            message: 'Do you want to do another transaction?',
        }
    ]);
    return anotherTransaction.transaction;
}
export async function main() {
    const userData = {
        // userId: userInput.userId,
        // password: userInput.password,
        amount: Math.floor(Math.random() * 100000 + 1000),
    };
    do {
        const selectOpt = await inquirer.prompt([
            {
                name: "options",
                message: 'Select an option',
                type: 'list',
                choices: ["cash withdrawal", "check balance", "exist"]
            }
        ]);
        if (selectOpt.options === "cash withdrawal") {
            console.log('Your Current Balance is: ' + userData.amount);
            const cashWithdrawal = await inquirer.prompt([
                {
                    name: 'amount',
                    message: 'Enter a amount',
                    type: 'number',
                }
            ]);
            if (cashWithdrawal.amount > userData.amount) {
                console.log("Invalid amount");
            }
            else {
                userData.amount -= cashWithdrawal.amount;
                console.log('Remaining Balance is: ' + userData.amount);
            }
        }
        else if (selectOpt.options === "check balance") {
            console.log('Your Current Balance is:' + userData.amount);
        }
        else if (selectOpt.options === "exist") {
            console.log('Thanks for transaction');
            break;
        }
        var anotherTransaction = await another();
    } while (anotherTransaction != 'No');
}
