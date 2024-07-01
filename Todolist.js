import inquirer from 'inquirer';
let todos = [];
let condition = true;
while (condition) {
    let addTask = await inquirer.prompt([
        {
            name: 'todo',
            type: 'input',
            message: 'EID ki shopping kya kya ki hai'
        },
        {
            name: 'addMore',
            type: 'confirm',
            message: 'aur kya khareeda',
            default: 'false'
        }
    ]);
    todos.push(addTask.todo);
    condition = addTask.addMore;
    console.log(todos);
}
