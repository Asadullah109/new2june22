import inquirer from 'inquirer';
// Example class to demonstrate usage
class Index {
    items;
    constructor() {
        this.items = [];
    }
    // Method to add an item to the index
    addItem(item) {
        this.items.push(item);
    }
    // Method to retrieve all items in the index
    getItems() {
        return this.items;
    }
    // Method to find an item by name
    findItemByName(name) {
        return this.items.find(item => item.name === name);
    }
    // Method to add random items to the index
    addRandomItems(count) {
        const adjectives = ['Red', 'Green', 'Blue', 'Yellow', 'Purple'];
        const nouns = ['Apple', 'Banana', 'Carrot', 'Dolphin', 'Elephant'];
        for (let i = 0; i < count; i++) {
            const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
            const noun = nouns[Math.floor(Math.random() * nouns.length)];
            const name = `${adjective} ${noun}`;
            this.addItem({ name });
        }
    }
    // Method to run the prompt for adding an item
    async promptAddItem() {
        const answers = await inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'Enter the name of the item:'
            }
        ]);
        const newItem = {
            name: answers.name
        };
        this.addItem(newItem);
        console.log(`Item '${newItem.name}' added to the index.`);
    }
    // Method to run either random or prompt based on user choice
    async run() {
        const answers = await inquirer.prompt([
            {
                type: 'list',
                name: 'choice',
                message: 'Choose an option:',
                choices: ['Add 10 random items', 'Add item interactively']
            }
        ]);
        if (answers.choice === 'Add 10 random items') {
            this.addRandomItems(10);
            console.log('Added 10 random items to the index.');
        }
        else if (answers.choice === 'Add item interactively') {
            await this.promptAddItem();
        }
        // Display all items
        const allItems = this.getItems();
        console.log("All items:", allItems);
    }
}
// Create an instance of Index and run the interactive part
const index = new Index();
index.run().catch(err => console.error(err));
