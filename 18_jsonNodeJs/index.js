const fs = require('fs');
const bioData ={
    name:"Mithun",
    age: 22,
    channel:"thapa technical"
}
// console.log(bioData.age);

// to convert Object into JSON 

// const jsonData= JSON.stringify(bioData)
// console.log(jsonData.channel);
// {"name":"Mithun","age":22,"channel":"thapa technical"}

// to convert json into object

// const objData = JSON.parse(jsonData)
// console.log(objData);

//  name: 'Mithun', age: 22, channel: 'thapa technical' }


// main work we wnat to do in 5 step
// 1: convert to json
// 2: dusre file me add krdo
// 3:readfile
// 4:ajain convert back to js obj 
// 5:console.log 


const jsonData = JSON.stringify(bioData);
// fs.writeFile("json1.json",jsonData,(err)=>{
//     console.log("done");
// });

fs.readFile("json1.json","utf-8",(err,data)=>{
    // console.log(data);
    const orgData = JSON.parse(data);
    console.log(data);
    console.log(orgData);
})
