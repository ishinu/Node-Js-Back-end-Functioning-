const http = require('http')
const url = require('url')
const file = require('fs')

// http.createServer((req,res)=>{
//     res.writeHead(201,{'Content-type':'text/html'})
//     var date = url.parse(req.url,true).query
//     var text = date.year + " " + date.month + " " + date.day
//     res.end(text)
// }).listen(8080);

http.createServer((req,res)=>{
    res.writeHead(201,{'Content-type':'text/html'})
    var content = url.parse(req.url,true)
    var fileName = "." + content.pathname
    file.readFile(fileName,"utf-8",(err,data)=>{
        if(err){
            console.log(err)
        }else{
            res.end(data)
        }
    });
}).listen(8080);