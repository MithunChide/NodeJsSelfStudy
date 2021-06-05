const express = require('express');

const app = express();
const port=3000;

app.get("/",(req,res)=>{
    // for showing multiple html element we use res.write
    // for showing single elemnet of code we use res.send
    res.write("<h1>welcome to my home page</h1>");
    res.write("<h1>welcome to my home page it looks better</h1>");
    res.send();

});
app.get("/about",(req,res)=>{
    res.status(200).send("welcome to my about page");
});

app.get("/contact",(req,res)=>{
    // we can write res.json as well as res.send
    // the method are identical when an object or array is passed,
    // but res.json() will also convert non-object
    // such as null and undefined, which are not valid JSON.
    res.json([
        {
            id:1,
            name: "mithun",
            contact: 9763032728
        },
        {
            id:1,
            name: "mithun",
            contact: 9763032728
        },
        {
            id:1,
            name: "mithun",
            contact: 9763032728
        }
    ]);
});


app.listen(port,()=>{
    console.log(`listening to the port no ${port}`);
})