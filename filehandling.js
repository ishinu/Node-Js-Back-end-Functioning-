const file = require('fs')

// file.writeFile("Node/NodeOne.txt","Here is our first node js file",(err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log("File created successfully!")
//         file.readFile("Node/NodeOne.txt","utf-8",(err,data)=>{
//             if(err){
//                 console.log(err)
//             }else{
//                 console.log(data)
//             }
//         });
//     }
// });

file.rename("Node/NodeOne.txt","Node/NodeNewName.txt",(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("File renamed successfully!")
    }
});

// file.appendFile("NodeOne.txt","New Content!",(err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log("File data changed successfully")
//     }
// });

// file.readFile("NodeOne.txt","utf-8",(err,data)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log(data)
//     }
// });

// file.unlink("NodeOne.txt",(err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log("File deleted successfully!");
//     }
// });

