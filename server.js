const http = require('http')

// const hostname = '127.0.0.1'
// const port = 8080

// const created = http.createServer((req,res)=>{
//     res.writeHead(200,{'Content-type':'text/html'})
//     res.write("Here is the content!")
//     res.end()
// }).listen(8080);

// created.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);
//   });

const created = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.writeHead(200,{'Content-type':'text/html'})
        res.write("You accessed us from the root domain")
        res.end()
    }else{
        res.writeHead(200,{'Content-type':'text/html'})
        res.write("You accessed us from other than root domain")
        res.end()
    }
}).listen(8080);
