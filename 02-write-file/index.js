const fs = require('fs');
const path = require('path');
const readline = require('readline');
const input = path.join(__dirname, 'greeting.txt');
const out = fs.createWriteStream(input);
console.log('Hello! Enter text. If you want to close, enter "exit" or press on "ctrl+c" ');

const readLine = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });


readLine.addListener('line', (inp) => {
    
    if (inp === 'exit'){
        readLine.write('Goodbye!\n');    
        process.exit(0);
    }
    out.write(inp);
});
readLine.addListener('close', () => {
    readLine.write('Goodbye!\n');    
    process.exit(0);
} )