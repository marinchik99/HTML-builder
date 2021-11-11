const fs = require('fs');
const path = require('path');
const arr = [];

fs.writeFile(path.join(__dirname, 'project-dist', 'bundle.css'), '', function (err) {
  if (err) throw err;
});

     fs.readdir(path.join(__dirname, 'styles'), { withFileTypes: true }, function (err, files) {
        if (err) throw err;
        for (let i = 0; i < files.length; i++) {
         if (path.extname(files[i].name) === '.css') {
           arr.push(files[i]);
         }
       };
       for (let i = 0; i < arr.length; i++) {
         let readable = fs.createReadStream(path.join(__dirname, 'styles', arr[i].name));
         readable.on('data', function (data) {
           fs.appendFile(path.join(__dirname, 'project-dist', 'bundle.css'), data, function (err) {
            if (err) throw err;
           });
         });
       };
       
     });
   
