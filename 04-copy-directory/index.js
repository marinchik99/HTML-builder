const fs = require('fs');
const path = require('path');
let file = path.join(__dirname, 'files');
let copy = path.join(__dirname, 'files-copy');

fs.mkdir(copy, { recursive: true }, (err) => {
    if (err) throw err;
  });

  fs.readdir(copy, (err, files) => {
    if (err) throw err;
  
    for (let i=0; i<files.length; i++){
      let copyF = path.join(copy, files[i]);
  
      fs.unlink(copyF, (err) => {
        if (err) throw err;
      });
    };
  });  

  fs.readdir(file, (err, files) => {
    if (err) throw err;
  
    for (let i=0; i<files.length; i++){
      let fileP = path.join(file,files[i]);    
      let copyF = path.join(copy, files[i]);
  
      fs.copyFile(fileP, copyF, (err) => {
        if (err) throw err;
      });
    };
  });


