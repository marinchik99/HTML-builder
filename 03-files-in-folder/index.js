const fs = require('fs');
const path = require('path');

let file = path.join(__dirname, 'secret-folder');
fs.readdir(file, (err, files) => {
    if (err) throw err;
    let res = '';
   
    for (let i=0; i<files.length; i++){
      fs.stat(file + "/" + files[i], (err, stats) => {
        if (err) throw err;
        if (stats.isFile()) {
          res = files[i].replace(".", " - ")+ " - " + (stats.size / 1024) + " kb";         
          console.log(res);
        }
      });
   }
  }); 

