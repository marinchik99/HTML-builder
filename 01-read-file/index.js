const fs = require('fs');
const path = require('path');
const { stdout } = process;

let read = fs.createReadStream(path.join(__dirname, 'text.txt'))
read.on('data', (data) => { stdout.write(data); });