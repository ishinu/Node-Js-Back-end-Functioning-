const file = require('fs')


file.readdir("NewNode",(err,files)=>{
    if(err){
        console.log(err)
    }else{
        for( let leep of files ){
            file.unlink("NewNode/"+leep,(err)=>{
                if(err){
                    console.log(err)
                }else{
                    console.log("File deleted successfully!")
                }
            });
        }
    }
});

file.rmdir("NewNode",(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("Folder deleted successfully!")
    }
});

file.mkdir("NewNode",(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("Folder created successfully!");
        file.writeFile("NewNode/NodeOne.txt","Content of newly created folder...",(err)=>{
            if(err){
                console.log(err)
            }else{
                console.log("File Created successfully!")
                file.readFile("NewNode/NodeOne.txt","utf-8",(err,data)=>{
                    if(err){
                        console.log(err)
                    }else{
                        console.log(data)
                    }
                });
            }
        });
    }
});