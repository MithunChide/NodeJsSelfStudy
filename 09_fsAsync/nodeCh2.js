const fs = require('fs')

// fs.mkdir('Async',
// (err)=>{
//     console.log("make succesfully");
// });

// fs.writeFile('Async/bio.txt',"making new text file using async",
// (err)=>{
//     console.log("text file done");
// })


// fs.appendFile('Async/bio.txt',"I am using node js ...it is awesome",
// (err)=>{
//     console.log("append file done");
// })

// fs.readFile('Async/bio.txt','utf-8',
// (err,data)=>{
//     console.log(data);
// })


// fs.rename('Async/bio.txt',"Async/myBio.txt",
// (err)=>{
//     console.log("Rename succesfully");
// })

// fs.unlink("Async/myBio.txt",
// (err)=>{
//     console.log("delete file succesfully");
// })

fs.rmdir('Async',(err)=>{
    console.log('delete folder');

})