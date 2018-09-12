var fs = require('fs');

fs.appendFileSync('myFile.txt', 'Some test for my home work. ');

fs.appendFile('myFile.txt', 'Some test for my home work #2. ', function (err){
    if (err) throw err;
});

var text = fs.readFileSync('myFile.txt', 'utf-8');
console.log('text in file: ' + text);   