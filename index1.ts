import  inquirer from 'inquirer';

// Define an interface or class for index item
interface IndexItem {
    name: string;
}

// Example class to demonstrate usage
class Index {
    private items: IndexItem[];

    constructor() {
        this.items = [];
    }

    // Method to add an item to the index
    addItem(item: IndexItem) {
        this.items.push(item);
    }

    // Method to retrieve all items in the index
    getItems(): IndexItem[] {
        return this.items;
    }

    // Method to find an item by name
    findItemByName(name: string): IndexItem | undefined {
        return this.items.find(item => item.name === name);
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

        const newItem: IndexItem = {
            name: answers.name
        };

        this.addItem(newItem);
        console.log(`Item '${newItem.name}' added to the index.`);
    }
}

// Usage example
async function run() {
    const index = new Index();

    // Example: Add items interactively
    await index.promptAddItem();
    await index.promptAddItem();

    // Display all items
    const allItems = index.getItems();
    console.log("All items:", allItems);
}

run().catch(err => console.error(err));
