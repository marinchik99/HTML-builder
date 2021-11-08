const fs = require('fs');
const path = require('path');
const { mkdir, rm, readdir, writeFile, copyFile, stat } = fs.promises;

let file = path.join(__dirname, 'assets');
let dist = path.join(__dirname, 'project-dist');
let copy = path.join(__dirname, 'project-dist','assets');
let style = path.join(__dirname, 'styles');
const newIndex = path.join(dist, 'index.html');
const newStyle = path.join(dist, 'style.css');

build();

async function build(){
    copyAs();
    join();

    await addFile(newIndex, indexFile);
}

async function add(file, inner = "") {
    await fs.appendFile(file, inner);
  }

async function copyAs(){
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
}

async function join(){
fs.readdir(style, (err, files) => {
    if (err) throw err;
    let distStyle = path.join(__dirname, 'project-dist', 'style.css');

    for (let i = 0; i < files.length; i++) {
        fs.stat(path.join(style, files[i]), (err, stats) => {
          if (err) throw err;
          
          if (stats.isFile() && path.extname(path.join(style, files[i])) == '.css') {
            fs.readFile(path.join(style, files[i]), 'utf-8', (err, files) => {
              if (err) throw err;
              fs.appendFile(distStyle, files, (err) => {
                  if (err) throw err;
                }
              );
            });
          }
        });
    }
}); 
}

