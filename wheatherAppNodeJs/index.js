const http = require('http');
const fs = require('fs');
var requests = require('requests');


const homeFile = fs.readFileSync("home.html","utf-8");
const replaceVal =(tempVal, orgVal) =>{
    let temperature =tempVal.replace("{%tempval%}",orgVal.main.temp);
     temperature =temperature.replace("{%tempvalmin%}",orgVal.main.temp_min);
     temperature =temperature.replace("{%tempvalmax%}",orgVal.main.temp_max);
     temperature =temperature.replace("{%location%}",orgVal.name);
     temperature =temperature.replace("{%country%}",orgVal.sys.country);
     temperature =temperature.replace("{%tempstatus%}",orgVal.weather[0].main);

     
     return temperature;
}

const server = http.createServer((req,res)=>{
    if(req.url == "/"){
        requests("https://api.openweathermap.org/data/2.5/weather?q=wardha&appid=36fa2ade7cdf201593c9248aafcbc8fe")
            .on('data',  (chunk) =>{
                const objData = JSON.parse(chunk);
                const arrData = [objData];
                // console.log(arrData[0].main.temp);
                const realTimeData = arrData
                .map( val=> replaceVal(homeFile,val))
                .join("")

                 res.write(realTimeData)
                console.log(realTimeData);
            })
            .on('end', (err)=> {
                if (err) return console.log('file not found', err);
                res.end();
            });
    }

});

server.listen(3000,"127.0.0.1");
