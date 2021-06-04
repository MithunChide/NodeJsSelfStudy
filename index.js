//  REPL => Read Eval Print Loop
// 1: JS expression 
// 2: use variables
// 3: multiline code /loops
// 4: use(_) to get the last result 
// 5: we can use editor mode 





// ------------------||------------------------

const fs = require('fs');

// creating new file
// fs.writeFileSync('read.txt',"welcome to my world");
// fs.writeFileSync('read.txt'," hey Devloper! welcome to my world");

// adding some sentense in our same file we use .append
// fs.appendFileSync('read.txt', "how are you I am fine ! Thank you:)")


// const buf_data = fs.readFileSync('read.txt');
// console.log(buf_data);

// note:- Node.js includes an additional data types called buffer
// (not available in javascript browser)
// Buffer is mainly use to store binary data
// while reading from a file or recriving packets over the network  

// org_data = buf_data.toString();
// console.log(org_data);

// to rename the file 

// fs.renameSync('read.txt','readWrite.txt');

// for delete file we use fs.unlink('fileName)
// for delete folder we use fs.rmkdir(folderName)