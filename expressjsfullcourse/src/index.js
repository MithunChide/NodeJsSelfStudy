// const express = require('express');
// const path = require("path")

// const app = express();

// // console.log(__dirname);
// // console.log(path.join(__dirname,"../public"));
// const staticPath = path.join(__dirname,"../public");

// // built in midleware
//  app.use(express.static(staticPath));

// app.get("/",(req,res)=>{
//     res.send("hello wello");

// });

// app.listen(8000, ()=>{
//     console.log("listening the port at 8000");
// })

// lecture 5 

const express = require("express");

const app = express();
const path = require('path');
const hbs = require('hbs');
const requests = require('requests')
const port=8000;



// console.log(path.join(__dirname,"../public"));
// const staticPath = path.join(__dirname,"../public")
// built in middleware

// app.use(express.static(staticPath))

const templatePath = path.join(__dirname,"../template/views")
const partialsPath= path.join(__dirname,"../template/partials")


// to set the view engine
app.set("view engine","hbs");

app.set('views',templatePath)

hbs.registerPartials(partialsPath)
// template engine root 
app.get("/",(req,res)=>{
    res.render("index");
})

app.get("/",(req,res)=>{
    res.send("hello world")
})
app.get("/about",(req,res)=>{
     res.render("about")
    
})

app.get("/about/*",(req,res)=>{
    res.render("404",{
        errorcomments: "oops about us page not found"
    })
})




app.get("*",(req,res)=>{
    res.render("404",{
        errorcomments: "404 error page not found"
    })

})

app.listen(port,()=>{
    console.log(`listening the port no ${port}`);
})