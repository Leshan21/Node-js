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

//Adds the listener function to the end of the
//listeners array for the event named eventName. 
//No checks are made to see if the listener has 
//already been added. Multiple calls passing the 
//same combination of eventNameand listener will 
//result in the listener being added, and called, 
//multiple times.






