const figlet = require('figlet');

// Grab the first command line argument after the program name
const userInput = process.argv[2];

// Convert the user input to ASCII art using Figlet
figlet(userInput, function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    // Print the generated ASCII art
    console.log(data);
});