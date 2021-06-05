// the http.createserver() method includes request and respone parameter which is suplied by Node.js

// the request object can be used to get information about the current HTTP request 
// // e.g.. url, request header, and data. 
// the response from the HTTP server is supposed for a current http request 

// if you response from the http server is supposed to be displayed at html 

// you should include an http header with the currect type: 


const  fs = require('fs');
const http = require('http');
// const { equal } = require('joi');

const data = fs.readFileSync(`${__dirname}/19_UserApi/userApi.json`,"utf-8")
    const objData = JSON.parse(data)
    

const server = http.createServer((req,res)=>{
    // console.log(req.url);
    if(req.url =="/"){
        res.end('hello from the home side mithun');
    }else if(req.url== "/about"){
        res.end('hello from the about side mithun');
    }else if(req.url== "/userApi"){
        res.end(objData[2].name);
    }
    else if(req.url== "/contact"){
        res.writeHead(200,{"Content-type":"appliction/json"})
        res.end('hello from the contactUs side mithun');

    }else{
        res.writeHead(404,{"Content-type":"text/html"})
        res.end("<h1>404 error page. page doesnot exit</h1>")
    }
    
});

server.listen(8000,"127.0.0.1",()=>{
    console.log(`listening to the port no 8000`);
});