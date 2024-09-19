// How do I run this script? 
// node Task1b.js    

const { stdin, stdout } = require("process");

todoList = []; 
/**
 * YOUR OBJECTIVE: 
 * We do a lot in the addAndPrintTodos() funciton. It's also limited in
 * in what it can do because it takes no input.
 * Is there a way to seperate the concerns so that they could be tied to particular events
 * while also allowing us to add any todos that we want?
 *
 * Replace the "__" in each of the "__todo" function definitions to create more logical 
 * function names and define some logic to accomplish these tasks inspired by 
 * what you did in Part A. Call both function in mainTask1b().
 * 
 * In addition to updating function names, only modify the file under 
 * the "// YOUR CODE HERE" comments.
 */

function addTodo(todoString) {
    todoList.push(todoString);
    console.log(`To-do added: ${todoString}`);
}

function printTodos() {
    console.log('');
    console.log('Your To-dos:');
    for (let i = 0; i < todoList.length; i++){
    console.log(`${i + 1}. ${todoList[i]}`);
    }
    console.log('');
}

/**
 * Main is considered the entry point to a procedural program. Within y/cs,
 * it's rare for us to write procedures in JS, but for learning purposes
 * we do it here
 */
function mainTask1b() {
    const readline = require('readline');
    
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    // Function to handle the next step based on user input
    function handleInput() {
        rl.question('Type yes to see to-do list, or type a new to-do item to add to the list: ', (inpt) => {
            if (inpt.toLowerCase() === "yes") {
                printTodos(); // Print the to-do list
                rl.close(); // Close the readline interface after printing
            } else {
                addTodo(inpt); // Add new to-do item
                handleInput(); // Prompt again for further action
            }
        });
    }

    // Prompt user to add a to-do item
    rl.question('Enter a to-do: ', (todoInput) => {
        addTodo(todoInput); // Add the new to-do to the list
        handleInput(); // Call the function to handle the next step
    });
}

// This bit of code ensures that a main method exists! If it doesn't, then it throws an error
if (require.main === module) {
    // unlike other languages like Java, there is no built in main method. We use a funciton called
    // main by convention.
    mainTask1b();
}