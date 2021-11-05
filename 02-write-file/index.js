const fs = require('fs');
const path = require('path');
const readline = require('readline');
const { stdin, stdout } = process;
const input = fs.createReadStream('greeting.txt', 'utf-8');
const out = fs.createWriteStream('greeting.txt');
console.log('Hello! Enter text. If you want to close, enter "exit" or press on "ctrl+c" ');

input.on('data', chunk => output.write(chunk));
input.on('error', error => console.log('Error', error.message));

stdin.on('data', (data) => {
    out.write(data);
    if (String(data).trim() === 'exit'){    
        process.exit()
}
});
process.on('exit', () => {stdout.write('Goodbye!\n');process.exit();});
process.on('SIGINT', () =>{process.exit();});