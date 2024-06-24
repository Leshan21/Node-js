//console.log("Hello Node js!");

//<--------get input from users--------->// 

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Please enter your name: ", (name) => {
    console.log(`You entered: ${name}`);
    rl.close();  //<-----stop the function----->//
});

// The rl.question() method displays the query by
// writing it to the output, waits for user input
// to be provided on input, then invokes the
// callbackfunction passing the provided input as
// the first argument.

rl.on('close', () => {
  console.log("Interface closed..!");
  process.exit(0);
});

// rl.on() method is an event listner. This time  
// it work after the close method execute.
// rl.on('listning function', callback)






