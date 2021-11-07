const fs = require('fs');
const path = require('path');
let style = path.join(__dirname, 'styles');

fs.readdir(style, (err, files) => {
    if (err) throw err;
    let bundle = path.join(__dirname, 'project-dist', 'bundle.css');

    for (let i = 0; i < files.length; i++) {
        fs.stat(path.join(style, files[i]), (err, stats) => {
          if (err) throw err;
          
          if (stats.isFile() && path.extname(path.join(style, files[i])) == '.css') {
            fs.readFile(path.join(style, files[i]), 'utf-8', (err, files) => {
              if (err) throw err;
              fs.appendFile(bundle, files, (err) => {
                  if (err) throw err;
                }
              );
            });
          }
        });
    }
}); 


