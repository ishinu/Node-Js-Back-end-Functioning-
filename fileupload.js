const http = require('http');
const formidable = require('formidable');
const file = require('fs');

http.createServer((req,res)=>{
    if(req.url == '/fileupload'){
        var form = new formidable.IncomingForm();
        form.parse(req,(err,fields,files)=>{
            var oldpath = files.filetoupload.filepath;
            var newpath = '/home/shubham/Js/Nodeupload/' + files.filetoupload.originalFilename;
            file.rename(oldpath,newpath,(err)=>{
                res.write("File uploaded and moved")
                res.end()
            })
        });
    }else{
        res.writeHead(200,{'Content-type':'text/html'})
        res.write('<form action="fileupload" method="post" enctype="multipart/form-data">')
        res.write('<input type="file" name = "filetoupload"><br>');
        res.write('<input type = "submit">')
        res.write('</form>')
        return res.end()
    }
}).listen(8080);


// http.createServer((req,res)=>{
//     if(req.url == '/fileupload'){
//         var form = new formidable.IncomingForm()
//         form.parse(req,(err,fields,files)=>{
//             if(err){
//                 console.log(err)
//             }else{
//                 var oldpath = files.filetoupload.filepath
//                 var newpath = '/home/shubham/Js/Nodeupload' + files.filetoupload.originalFilename
//                 file.rename(oldpath,newpath,(err)=>{
//                     if(err){
//                         console.log(err)
//                     }
//                     res.write("File Uploaded and moved!")
//                     res.end()
//                 })  
//             }
//         });
//     }
//     else{
//         res.writeHead(200,{'Content-Type':'text/html'})
//         res.write('<form action="fileupload" method="post" enc-type="multipart/form-data">')
//         res.write('<input type="file" name="filetoupload"><br>')
//         res.write('<input type= "submit">')
//         res.write('</form>')
//         return res.end()
//     }
// }).listen(8080);

// http.createServer(function(req,res){
//     if(req.url == '/fileupload'){
//         var form = new formidable.IncomingForm();
//         form.parse(req,function(err,fields,files){
//             var oldpath = files.filetoupload.filepath;
//             var newpath = '/home/shubham/Js/Nodeupload/'+ files.filetoupload.originalFilename;
//             file.rename(oldpath,newpath,function(err){
//                 if(err) throw err;
//                 res.write('File uploaded and moved!');
//                 res.end();
//             });
//         });
//     }else{
//         res.writeHead(200,{'Content-Type': 'text/html'});
//         res.write('<form action = "fileupload" method="post" enctype="multipart/form-data">');
//         res.write('<input type="file" name = "filetoupload"><br>');
//         res.write('<input type="submit">');
//         res.write('</form>');
//         return res.end();
//     }
// }).listen(8080);

