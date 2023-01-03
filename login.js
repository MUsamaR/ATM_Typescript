import inquirer from 'inquirer';
import { main } from './mainScreen.js';
import user from './user.js';
export async function login() {
    const userInput = await inquirer.prompt([
        {
            name: 'userId',
            message: 'Enter a User Name',
            type: 'input'
        },
        {
            name: 'password',
            message: 'Enter a Pin',
            type: 'password'
        }
    ]);
    let user1 = user.find(x => x.userName === userInput.userId && x.Pin === userInput.password);
    if (user1 === undefined) {
        console.log('Invalid User or Pin');
    }
    else {
        console.log('Welcome!!!');
        main();
    }
}
login();
