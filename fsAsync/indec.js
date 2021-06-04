// CRUD:- Create Update Read Delete


const fs = require('fs');

// fs.writeFile('read.txt',"today is awesome day",
// (err)=>{
//     console.log("files is completed");
//     console.log(err);
// });


// we pass them a function as an argument -a callback-
// that gets call when that task completed
// the callback has an argument that tells you whether 
// the operation completed succesfully
// now we need to say what to do when fs.writeFile 
// has completed (even if its nothing), and start checking for error 


// fs,fs.appendFile('read.txt',"please liuke and subscribe my chanel",
// (err) => {
//     console.log("task succesfully completed");
// });

fs.readFile('read.txt',"utf-8",
(err,data)=>{
    console.log(data);
    console.log(err);

})